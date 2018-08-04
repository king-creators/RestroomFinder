import React, { Component } from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { Container, Content, Icon } from "native-base";
// import CustomHeader from "./CustomHeader";
import ListCard from "./ListCard";
import { withNavigation } from "react-navigation";
import CustomHeader from "../CustomHeader";

class ListResults extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "View List",
    drawerIcon: () => <Ionicons name="md-home" size={24} />
    // (
    // <Image
    //   source="https://png.icons8.com/metro/1600/settings.png"
    //   style={[styles.icon]}
    // />
    //   <ion-icon ios="ios-log-in" md="md-log-in" />

    // )
  });
  render() {
    const { history } = this.props;

    return (
      <ScrollView>
        <CustomHeader title="View List" />
        <Content
          contentContainerStyle={{
            flex: 1
            // alignItems: "center"
            // justifyContent: "center"
            // padding: 10
          }}
        >
          <View>
            <ListCard history={history} />
          </View>
        </Content>
      </ScrollView>
    );
  }
}

export default ListResults;

const styles = StyleSheet.create({
  icon: {
    height: 24,
    width: 24
  }
});
