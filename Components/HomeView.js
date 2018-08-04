import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from "react-native";

//library imports
import {
  Icon,
  Button,
  Container,
  Header,
  Content,
  Left,
  Right,
  Body,
  Title
} from "native-base";
//custom components imports
import CustomHeader from "./CustomHeader";
import MapView from "react-native-maps";
import Ionicons from "react-native-vector-icons/Ionicons";
import Hamburger from "react-native-hamburger";
//--------------------------------------------------------------------
import {connect} from 'react-redux'
import {getRestroom, Loading} from '../store/Restrooms'
//--------------------------------------------------------------------
const {width,height } = Dimensions.get('window')
const SCREEN_HEIGHT = height
const SCREEN_WIDTH = width
const ASPECT_RATION = SCREEN_WIDTH / SCREEN_HEIGHT
const LATTITUDE_DELTA = 0.0922
const LONGTITUDE_DELTA = LATTITUDE_DELTA * ASPECT_RATION 

class HomeView extends Component {
  constructor(props){
    super(props)
    this.state ={
      initialPostion : {
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0,
        longitudeDelta: 0,
        error: null
      },
      markerPosition: {
        latitude: 0,
        longitude: 0
      }
    }
    allRestrooms : []
  }
  
  componentDidMount(){
    this.props.Loading()
    navigator.geolocation.getCurrentPosition(
      (position)=> {
        let lat = parseFloat(position.coords.latitude)
        let long = parseFloat(position.coords.longitude)

        this.props.getRestroom({
          latitude: lat,
          longitude: long
        })

        const initalRegion = {
          latitude: lat,
          longitude: long,
          latitudeDelta: LATTITUDE_DELTA,
          longitudeDelta: LONGTITUDE_DELTA,
        }
        this.setState({initialPostion: initalRegion})
        this.setState({markerPosition: initalRegion})

      },(error)=> this.setState({error: error.message}),
      {enableHighAccuracy: true, timeout:2000, maximumAge: 1000, distanceFilter : 10}
    );
    this.watchId = navigator.geolocation.watchPosition((position)=>{
      let lat = parseFloat(position.coords.latitude)
      let long = parseFloat(position.coords.longitude)
      let lastRegion = {
        latitude: lat,
        longitude: long, 
        latitudeDelta: LATTITUDE_DELTA, 
        longitudeDelta: LONGTITUDE_DELTA,
      }
      this.setState({initialPostion: lastRegion})
      this.setState({markerPosition: lastRegion})
    })
  }
  
  componentWillUnmount(){
    navigator.geolocation.clearWatch(this.watchId)
  }


  render() {
    const isLoading = this.props.isLoading
    console.log('isLoading: ', isLoading);
    const allRestrooms = this.props.allRestrooms
    console.log('allRestrooms: ', allRestrooms);
      
    return (
      <Container>

        {
          isLoading ? 
          <View style={{ flexGrow: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Loading...</Text>
          {this.state.error ? <Text>Error: {this.state.error}</Text> : null}
        </View>
          
          :   
        <Content
          contentContainerStyle={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center", 
            padding: 10
          }}
        >
                  {/* // Map View   */} 
                  <MapView
                  style={styles.map}
                  region={this.state.initialPostion}
                >
                  <MapView.Marker
                    coordinate={this.state.markerPosition} 
                  >
                    <View style={styles.radius}> 
                      <View style={styles.marker} />
                    </View>
                  </MapView.Marker>
                    {/* restrooms */}
                    {
                      allRestrooms.length < 1 ? null : allRestrooms.map((restroom)=>{
                        return (
                          <MapView.Marker
                          key={restroom.id}
                          coordinate={{
                            latitude: restroom.coordinates.latitude,
                            longitude: restroom.coordinates.longitude,
                          }}
                          
                          >
                          </MapView.Marker>
                        ) 
                      })
                    }

                    {/* restroom */}
      
                </MapView>
      
                {/* //  Map View    */}
        

        </Content>
        }
      </Container>
    );
  }
}

const MapDispatchToProps = (dispatch) => {
  return {
    getRestroom : (userLocation)=> dispatch(getRestroom(userLocation)),
    Loading : ()=> dispatch(Loading())
  }
}

const MapStateToProps = state => {
  return {
    allRestrooms : state.restroom.allRestrooms,
    isLoading : state.restroom.isLoading,
    oneRestroom : state.restroom.oneRestroom
  }
}

export default connect(MapStateToProps ,MapDispatchToProps)(HomeView)

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24
  },
  map: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: "absolute"
  },
  radius: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    overflow: `hidden`,
    backgroundColor: "rgba(0,122,255,0.1)",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  marker: {
    height: 20,
    width: 20,
    borderWidth: 3,
    borderColor: "white",
    borderRadius: 20 / 2,
    overflow: "hidden",
    backgroundColor: "#007AFF"
  }
});







// {allRestrooms.length < 1 ? 
//   <MapView
//   style={styles.map}
//   initialRegion={{
//     latitude: 40.704958,
//     longitude:  -74.009139,
//     latitudeDelta: 0.0922,
//     longitudeDelta: 0.0421
//   }}
// >
//   <MapView.Marker
//     coordinate={{
//       latitude: 40.704958,
//       longitude:  -74.009139
//     }}
//   >
//     <View style={styles.radius}>
//       <View style={styles.marker} />
//     </View>
//   </MapView.Marker>
//     {/* restrooms */}

// </MapView>

// :
// <MapView
// style={styles.map}
// initialRegion={{
//   latitude: 40.704958,
//   longitude:  -74.009139,
//   latitudeDelta: 0.0922,
//   longitudeDelta: 0.0421
// }}
// >
// <MapView.Marker
//   coordinate={{
//     latitude: 40.704958,
//     longitude:  -74.009139
//   }}
// >
//   <View style={styles.radius}>
//     <View style={styles.marker} />
//   </View>
// </MapView.Marker>
//   {/* restrooms */}

//   {
//     allRestrooms.map((restroom)=>{
//       return(
        // <MapView.Marker
        // key={restroom.id}
        // coordinate={{
        //   latitude: restroom.coordinates.latitude,
        //   longitude:  restroom.coordinates.longitude
        // }}
        // >
//         </MapView.Marker>
//       )
//     })
//   }
// </MapView>


// }