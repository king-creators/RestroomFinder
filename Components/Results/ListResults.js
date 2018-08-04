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
    console.log(this.props, "list results");
    // console.log(DrawerActions.toggleDrawer());
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
              <ListCard history={history} />
              <ListCard history={history} />
              <ListCard history={history} />
              <ListCard history={history} />
              <ListCard history={history} />
            </View>
          </Content>
        </ScrollView>
      </React.Fragment>
    );
  }
}

export default withNavigation(ListResults);

const styles = StyleSheet.create({
  icon: {
    height: 24,
    width: 24
  }
});
