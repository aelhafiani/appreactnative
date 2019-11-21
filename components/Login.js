
import React from 'react';
import { StyleSheet, Text, View, Image, KeyboardAvoidingView, Platform } from 'react-native';
import LoginForm from './LoginForm';
export default class Login extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            styleOnfocus: {
                borderColor: '#1c2b58',
            }
            
        }
    }
    onFocus(){
        //styles.inputstyle['borderColor'] = '#cb5393'
        this.setState({styleOnfocus: {borderColor: "#cb5393"}});

    }
    render(){
     
        return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "padding"} enabled style={styles.main_container}>
            <View style={styles.logocontainer}>
                 <Image
                 style={styles.logo}
                 source={require('../images/logo.jpg')}
                />
              <Text style={styles.connection_text}>CONNEXION LIVREUR </Text>
            </View>
         <LoginForm navigation={this.props.navigation} />
        </KeyboardAvoidingView >
     
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
    connection_text:{
        borderColor: '#1c2b58',
        marginTop:10,
        fontSize:19,
        letterSpacing:0.9,
    },
    logo:{
        width:165,
        height : 110
    },
  
    
})