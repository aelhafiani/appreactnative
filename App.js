import React, { Component } from 'react';
import Login from './components/Login';
import { AsyncStorage } from 'react-native';

import Navigations from './Navigations/Navigations';
import {Provider} from 'react-redux'
import store from './Store/Store';
import Axios from 'axios';

import { LOGIN_FAILED } from './actions/types';



export default class App extends Component {
  
 
constructor(props) {
  super(props);
  
  this._axiosInterceptor()
}



_axiosInterceptor = ()=>{
    AsyncStorage.getItem('app_token').then((token)=>{
      Axios.defaults.headers.common['Authorization'] = 'Bearer '+token;
        
      })
      Axios.create({
        timeout: 10000,
        withCredentials: true
      })
      Axios.interceptors.response.use((response) => {
        return response;
      },  (error)=> {

        if (error.response.status === 401) {
       

            AsyncStorage.removeItem('app_token').then(()=>{
             // const action = {type:LOGIN_FAILED}
            //  this.props.dispatch(action)
           
           })
         //   this.props.navigation.navigate('Login')

         
    
        }
        return Promise.reject(error.response);
      
      });

  
}

render(){

  return (
    
    <Provider  store={store}>
      <Navigations  />
    </Provider>
    
  );
}
 
}

