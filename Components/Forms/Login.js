import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Container, Content, Icon, Button } from "native-base";
import CustomHeader from "../CustomHeader";
import Ionicons from "react-native-vector-icons/Ionicons";

class Login extends Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions = ({ navigation }) => ({
    title: "Login",
    drawerIcon: () => <Ionicons name="md-log-in" size={24} />
    // (
    // <Image
    //   source="https://png.icons8.com/metro/1600/settings.png"
    //   style={[styles.icon]}
    // />
    //   <ion-icon ios="ios-log-in" md="md-log-in" />

    // )
  });

  render() {
    return (
      <Container>
        <CustomHeader title="Login" />
        <Content
          contentContainerStyle={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            padding: 10
          }}
        >
          <Button full onPress={() => this.props.navigation.navigate("Home")}>
            <Text style={{ color: "white" }}>Go to Home screen</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default Login;

const styles = StyleSheet.create({
  icon: {
    height: 24,
    width: 24
  }
});
