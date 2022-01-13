
import React, { Component } from 'react';
import {
    View,
    TouchableOpacity,
    SafeAreaView,
    FlatList,
    Text,
    TextInput,
    Keyboard,
    ActivityIndicator,
    RefreshControl
} from 'react-native';
import { responsiveFontSize, responsiveWidth, responsiveHeight } from '../../config/responsive';
import Card from '../../components/Card';
import styles from './styles'
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import { connect } from 'react-redux';
import { getRestrauntList, getImageList } from '../../actions/home'
import SortOptions from '../../components/SortOptions';

const options = [{
    id: 0,
    text: "4 stars and above",
    value: 4
},
{
    id: 1,
    text: "3 stars and above",
    value: 3
},
{
    id: 2,
    text: "2 stars and above",
    value: 2
},
{
    id: 3,
    text: "1 star and above",
    value: 1
}]

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            restrauntList: [],
            searchBrand: '',
            imageList: [],
            randomImageList: [],
            loading: true,
            sort: false,
            sortText: "",
            showOptions: false,
            sortValue: 0,
            isRefreshing: false,
            showErrorToast: false

        }
        this.newArr = []

    }
    componentDidMount() {
        //call restraunt list and image list api

        this.props.getRestrauntList();
        this.props.getImageList()

    }

    componentDidUpdate(prevProps) {

        if (prevProps?.gettingRestrauntList != this.props.gettingRestrauntList &&
            this.props.restrauntArray?.length != 0) {
            this.setState({
                loading: false,
                restrauntList: this.props.restrauntArray
            })
        }

        if (prevProps?.gettingImageList != this.props.gettingImageList && this.props.imgArray?.length != 0) {

            var arry = []
            //random images
            for (var i = 0; i < this.props.restrauntArray.length; i++) {
                arry.push(this.props.imgArray[Math.floor(Math.random() * this.props.imgArray?.length)])
            }
            this.setState({
                imageList: arry
            }, () => {
            })
        }
        if (prevProps?.restaurantListError != this.props.restaurantListError &&
            this.props.restaurantListError) {
            this.setState({
                loading: false,
                showErrorToast: true
            }, () => {
                setTimeout(() => {
                    this.setState({
                        showErrorToast: false

                    })
                }, 2000)
            })
        }
    }

    onRefreshList = () => {
        this.props.getRestrauntList();
        this.props.getImageList()
    }



    getFilteredResults = () => {
        let { type } = this.props;

        if (this.state.restrauntList == undefined || this.state.restrauntList == null) return [];

        if (this.state.searchBrand == undefined || this.state.searchBrand?.length == 0) {
            if (this.state.sort) {
                const filter1 = this.state.restrauntList.filter((item) => item["Stars"] > this.state.sortValue);
                return filter1;

            }
            else {
                return this.state.restrauntList;

            }
        }

        //here check if sort is applied along with search
        if (this.state.sort) {
            var filter2 = this.state.restrauntList
                .filter(item =>
                    type && type === SearchComponent.WORDS
                        ? new RegExp(`\\b${this.state.searchBrand}`, 'gi').test(item['Brand'])
                        : new RegExp(`${this.state.searchBrand}`, 'gi').test(item['Brand']),
                )
                .sort(function (a, b) {
                    return a < b ? -1 : 1;
                });
            var finalList = filter2.filter((item) => item["Stars"] > this.state.sortValue);
            return finalList

        } else {
            return this.state.restrauntList
                .filter(item =>
                    type && type === SearchComponent.WORDS
                        ? new RegExp(`\\b${this.state.searchBrand}`, 'gi').test(item['Brand'])
                        : new RegExp(`${this.state.searchBrand}`, 'gi').test(item['Brand']),
                )
                .sort(function (a, b) {
                    return a < b ? -1 : 1;
                });
        }

    };

    renderListItemView = ({ item, index }) => {
        return (
            <Card
                brand={item?.Brand}
                variety={item?.Variety}
                style={item?.Style}
                index={index}
                imageList={this.state.imageList}
                country={item?.Country}
                stars={item?.Stars}
                navigation={this.props.navigation}
                topTen={item["Top Ten"]}
            />
        )

    }

    renderEmptyConatiner = searchTerm => {
        if (searchTerm != '' || this.props.restaurantListError ||
            this.props.imageListError) {
            return (
                <View style={styles.emptyContainer}>
                    <Text style={{
                        fontFamily: 'Montserrat-Regular',
                        color: 'black'
                    }}>No results found</Text>
                </View>
            );
        } else {
            return null;
        }
    };

    showmodalOptions = () => {
        this.setState({
            showOptions: !this.state.showOptions
        })
    }
    render() {
        return (
            <SafeAreaView edges={['left', 'right']} style={{ flex: 1, backgroundColor: "white" }}>
                <View style={styles.container}>
                    <View style={{
                        justifyContent: 'center', alignItems: 'center', flexDirection: 'row', paddingTop: responsiveHeight(2)
                    }}>
                        <Icon1 name={"noodles"} size={18} style={{ alignSelf: "center" }} color={'black'} />
                        <Text style={{
                            alignSelf: "center",
                            fontFamily: 'Montserrat-SemiBold',
                            color: 'black',
                            fontSize: responsiveFontSize(2.5), paddingLeft: responsiveHeight(1)
                        }}>Noodle Store</Text>
                    </View>

                    <View style={styles.searchRow}>
                        <View style={styles.searchBox}>
                            <TextInput
                                value={this.state.searchBrand}
                                placeholderTextColor={"#9B9B9B"}
                                placeholder='Search by brand'
                                style={styles.textInput}
                                onChangeText={value => {
                                    this.setState({
                                        searchBrand: value
                                    })
                                }}
                            />
                            {this.state.searchBrand != "" ?
                                <TouchableOpacity
                                    onPress={() => {
                                        Keyboard.dismiss();
                                        this.setState({ searchBrand: '' })
                                    }}
                                    style={{}}>
                                    <Icon name="times" size={18} color={"grey"} />
                                </TouchableOpacity>
                                : null}
                        </View>

                        <TouchableOpacity style={{
                            height: 46,
                            width: responsiveHeight(5),
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginTop: responsiveHeight(2),
                        }}
                            onPress={() => this.showmodalOptions()}>
                            <Text style={{
                                fontFamily: 'Montserrat-Regular',
                                alignSelf: "flex-end",
                                color: 'black'
                            }}>Sort</Text>

                        </TouchableOpacity>
                    </View>
                    {this.state.sort &&
                        <View style={{
                            flexDirection: 'row', justifyContent: "flex-end",
                            marginTop: responsiveHeight(1)
                        }}>
                            <Text style={{
                                fontFamily: 'Montserrat-Regular',
                                fontSize: responsiveFontSize(1.5),
                                color: 'black'
                            }}>{this.state.sortText}</Text>
                            <View style={{
                                backgroundColor: "#F5F5F5",
                                width: responsiveHeight(0.3),
                                marginHorizontal: responsiveHeight(1)
                            }} />
                            <TouchableOpacity
                                onPress={() => this.setState({
                                    sort: false,
                                    sortValue: 0,
                                    sortText: ""
                                })}>
                                <Text style={{
                                    fontFamily: 'Montserrat-Regular',
                                    fontSize: responsiveFontSize(1.5),
                                    color: "black"
                                }}>Remove</Text>
                            </TouchableOpacity>
                        </View>
                    }
                    {this.state.loading ?
                        <View style={{ flex: 1, justifyContent: "center" }}>
                            <ActivityIndicator
                                color="grey"
                                size={18} />
                        </View>
                        :


                        <View style={{ flex: 1, marginTop: responsiveHeight(2) }}>
                            <FlatList
                                refreshControl={
                                    <RefreshControl
                                        refreshing={this.state.isRefreshing}
                                        colors={['grey']}
                                        onRefresh={() => {
                                            this.onRefreshList();
                                        }}
                                        tintColor="grey"
                                        titleColor="grey"
                                    />
                                }
                                data={this.getFilteredResults()}
                                renderItem={this.renderListItemView}
                                keyExtractor={(item, index) => `gird ${index}`}
                                showsVerticalScrollIndicator={false}
                                ListEmptyComponent={this.renderEmptyConatiner(this.state.searchBrand)}

                                style={{ marginBottom: responsiveHeight(0.5) }}
                            />
                        </View>}

                </View>
                {this.state.showOptions &&
                    <SortOptions
                        visible={this.state.showOptions}
                        options={options}
                        hideMenuModal={() => { this.setState({ showOptions: false }) }}
                        selected={this.state.sortValue}
                        sortOptionClicked={(id, item) => {
                            this.setState({
                                sort: true,
                                sortText: item?.text,
                                sortValue: item?.value,
                                showOptions: false
                            }, () => {
                                // this.getFilteredResults()
                            })

                        }}
                    />}
                {this.state.showErrorToast &&
                    <View style={{
                        backgroundColor: "#9B9B9B40",
                        padding: responsiveHeight(1),
                        bottom: responsiveHeight(3),
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: 10,
                        marginHorizontal: responsiveHeight(2)
                    }}>
                        <Text style={{
                            fontFamily: 'Montserrat-Regular',
                            fontSize: responsiveFontSize(1.5),
                            color: 'black'
                        }}>Please check your network connection</Text></View>
                }
            </SafeAreaView>
        )
    }
}

const mapStateToProps = state => {
    return {
        restrauntArray: state.homeReducer.restrauntArray,
        imgArray: state.homeReducer.imgArray,
        gettingRestrauntList: state.homeReducer.gettingRestrauntList,
        gettingImageList: state.homeReducer.gettingImageList,
        imageListError: state.homeReducer.imageListError,
        restaurantListError: state.homeReducer.restaurantListError

    }
}

const mapDispatchToProps = dispatch => {
    return {
        getRestrauntList: () => dispatch(getRestrauntList()),
        getImageList: () => dispatch(getImageList())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);