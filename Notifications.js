//Notifications
import React, { Component } from 'react';
import {
  View,FlatList,TouchableOpacity,StyleSheet,Text,Alert,Image,Button 
} from 'react-native';

export default class Notifications extends Component {
  constructor(props){
    super(props);
     this.state = {
 
    };
    
  }
  render(props) {
    const { navigation } = this.props;
    return (
     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Notifications</Text>
      <Button title="OK" onPress={()=>navigation.navigate('Feed')} />
    </View>
    );
  }
}
