import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Button
} from "react-native";
import { Container, Content, Icon } from "native-base";
// import CustomHeader from "./CustomHeader";
import ListCard from "./ListCard";
import { withNavigation, DrawerActions } from "react-navigation";
import CustomHeader from "../CustomHeader";
import { Header, Left, Right, Body, Title } from "native-base";
//importing thunks
import {getRestroom, Loading} from '../../store/Restrooms'
import {connect} from 'react-redux'

class ListResults extends Component {
  constructor() {
    super();
    this.toggleDrawer = this.toggleDrawer.bind(this);
  }
  toggleDrawer = () => {
    this.props.navigation.dispatch(DrawerActions.toggleDrawer());
  };
  render() {
    const { history } = this.props;
    console.log('this is list result!!!!!!!!',this.props.allRestrooms);
    return (
      <React.Fragment>
        <ScrollView>
          <CustomHeader
            title="View List"
            toggleDrawer={this.props.toggleDrawer}
          />
          <Content
            contentContainerStyle={{
              flex: 1
            }}
          >
            <View>
              {
                this.props.allRestrooms.map((restroom)=>{
                  return (
                    <ListCard history={history} key={restroom.id} restroom={restroom} userLocation={this.props.userCurrentLocation}/>
                  )
                })
              }

              
            </View>
          </Content>
        </ScrollView>
      </React.Fragment>
    );
  }
}

const MapDispatchToProps = dispatch => {
  return {
    getRestroom : (userLocation)=> dispatch(getRestroom(userLocation)),
    Loading : ()=> dispatch(Loading())
  }
}

const MapStateToProps = state => {
  return {
    allRestrooms : state.restroom.allRestrooms,
    isLoading : state.restroom.isLoading,
    oneRestroom : state.restroom.oneRestroom,
    userCurrentLocation : state.restroom.userCurrentLocation
  }
}

export default connect(
  MapStateToProps,
  MapDispatchToProps
) (withNavigation(ListResults));




const styles = StyleSheet.create({
  icon: {
    height: 24,
    width: 24
  }
});
