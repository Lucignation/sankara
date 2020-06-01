import * as actionTypes from '../actions/types';

import cameraImg from '../public/problems.svg';


const initialState = {
    cameras: [
        {
            "id": 1,
            "camera": cameraImg ,
            "cameraName": "Starlink Camera",
            "cameraId": "6720WR"
        },
        {
            "id": 2,
            "camera": cameraImg ,
            "cameraName": "Moovlink Camera",
            "cameraId": "8716WR"
        },
        {
            "id": 3,
            "camera": cameraImg,
            "cameraName": "Geralink Camera",
            "cameraId": "9320TY"
        },
        {
            "id": 4,
            "camera": cameraImg ,
            "cameraName": "Nikklink Camera",
            "cameraId": "5770KG"
        },
        {
            "id": 5,
            "camera": cameraImg,
            "cameraName": "GTlink Camera",
            "cameraId": "8717PD"
        },
        {
           " id": 6,
            "camera": cameraImg,
            "cameraName": "Polink Camera",
            "cameraId": "8945GH"
        }
    ],
    currentCamera: null,
    user: 'Gerald Obama',
    isAuthenticated: false,
    loading: false,
    error: null
};

export default (state = initialState, action) => {
    switch(action.type){
        case actionTypes.ALL__CAMERAS:
            return{
                ...state,
                /**
                 * I was suppose to fill the Cameras in the state with whatever I get from the action through payload after I have fetched
                *the data from the backend in action then dispatch it to the reducer to update the state. But in this case, 
                *I will just hard code it in here. 
                *Before I show the number of cameras found, I will have to check if the user is authenticed too but in this case, I have limited time to 
                *use my NodeJS to code a small authentification route for this project
                */
                cameras: action.payload,
                loading: false
            }

        case actionTypes.LOAD__USER:
            return{
                ...state,
                /**
                 * I was suppose to fill the user in the state with whatever I get from the action through payload after I have fetched
                *the data from the backend in action then dispatch it to the reducer to update the state. But in this case, 
                *I will just hard code here
                */
                user: state.user
            }
            
        case actionTypes.SET__LOADING:
            return{
                ...state,
                loading: true
            }
        default:
            return state;
    }
}