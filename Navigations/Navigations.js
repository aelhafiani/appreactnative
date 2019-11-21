// Navigation/Navigation.js

import React from 'react' // N'oubliez pas l'import de React ici. On en a besoin pour rendre nos components React Native Image ! 
import { createAppContainer} from 'react-navigation'
import {createStackNavigator, HeaderTitle} from 'react-navigation-stack'
import Login from '../components/Login';
import LivraisonDetail from '../components/LivraisonDetail';
import Listlivraisons from '../components/List_livraisons';
import Splash from '../components/Splash';

const LivreurNavigator = createStackNavigator({
 
  Splash: {
    screen: Splash,
    navigationOptions: {
        header: null,
    
    }
  },
  
  Login: {
    screen: Login,
    navigationOptions: {
        header: null,
    
    }
  },
  List_livraisons: {
    screen: Listlivraisons,
    
    navigationOptions: {
      title: "Tournée du jour",
      headerStyle: {  
        marginLeft:12,
        marginRight:12 },
      headerTitleStyle: { 
        textAlign:"center", 
        fontSize:18,
        flex:1,
        
        
       
    },
  }, 
},
  LivraisonDetail: {
    screen: LivraisonDetail,
    navigationOptions: {
      title: 'Livraison',

    }
  },
  
  
 
  

 
})

export default createAppContainer(LivreurNavigator)