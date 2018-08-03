import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

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

class HomeView extends Component {
  constructor(props) {
    super(props);
  }
  // static navigationOptions = ({ navigation }) => ({
  //   title: "Home",
  //   headerLeft: (
  //     <Icon
  //       name="ios-menu"
  //       style={{ paddingLeft: 10 }}
  //       onPress={() => navigation.navigate("DrawerOpen")}
  //     />
  //   ),
  //   drawerIcon: (
  //     <Image
  //       source="https://png.icons8.com/metro/1600/settings.png"
  //       style={[styles.icon]}
  //     />
  //   )
  // });
  // static navigationOptions = ({ navigation }) => ({
  //   title: "Home",
  //   headerLeft: (
  //     <Icon
  //       name="ios-menu"
  //       style={{ paddingLeft: 10 }}
  //       onPress={() => navigation.navigate("DrawerOpen")}
  //     />
  //   )
  // drawerIcon: (
  //   <Image
  //     source="https://png.icons8.com/metro/1600/settings.png"
  //     style={[styles.icon]}
  //   />
  // )
  // });

  render() {
    // console.log(this.props);
    return (
      <Container>
        {/* <CustomHeader
          title="Home"
          navigation={this.props.screenProps.navigation}
        /> */}
        {/* <Hamburger
          active={this.state.active}
          type="cross"
          onPress={() => this.setState({ active: !this.state.active })}
        /> */}
        {/* <CustomHeader title="Home" {...screenProps} /> */}
        {/* <Header>
          <Left>
            <Button transparent onPress={() => navigate("DrawerToggle")}>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>HomeScreen</Title>
          </Body>
          <Right />
        </Header> */}
        <Content
          contentContainerStyle={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            padding: 10
          }}
        >
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421
            }}
          >
            <MapView.Marker
              coordinate={{
                latitude: 37.78825,
                longitude: -122.4324
              }}
            >
              <View style={styles.radius}>
                <View style={styles.marker} />
              </View>
            </MapView.Marker>
          </MapView>
        </Content>
      </Container>
    );
  }
}

export default HomeView;

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
