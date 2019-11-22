import React, { Component } from 'react';
import Login from './components/Login';
import { AsyncStorage } from 'react-native';

import Navigations from './Navigations/Navigations';
import { createStackNavigator, createAppContainer } from 'react-navigation'
import {Provider} from 'react-redux'
import store from './Store/Store';
import Axios from 'axios';

import { LOGIN_FAILED } from './actions/types';
import NavigationService from './NavigationService';

const AppContainer = createAppContainer(Navigations);

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
            NavigationService.navigate('Login');
        }
        return Promise.reject(error.response);
      });
}
render(){
  return (
    
    <Provider  store={store}>
      <AppContainer ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }} />
    </Provider>
    
  );
}
}

