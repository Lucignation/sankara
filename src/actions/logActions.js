import * as actionTypes from './types';
import axios from 'axios';

export const allCameras = () => async dispatch => {
    try {
        setLoading();
        /** 
         * This is the page where I get to fetch the data from the backend and then 
         * dispatch it to the reducer to update the state.
         * But in this case, I have written this code to desmonstrate how I fetch my data from an endpoint 
         * and how I will dispatch it to the reducer to update the state
         **/
        const res = await axios.get('/api/cameras')
        dispatch({
            type: actionTypes.ALL__CAMERAS,
            payload: res
        })
    } catch (error) {
        console.error(error);
    }
}

export const loadUser = () => async dispatch =>{
    try {
        const res = await axios('/api/auth/user')
    dispatch({
        type: actionTypes.LOAD__USER,
        payload: res
    })
    } catch (error) {
        console.error(error)
    }
}

//This setLoading function will be called whenever I need to perform async 
export const setLoading = () =>{
    return{
        type: actionTypes.SET__LOADING
    }
}