//Login.js
import React from "react";
import { View, StyleSheet, Image, TextInput,TouchableOpacity,Text,ImageBackground } from "react-native";

const Login = (props) => {
    return (

      <ImageBackground
      style={styles.imageBackground}
      source={{uri:'https://sv1.picz.in.th/images/2020/07/28/EYFj0b.jpg'}}
      blurRadius={1}>


          <View style={styles.middle} >
             <Image
                style={styles.image}
                source={{uri:'https://sv1.picz.in.th/images/2020/07/28/Ez0iOl.png'}}
              />
              <TextInput placeholder="Username" style={styles.textInput}/>

              <TextInput placeholder="Password" style={styles.textInput}/>

              <TouchableOpacity style={styles.buttonLogin}>
                <Text style={{fontSize:15}}>Login</Text>
              </TouchableOpacity>

               <TouchableOpacity style={styles.buttonRegister}>
                <Text style={styles.text}>Registration</Text>
              </TouchableOpacity>
        </View>


      </ImageBackground>
    );
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
    width: 120,
    height: 120,
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
   buttonRegister: {
    justifyContent:"center",
    alignItems: "flex-end",
  },
  textInput:{
    borderRadius:25,
    height: 50, 
    borderColor: 'gray',
    borderWidth: 1,
    paddingStart:20,
    marginBottom:8
  },
  text:{
    fontSize:12,
    textDecorationLine:"underline",
    color:'blue',
    marginBottom:16
  }
  
});
export default Login;
