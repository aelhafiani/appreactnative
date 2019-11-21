
import React, { Component } from 'react';
import {
    Platform,
    ToastAndroid,
    AsyncStorage
  } from 'react-native';
  import NetInfo,{useNetInfo} from "@react-native-community/netinfo";
import Axios from 'axios';


export default class Utils {

    static showMessage(message) {
        if (Platform.OS === 'ios') {
            alert(message)
        } else {
            ToastAndroid.show(message, ToastAndroid.SHORT);
        }
    }

 static TestToken(){
  AsyncStorage.getItem('app_token').then((token)=>{
        if(token){
            
            return new Promise((resolve, reject) => {
                console.log('hani hnea')
                console.log(token)
                let link = Config.fullapiPath+Config.testToken
                Axios.get(link,{
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer '+token
                    },
                }).then((response) => { 
                    
                    console.log('token ok') 
                                
                })
                .catch((error) => {
                    console.log('token invalid') 
                   
                })
            })
           
       }
    }).catch(error=>{
        console.log('token not exeste')   
    })
       
 }
/*
    static networkListener =  NetInfo.addEventListener(state => {
        if(!state.isConnected){
           // this.showMessage("Vous êtes déconnecté")
        }
    })
*/
    static objToQueryString(obj) {
        const keyValuePairs = [];
        for (let i = 0; i < Object.keys(obj).length; i += 1) {
          keyValuePairs.push(`${encodeURIComponent(Object.keys(obj)[i])}=${encodeURIComponent(Object.values(obj)[i])}`);
        }
        return keyValuePairs.join('&');
      }

 
    
    

}