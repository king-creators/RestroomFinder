import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Container, Content, Icon } from "native-base";
import CustomHeader from "./CustomHeader";

export default class ListResults extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "SignUp",
    headerLeft: (
      <Icon
        name="ios-menu"
        style={{ paddingLeft: 10 }}
        onPress={() => navigation.navigate("DrawerOpen")}
      />
    ),
    drawerIcon: (
      <Image
        source="https://png.icons8.com/metro/1600/settings.png"
        style={[styles.icon]}
      />
    )
  });
  render() {
    return (
      <Container>
        <CustomHeader
          title="List View"
          drawerOpen={() => this.props.navigation.navigate("DrawerOpen")}
        />
        <Content
          contentContainerStyle={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            padding: 10
          }}
        >
          <View>
            <Text>This is the results page.</Text>
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    height: 24,
    width: 24
  }
});
