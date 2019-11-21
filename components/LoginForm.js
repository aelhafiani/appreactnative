import React from 'react';
import { StyleSheet,AsyncStorage, Text, View, Image,TextInput,TouchableOpacity,KeyboardAvoidingView } from 'react-native';
import Config from '../Utils/Config'
import Utils from '../Utils/Utils'
import * as axios from 'axios';
import {connect} from 'react-redux'
import {loginUser} from '../actions'
import Spinner from '../components/Spinner'

 class LoginForm extends React.Component{

    constructor(props){
        super(props)
        this.state = {
          
            username:'',
            password:'',
            
        }
      
    }
    componentWillMount(){
        console.log('will mount :' +this.props.login)
        AsyncStorage.getItem('app_token').then((token)=>{
            console.log(token)
          
        })

        
    }
   
    componentWillReceiveProps(nextProps){
        console.log('will recive props :' + nextProps.login)
        
        if(nextProps.login){
            this.props.navigation.navigate('List_livraisons')
        }else{
            this.props.navigation.navigate('Login')
        }
    }
    _onClickValidate = ()=>{
        if (this.state.username.length == 0) {
             Utils.showMessage('Merci de saisir votre email ou username')
          } else
            if (this.state.password.length == 0) {
              Utils.showMessage('Merci de saisir votre mot de password')
            } else {
              this.setState({ fetching: true })
             const  {username,password} = this.state
             this.props.loginUser( {username,password})             
             // this._login();
            }
    }

    onFocus = () =>{
        //styles.inputstyle['borderColor'] = '#cb5393'
        //this.styleOnfocus = {borderColor: "#cb5393"};

    }
    
    _renderButton(){
        if(this.props.loading){
            return (<Spinner />)
        }
        return (
            <TouchableOpacity  onPress={this._onClickValidate} style={styles.button} >
              <Text style={styles.buttonTitle}>Se connecter</Text>
            </TouchableOpacity>
        )
    }

    render(){
        
     //   cons navigato = this.
     //   console.log(this.props.navigation)
        return (
            <View style={styles.container}>
                <View style={styles.group_form}>
                    <Text style={styles.label}>Adress email</Text>
                    <TextInput autoCapitalize='none'  onChangeText={(username) => this.setState({ username })} onFocus={ () => this.onFocus() } style={[styles.inputstyle]} />
                </View>
                <View style={styles.group_form}>
                    <Text style={styles.label}>Mot de passe</Text>
                    <TextInput secureTextEntry onChangeText={(password) => this.setState({ password })} onFocus={ () => this.onFocus() } style={[styles.inputstyle ]} />
                </View>
                <View style={styles.buttonContainer}>
                { this._renderButton()}
                </View>
               
            <Text style={styles.passeoublie}>J'ai oublié mon mot de passe</Text>
            </View>
     
          );
    }

}

const styles = StyleSheet.create({
    container:{
        padding:20
    },
   
 /*   form:{
        flex:1,
        marginTop : '14%',
        padding : 30,
        
    },*/
    inputstyle:{
        borderRadius: 6,
        borderWidth: 2,
        
        height:50,
        marginTop:5,
        paddingLeft:12
    },
    group_form:{
        marginTop:20,
    },
    button:{
       backgroundColor : '#1c2b58',
        borderRadius: 40, 
        alignItems: 'center',
        justifyContent: 'center', 
        height: 50,
    },
    buttonContainer:{
        marginTop: '5%',
        height: 50,
        width:'80%',
        marginLeft : '20%',
    },
    label:{
    color: '#1c2b58',
    fontWeight : '700'
    },
    buttonTitle: {
        color: '#FFFFFF',
        fontSize: 18,
        textAlign: 'center',
      },
      passeoublie:{
        fontWeight : '700',
        fontSize:15,
        marginTop:'10%',
        color:'#138cbf',
        textAlign:'center'
      }
})

const mapStateToProps = (state) => {
    return {
      error: state.auth.error,
      loading: state.auth.loading,
      user: state.auth.user,
      login : state.auth.login
    }
  }

export default connect(mapStateToProps, {loginUser})(LoginForm)