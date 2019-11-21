import React from 'react';
import { StyleSheet, Text, View,FlatList, Image,TextInput,TouchableOpacity,KeyboardAvoidingView,AsyncStorage } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
import dataTest from '../Helpers/dataTest.json';
import LivraisonItem from './LivraisonItem';
import moment from 'moment'
import {connect} from 'react-redux'
import { LOGIN_FAILED } from '../actions/types';
import { FontAwesome } from '@expo/vector-icons';
import {TestToken} from '../actions'
import {loginUser} from '../actions'
import Utils from '../Utils/Utils';
import Axios from 'axios';
import Config from '../Utils/Config';

 class Listlivraisons extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            tounrne:{}
        }
        
      }

      static navigationOptions = ({ navigation }) => {
        return {
        
          headerRight: () => (
              <TouchableOpacity style={styles.logout_container} onPress={navigation.getParam('logout')}>
              <Text style={{fontWeight:'bold',fontSize:16}}>FPS12</Text>
              <FontAwesome style={{marginLeft:12}} name="sign-out" size={22} color="red" />
              </TouchableOpacity>
            
          ),
          headerLeft: () => (
            <Image style={styles.image}
            source={require('../images/logoleft.png')}
            />
        ),
        };
      };

      componentDidMount(){
        
          this.props.navigation.setParams({logout:this._logout})
      }
      componentWillMount(){
        AsyncStorage.getItem('app_token').then((token)=>{

       
        let todaytournne = moment().format("2019-11-20")
        let link = Config.fullapiPath+'/livreurs/'+this.props.user.id+'/tournees/'+todaytournne
            Axios.get(link,{
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer totot'+token
                },
              }).then((response)=>{
                
                
            }).catch((error)=>{
           
            })
        })
       
          /*
          AsyncStorage.getItem('app_token').then((token)=>{
            if(token){
                let todaytournne = moment().format("YYYY-MM-DD")
                let link = Config.fullapiPath+'/livreurs/'+this.props.user.id+'/tournees/'+todaytournne
                Axios.get(link,{
                  headers: {
                      'Content-Type': 'application/json',
                      'Authorization': 'Bearer '+token
                  },
                }).then((response)=>{
                    console.log('response status')
                    console.log(response.status)
                }).catch((error)=>{
                    console.log(error.response.status)
                })
            }else{
                this.props.navigation.navigate('Login')
            } 
          
          })
         */
      }
      _logout = ()=>{
          AsyncStorage.removeItem('app_token').then(()=>{
          const action = {type:LOGIN_FAILED}
          this.props.dispatch(action)
          this.props.navigation.navigate('Login')
       })
       
         
      }
      _loadDetailLivraison = () => {
        this.props.navigation.navigate('LivraisonDetail')
      }
    render(){
           // this.props.TestToken()
         //  Utils.TestToken()
           console.log(this.props)
        let today = moment().format("dddd DD/MM/YYYY")

        return(
            <View style={styles.maincontainer}>
                <View style={styles.headerUser}>
                    {this.props.user ? <Text  style={[styles.username ,styles.textheader]}>{this.props.user.email}</Text>: <Text>Totot</Text>}
                    <Text  style={[styles.workday, styles.textheader]}>{today}</Text>
                </View>
                <View style={styles.headercollect}>
                   <View style={styles.tableInfo}>
                       <View style={styles.row}>
                            <View style={[styles.col,styles.col1]}><Text style={styles.tabkey}>collectés</Text><Text style={styles.tabval}>1</Text></View>
                            <View style={[styles.col,styles.col2]}><Text style={styles.tabkey}>collectés a la carte</Text><Text style={styles.tabval}>1</Text></View>
                       </View>
                       <View style={styles.row}>
                            <View style={[styles.col,styles.col1]}><Text style={styles.tabkey}>livrés</Text><Text style={styles.tabval}>1</Text></View>
                            <View style={[styles.col,styles.col2]}><Text style={styles.tabkey}>livrés a la carte</Text><Text style={styles.tabval}>1</Text></View>
                       </View>
                   </View>
                   <View style={styles.icontype}>
                   <TouchableOpacity onPress = {()=>{}} style={[styles.map,styles.icontop]}>
                   <Image style={styles.image}
                    source={ require('../images/map.png')}
                    />
                    </TouchableOpacity>
                    <TouchableOpacity onPress = {()=>{}} style={[styles.iteneraire,styles.icontop]}>
                   <Image style={styles.image}
                    source={require('../images/iteneraire.png')}
                    />
                    </TouchableOpacity>
                   </View>
                </View>
              
                <FlatList style={styles.lisContainer}
                data={dataTest}
                renderItem={({item}) => <LivraisonItem
                displayDetailLivraison = {this._loadDetailLivraison}
                item={item} />}
                keyExtractor={(item) => item.id.toString()}
                />
               
                
            </View>
        )
    }
}


const styles = StyleSheet.create({
    maincontainer:{
        flex:1,
        backgroundColor:'#f7f8fa',
    },
    headerUser:{
        backgroundColor:'#009cdf',
        flexDirection:'row' ,
        height:40,
        paddingLeft:6,
        paddingRight:6,
        paddingTop:8,
    },
    workday:{
        flex:1,
        textAlign:'right'  
    },
    textheader:{
        color:'#fff',
        fontWeight:'bold',

    },
    headercollect:{
        backgroundColor:'#1c2b58',
        flexDirection:'row',

    },
    tabkey:{
        color : '#fff',
        width:'84%'
    },
    tabval:{
        color:'#f59f1d'
    },
    row:{
        borderBottomColor: '#3d4a70',
        borderBottomWidth: 1,
        flexDirection:'row',
       
  
    },
    col:{
        borderRightColor: '#3d4a70',
        borderRightWidth: 1,
        padding:6,
        paddingLeft:12,
        flex:1,
        flexDirection:'row',
        
    },
    col1:{
        flex:1
    },
    col2:{
        flex:2
    },
    tableInfo:{
        width:'76%'
    },
    icontype:{
      flexDirection:'row'  
    },
    
    icontop:{
        paddingTop:14,
        paddingLeft:5
    },

    lisContainer:{
        padding : 14,
        
    },
    logout_container:{
        flexDirection:'row'
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

export default connect(mapStateToProps,null)(Listlivraisons)