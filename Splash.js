//Splash.js
import React, { Component } from 'react';
import {
  View,FlatList,TouchableOpacity,StyleSheet,Text,Alert,Image,Button,ImageBackground 
} from 'react-native';

export default class Splash extends Component {
  constructor(props){
    super(props);
     this.state = {
 
    };
  }
  
  componentDidMount() {
        
    }

  render(props) {
    const { navigation } = this.props;
    return (
      <ImageBackground
            style={styles.imageBackground}
      source={{uri:'https://sv1.picz.in.th/images/2020/07/28/EYFj0b.jpg'}}
      blurRadius={1}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
           <Text style={{color:"white", fontSize:32}}>Splash Screen</Text>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
   imageBackground:{
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  }
});
