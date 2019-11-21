import { LOGIN_ATTEMPT, LOGIN_FAILED, LOGIN_SUCCESS, TOKEN_INVALID, TOKEN_VALID } from "./types";
import Utils from "../Utils/Utils";
import Config from "../Utils/Config";
import Axios from "axios";
import {AsyncStorage} from 'react-native'

export const TestToken = () => {
    return (dispatch) => {
        AsyncStorage.getItem('app_token').then((token)=>{
            if(token){
                Axios.defaults.headers.common['Authorization'] = 'Bearer '+token;
           }
        }).catch(error=>{
            console.log('token not exeste')   
            console.log(error)
        })
    }
  }

 const onLoginFailed = (dispatch)=>{
    dispatch({type:TOKEN_INVALID})
}
 const onLoginSuccess = (dispatch)=>{
        dispatch({type:TOKEN_VALID})
  }