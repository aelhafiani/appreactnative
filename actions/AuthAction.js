import { LOGIN_ATTEMPT, LOGIN_FAILED, LOGIN_SUCCESS } from "./types";
import Utils from "../Utils/Utils";
import Config from "../Utils/Config";
import Axios from "axios";
import {AsyncStorage} from 'react-native'

export const loginUser = ({username,password}) => {
    return (dispatch) => {
     dispatch({ type: LOGIN_ATTEMPT})
     var link = Config.fullapiPath + Config.login;
     Axios.post(link,{ login: username, password: password }).then(
       
         (response) => {
            handleResponse(dispatch,response)
       })
       .catch( (error) => {
           console.log(`error${error}`)
            onLoginFailed(dispatch)
       })
    }
  }

  const handleResponse = (dispatch,response) =>{
    if(response.status == 200){ 
        onLoginSuccess(dispatch,response.data.user,response.data.token)
    }else{
        onLoginFailed(dispatch)
    }
  }

  const onLoginFailed = (dispatch)=>{
      Utils.showMessage("User Not Found")
      dispatch({type:LOGIN_FAILED})
  }

  const onLoginSuccess = (dispatch,user,token)=>{
    AsyncStorage.setItem('app_token',token).then(()=>{
        dispatch({type:LOGIN_SUCCESS ,user})
    })
  }