//Home.js
import React, { Component } from 'react';
import {
  View,FlatList,TouchableOpacity,StyleSheet,Text,Alert,Image,Button 
} from 'react-native';

export default class Home extends Component {
  constructor(props){
    super(props);
     this.state = {
 
    };
    
  }
  render(props) {
    const { navigation } = this.props;
    return (
     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{fontSize:30}}>Home</Text>
    </View>
    );
  }
}
