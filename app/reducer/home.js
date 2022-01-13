import * as actionTypes from '../actions/actionTypes';

let initialState = {
    restrauntArray: [],
    imgArray: [],
    gettingRestrauntList: true,
    gettingImageList: true,
    restaurantListError: false,
    imageListError: false
}
const homeReducer = (state = initialState, actions) => {
    switch (actions.type) {
        case actionTypes.GET_RESTRAUNT_LIST:
            return {
                ...state,
                gettingRestrauntList: true,
                restaurantListError: false
            }
        case actionTypes.GET_RESTRAUNT_LIST_SUCCESS:
            return {
                ...state,
                gettingRestrauntList: false,
                restrauntArray: actions?.data,
            }
        case actionTypes.GET_RESTRAUNT_LIST_ERROR:
            return {
                ...state,
                gettingRestrauntList: false,
                restaurantListError: true

            }

        case actionTypes.GET_IMAGE_LIST:
            return {
                ...state,
                gettingImageList: true,
                imageListError: false

            }
        case actionTypes.GET_IMAGE_LIST_SUCCESS:
            return {
                ...state,
                gettingImageList: false,
                imgArray: actions?.data,

            }
        case actionTypes.GET_IMAGE_LIST_FAIL:
            return {
                ...state,
                gettingImageList: false,
                imageListError: true


            }
        default: {
            return state;
        }
    }
}
export default homeReducer;

