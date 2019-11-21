
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Platform } from 'react-native';
import LoginForm from './LoginForm';
export default class LivraisonItem extends React.Component{

    constructor(props){
        super(props)
        this.state = {
 
            
        }
    }

    render(){
        const item = this.props.item
        return (
            
            <TouchableOpacity 
            onPress = {()=>{this.props.displayDetailLivraison()}}
            style={styles.container}>
            <View style={styles.TextGlobalcontainer}>
              <View  style={styles.header}>
              <Image style={{marginRight:10}}
                source={require('../images/livraison_icon.png')}
                />
              <Text style={[styles.textBlueBold,styles.textype]}>
              {item.livraisontype}
              </Text>
              <Text style={styles.textBlue}>{item.heure}</Text>
              </View>
              <View style={styles.textContainer}>
                  <Text style={styles.textBlueBold}>{item.client} | {item.pay}</Text>
                  <Text style={styles.textBlue}>{item.address}</Text>
                  <Text style={styles.textBlue}>{item.codepostal}</Text>
              </View>
            </View>
            <View>
            <TouchableOpacity  onPress={()=>{}} style={styles.buttonRight} >
                <Image style={{marginRight:10}}
                    source={require('../images/item-row.png')}
                    />
            </TouchableOpacity>
            </View>      
        </TouchableOpacity>
     
     
          );
    }

}

const styles = StyleSheet.create({  
    container:{
        borderColor:'#dfe4f2',
        borderRadius:5,
        borderWidth:2,
        backgroundColor:'#fff',
        marginBottom:10,
        flexDirection:'row'
        
    },
    TextGlobalcontainer:{
        flex:1
    },
    buttonRight:{
        width:40,
        alignItems:'center',
        justifyContent: 'center', 
        flexGrow:1,
    },
    textContainer:{
        padding:5
    },
    header:{
        flexDirection:'row',
        borderBottomColor:'#dfe4f2',
        borderBottomWidth:1,
        padding:5,
    },
    textype:{
        flex:1
    },
    textBlueBold : {
        color:'#1c2b58',
        fontWeight : 'bold'
    },
    textBlue : {
        color:'#1c2b58',
    }
})