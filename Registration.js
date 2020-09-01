//Registration.js
import React, { Component } from 'react';
import {
  View,FlatList,TouchableOpacity,StyleSheet,Text,Alert,Image,Button, ImageBackground, TextInput 
} from 'react-native';

export default class Registration extends Component {
  constructor(props){
    super(props);
     this.state = {
       
    };
    
  }
  render(props) {
    const { navigation } = this.props;
	 return (

      <ImageBackground
      style={styles.imageBackground}
      source={{uri:'https://sv1.picz.in.th/images/2020/07/28/EYFj0b.jpg'}}
      blurRadius={1}>


          <View style={styles.middle} >
             <View style={{flexDirection:'row',marginBottom:16}}> 
                <Image
                  style={styles.image}
                  source={{uri:'https://sv1.picz.in.th/images/2020/07/28/Ez0iOl.png'}}
                />
                <Text style={{fontSize:25,marginStart:8, alignSelf:"center"}}>Registration</Text>
              </View>

              <TextInput placeholder="First Name" style={styles.textInput}/>

              <TextInput placeholder="Last Name" style={styles.textInput}/>

              <TextInput placeholder="StudentID" style={styles.textInput}/>

              <TextInput placeholder="Username" style={styles.textInput}/>

              <TextInput placeholder="Password" style={styles.textInput}/>

              <TouchableOpacity style={styles.buttonLogin}>
                <Text style={{fontSize:15}}>Registor</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.buttonLogin}>
                <Text style={{fontSize:15}}>Cancel</Text>
              </TouchableOpacity>

        </View>
      </ImageBackground>
    );
   
  }
}
const styles = StyleSheet.create({
  middle: {
    backgroundColor:'#ffffff',
    borderWidth: 1,
    padding:16,
    margin:16,
    borderTopLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  image: {
    width: 60,
    height: 60,
    resizeMode:'contain',
    alignSelf:'center',
    marginBottom:8
    
  },
  imageBackground:{
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  buttonLogin: {
    justifyContent:"center",
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    borderRadius:25,
    height: 50,
    marginBottom:8
  },
  textInput:{
    borderRadius:25,
    height: 50, 
    borderColor: 'gray',
    borderWidth: 1,
    paddingStart:20,
    marginBottom:8
  },

  
});
