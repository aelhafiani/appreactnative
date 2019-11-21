import React from 'react';
import { StyleSheet, Text, View,FlatList, Image,TextInput,TouchableOpacity,KeyboardAvoidingView } from 'react-native';
import { FontAwesome,MaterialCommunityIcons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
export default class LivraisonDetail extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
      
        }
      }
    render(){
        return(
            <ScrollView style={styles.container}>
               
            <View style={styles.header_container}>
                <View style={styles.header_title}>
                <Image style={{marginRight:10,marginTop:6}}
                        source={require('../images/icon_big_livraison.png')}
                        />
                <Text style={styles.header_text_title}>Livraison | </Text>
                <Text style={styles.header_text_heur}>8h00 - 9h00 Appartement Devant la porte </Text>
                </View>
                <View style={styles.header_icon}>
                    <Image style={{marginRight:10}}
                        source={require('../images/detail_livraison_icon_header.png')}
                        />
                </View>
                
            </View>
            <View>
                <Text style={styles.labelText}>Nom</Text>
                <Text style={styles.valueText}>Clément Paquette</Text>
                <Text style={styles.labelText}>TYPE ABONNEMENT</Text>
                <Text style={styles.valueText}>1 semaine sur 2</Text>
                <Text style={styles.labelText}>ADRESSE</Text>
                <Text style={styles.valueText}>55 rue du Faubourg-Saint-Honoré 75008 Paris, France</Text>
               <View style={styles.mapcontainertext}>
               <Text >OUVRIR DANS</Text>
               <Text style={{marginLeft:12,marginTop:-3,color:"#009cdf", fontWeight:'bold',fontSize:18}}>Google Maps | </Text>
               <Text style={{color:"#009cdf",marginTop:-3, fontWeight:'bold',fontSize:18}}>Waze</Text>
               </View>
               <Text style={styles.labelText}>NUMERO DE TELEPHONE</Text>
               <Text style={{color:"#009cdf", fontWeight:'bold',fontSize:18}}>06 11 22 33 44</Text>
               <Text style={styles.labelText}>CODE D'ACCES</Text>
               <Text style={styles.valueText}>A2BE5TZ09Z</Text>
               <Text style={styles.labelText}>INFOS DU JOUR</Text>
               <Text style={{color:'red',fontWeight:'bold'}}>Le Lorem Ipsum est simplement du faux texte employé dans la composition</Text>
               <Text style={styles.labelText}>INFO COMPLEMENTAIRE</Text>
               <Text style={styles.valueText}>55 rue du Faubourg-Saint-Honoré 75008 Paris, France</Text>

            </View>
            <View style={styles.navbottomDetail}>
                <TouchableOpacity  onPress={()=>{}} style={[styles.iconBleuBottom,{marginRight:10}]} >
                    <FontAwesome name="barcode" size={20} color="#2fb2eb" />
                </TouchableOpacity>
                <TouchableOpacity  onPress={()=>{}} style={styles.iconBleuBottom} >
                    <MaterialCommunityIcons
                         name="file-pdf" size={20} color="#2fb2eb" />
                </TouchableOpacity>
                <TouchableOpacity  onPress={()=>{}}  style={styles.buttonBottom} >
                <MaterialCommunityIcons 
                         name="check"  size={20} color="#fff" />
                    <Text style={styles.buttonBottomText}>Livraison Effectuée</Text>
                </TouchableOpacity>
                <TouchableOpacity  onPress={()=>{}} style={styles.iconBleuBottom} >
                    <FontAwesome
                         name="user-times" size={20} color="red" />
                </TouchableOpacity>
            </View>
            </ScrollView> 
        )
    }
}

const styles = StyleSheet.create({ 
    container:{
        flex:1,
        backgroundColor:'#f7f8fa',
        paddingLeft:10,
        paddingRight:10,
        paddingTop:6,
        paddingBottom:20
    },
    header_container:{
        flexDirection:'row',
       
    },
    header_text_title:{
        fontSize:20,
        fontWeight:'bold',
        color:'#1c2b58',
    },
    header_title:{
        flexDirection:'row',
        flex:1,
        
    },
    header_text_heur:{
        width:120,
        color:'#1c2b58',
        fontWeight:'bold'
    },
    bleutext:{
        color:'#1c2b58',
    },
    labelText:{
        color:"#cb5393",
        marginTop:12,
    },
    valueText:{
        color:'#1c2b58',
        fontSize:16,
    },
    mapcontainertext:{
        flexDirection:'row',
    },
    navbottomDetail:{
        backgroundColor:'#1c2b58',
        flex:1,
        flexDirection:'row',
        height:50,
        padding:7,
        borderRadius:7,
        marginTop:15,
        marginBottom:20,
        alignItems:'center',
        justifyContent:'center'
       
    },
    iconBleuBottom:{
       width:37,
       height:37,
       backgroundColor:'#fff',
       borderRadius:100,
       padding:7
    },
    buttonBottom:{
        backgroundColor:'#cb5393',
        height:37,
        borderRadius:8,
        padding:8,
        marginRight:15,
        marginLeft:15,
        width:'55%',
        flexDirection:'row',
        borderRadius:50
    },
    buttonBottomText:{
        color:"#fff",
        fontSize:13,
        textTransform:'uppercase'
    }
})