import React, { Component } from "react";
import {
  View,
  Text,
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
import Results from "./Results/";
//--------------------------------------------------------------------
import { connect } from "react-redux";
import { getRestroom } from "../store/thunks";
//--------------------------------------------------------------------
const { width, height } = Dimensions.get("window");
const SCREEN_HEIGHT = height;
const SCREEN_WIDTH = width;
const ASPECT_RATION = SCREEN_WIDTH / SCREEN_HEIGHT;
const LATTITUDE_DELTA = 0.0922;
const LONGTITUDE_DELTA = LATTITUDE_DELTA * ASPECT_RATION;

class ListView extends Component {
  constructor(props) {
    super(props);
    this.toggleDrawer = this.toggleDrawer.bind(this);
  }
  toggleDrawer = () => {
    this.props.screenProps.navigation.dispatch(DrawerActions.toggleDrawer());
  };
  render() {
    return (
      <React.Fragment>
        {/* <CustomHeader title="List View" /> */}
        <Results toggleDrawer={this.toggleDrawer} />
      </React.Fragment>
    );
  }
}

export default ListView;
