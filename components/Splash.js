import React, { Component } from 'react';
import {Text,StyleSheet,View,Image,AsyncStorage} from 'react-native'
import Axios from 'axios';
import {connect} from 'react-redux'
import { LOGIN_FAILED, LOGIN_SUCCESS } from '../actions/types';
import Config from '../Utils/Config';
class Splash extends Component {


    componentDidMount(){
 /*     AsyncStorage.getItem('app_token').then(()=>{
        let link = Config.fullapiPath+Config.account
        Axios.get(link).then((response) => {
            this.props.dispatch({type:LOGIN_SUCCESS , user:response.data })
            this.props.navigation.navigate('List_livraisons')
        })
        
    })
*/
    }

    render() {
        return (
        <View style={styles.logocontainer}>
            <Image
            style={styles.logo}
            source={require('../images/logo.jpg')}
           />
       </View>
        );
    }
}



const styles = StyleSheet.create({
    main_container:{
        flex:1,
        marginTop:25,
    },
    logocontainer:{
        alignItems:'center',
        flexGrow:1,
        justifyContent:'center'
    },

    logo:{
        width:165,
        height : 110
    },
  
    
})

const mapStateToProps = (state) => {
    return {
      error: state.auth.error,
      loading: state.auth.loading,
      user: state.auth.user,
      login : state.auth.login
    }
  }
  export default connect(mapStateToProps, null)(Splash)