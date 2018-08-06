import React, { Component } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  AppRegistry,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions
} from "react-native";

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
import { withNavigation, DrawerActions } from "react-navigation";
//--------------------------------------------------------------------

import { connect } from "react-redux";
//--------------------------------------------------------------------
import { getRestroom, Loading } from "../store/Restrooms";
const { width, height } = Dimensions.get("window");
const SCREEN_HEIGHT = height;
const SCREEN_WIDTH = width;
const ASPECT_RATION = SCREEN_WIDTH / SCREEN_HEIGHT;
const LATTITUDE_DELTA = 0.00322;
const LONGTITUDE_DELTA = LATTITUDE_DELTA * ASPECT_RATION;
import getDirections from "react-native-google-maps-directions";



class HomeView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialPostion: {
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
    this.handleGetDirections = this.handleGetDirections.bind(this)
  }

  //Google

  handleGetDirections = (restroomLocation) => {
    console.log(restroomLocation)
    const data = {
      source: {
        latitude: this.state.initialPostion.latitude,
        longitude: this.state.initialPostion.longitude
      },
      destination: {
        latitude: restroomLocation.latitude,
        longitude: restroomLocation.longitude
      },
      params: [
        {
          key: "travelmode",
          value: "walking" // may be "walking", "bicycling" or "transit" as well
        },
        {
          key: "dir_action",
          value: "navigate" // this instantly initializes navigation using the given travel mode
        }
      ]
    };
  
    getDirections(data);
  };



  componentDidMount() {
    this.props.Loading();
    navigator.geolocation.getCurrentPosition(
      position => {
        let lat = parseFloat(position.coords.latitude);
        let long = parseFloat(position.coords.longitude);

        this.props.getRestroom({
          latitude: lat,
          longitude: long
        });

        const initalRegion = {
          latitude: lat,
          longitude: long,
          latitudeDelta: LATTITUDE_DELTA,
          longitudeDelta: LONGTITUDE_DELTA
        };
        this.setState({ initialPostion: initalRegion });
        this.setState({ markerPosition: initalRegion });
      },
      error => this.setState({ error: error.message }),
      {
        enableHighAccuracy: true,
        timeout: 2000,
        maximumAge: 1000,
        distanceFilter: 10
      }
    );
    this.watchId = navigator.geolocation.watchPosition(position => {
      let lat = parseFloat(position.coords.latitude);
      let long = parseFloat(position.coords.longitude);
      let lastRegion = {
        latitude: lat,
        longitude: long,
        latitudeDelta: LATTITUDE_DELTA,
        longitudeDelta: LONGTITUDE_DELTA
      };
      this.setState({ initialPostion: lastRegion });
      this.setState({ markerPosition: lastRegion });
    });
    this.forceUpdate();
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchId);
  }
  toggleDrawer = () => {
    this.props.screenProps.navigation.dispatch(DrawerActions.toggleDrawer());
  };
  render() {
    const isLoading = this.props.isLoading;

    const allRestrooms = this.props.allRestrooms;
    // console.log(allRestrooms);
    return (
      <React.Fragment>
        <Container>
          <CustomHeader title="Home" toggleDrawer={this.toggleDrawer} />
          <Content
            contentContainerStyle={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              padding: 10
            }} 
          > 

          {


            isLoading ?  
            
            <View style={[styles.container, styles.horizontal]}>
                {/* <Image
                  source={require('./_assets/loading.gif')}
                /> */}
            <ActivityIndicator size="large" color="#fba919" /> 
            </View> 
          : 


          

 

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
                            longitude: restroom.coordinates.longitude
                          }}
                          title={restroom.name}

                          description={
                            restroom.location.address1 +
                            " " +
                            restroom.location.city +
                            " " +
                            restroom.location.state +
                            " " +
                            restroom.location.zip_code
                          }
                          // onPress={() => (this.handleGetDirections(restroom.coordinates))}
                          image={require("./_assets/toilet-paper.png")}
                        />
                      );
                    })}
              </MapView>
                  }
          </Content>
        </Container>
      </React.Fragment>
    );
  }
}

const MapDispatchToProps = dispatch => {
  return {
    getRestroom: userlocation => dispatch(getRestroom(userlocation)),
    Loading: () => dispatch(Loading())
  };
};

const MapStateToProps = state => {
  return {
    allRestrooms: state.restroom.allRestrooms,
    isLoading: state.restroom.isLoading,
    oneRestroom: state.restroom.oneRestroom
  };
};

// const newHome = withNavigation(HomeView);

export default connect(
  MapStateToProps,
  MapDispatchToProps
)(HomeView);

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
  },
  restroom: {
    height: 20,
    width: 20,
    borderWidth: 3,
    borderColor: "red",
  },
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10

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

// </MapView.Marker>

//       )
//     })
//   }
// </MapView>

// }

//   <MapView
//   style={styles.map}
//   region={this.state.initialPostion}
// >
//   <MapView.Marker
//     coordinate={this.state.markerPosition}
//   >
//     <View style={styles.radius}>
//       <View style={styles.marker} />
//     </View>
//   </MapView.Marker>
//     {/* restrooms */}
//     {
//       allRestrooms.length < 1 ? null : allRestrooms.map((restroom)=>{
//         return (
//           <MapView.Marker
//           key={restroom.id}
//           coordinate={{
//             latitude: restroom.coordinates.latitude,
//             longitude: restroom.coordinates.longitude,
//           }}

//           >
//           </MapView.Marker>
//         )
//       })
//     }
//   </MapView>

// <MapView style={styles.map} region={this.state.initialPostion}>
// <MapView.Marker coordinate={this.state.markerPosition}>
//   <View style={styles.radius}>
//     <View style={styles.marker} />
//   </View>

// </MapView.Marker>
// {/* </MapView> */}

//   {
//     allRestrooms.length < 1 ? null : allRestrooms.map((restroom)=>{
//       return (
//         <MapView.Marker
//         key={restroom.id}
//         coordinate={{
//           latitude: restroom.coordinates.latitude,
//           longitude:  restroom.coordinates.longitude
//         }}
//       >
//           </MapView.Marker>
//       )
//     })
//   }
//   </MapView>
