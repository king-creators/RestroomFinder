import React, { Component } from "react";
import { Button } from "react-native";
import { View, Text } from "react-native";
import MapView from 'react-native-maps';
import { StyleSheet } from 'react-native';

class Home extends React.Component {
  static navigationOptions = {
    title: "Do you have to go?"
  };
  
  render() {
    const { navigate } = this.props.navigation;
    return (

        <MapView
        style={styles.map}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
        <MapView.Marker
          coordinate={{
            latitude: 37.78825,
            longitude: -122.4324,
          }}
        >
        <View style={styles.radius}>
          <View style={styles.marker} />
        </View> 
        </MapView.Marker>
          </MapView>

    );
  }
}

const styles = StyleSheet.create({
  map : {
    left: 0,
    right: 0,
    top : 0,
    bottom: 100,
    position: 'absolute'
  },
  radius : {
    width: 50,
    height: 50,
    borderRadius: 50/2,
    overflow : `hidden`,
    backgroundColor : 'rgba(0,122,255,0.1)',
    borderWidth: 1,
    alignItems : 'center',
    justifyContent: 'center'
  },
  marker : {
    height: 20,
    width: 20,
    borderWidth : 3,
    borderColor : 'white',
    borderRadius : 20/2,
    overflow : 'hidden',
    backgroundColor: '#007AFF'
  }

})

export default Home;
