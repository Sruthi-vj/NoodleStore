import { baseUrl, imageUrl } from '../constants/apiConstants';
import { _GET } from '../axios/apiFormat';
import *  as actionTypes from './actionTypes';

export const getRestrauntList = () => {
    return (dispatch, getState) => {
        dispatch({ type: actionTypes.GET_RESTRAUNT_LIST });

        _GET(baseUrl)
            .then(response => {
                if (response?.status == 200) {
                    dispatch({
                        type: actionTypes.GET_RESTRAUNT_LIST_SUCCESS,
                        data: response?.data
                    });
                } else {
                    dispatch({
                        type: actionTypes.GET_RESTRAUNT_LIST_ERROR
                    })
                }
            })
            .catch(error => {
                console.log('error 1' + error);
                dispatch({
                    type: actionTypes.GET_RESTRAUNT_LIST_ERROR,
                    data: error?.response ?? error
                });
            });
    }
}

export const getImageList = () => {
    return (dispatch, getState) => {
        dispatch({ type: actionTypes.GET_IMAGE_LIST });

        _GET(imageUrl)
            .then(response => {
                if (response?.status == 200) {

                    dispatch({
                        type: actionTypes.GET_IMAGE_LIST_SUCCESS,
                        data: response?.data
                    });
                } else {
                    dispatch({
                        type: actionTypes.GET_IMAGE_LIST_FAIL
                    })
                }
            })
            .catch(error => {
                console.log('error  2 ' + error);
                dispatch({
                    type: actionTypes.GET_IMAGE_LIST_FAIL,
                    data: error?.response ?? error
                });
            });
    }
}