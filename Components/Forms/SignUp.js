import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import {
  FormLabel,
  FormInput,
  FormValidationMessage,
  Button
} from "react-native-elements";

import { connect } from "react-redux";
import { createStackNavigator } from "react-navigation";
import { Container, Content, Icon } from "native-base";
import CustomHeader from "../CustomHeader";
import { createBottomTabNavigator } from "react-navigation";
import HomeView from "../HomeView";
import ListResults from "../Results/ListResults";
import Go from "../Go";
import Ionicons from "react-native-vector-icons/Ionicons";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      password: "",
      email: ""
    };
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit() {
    console.log(this.state);
    // this.props.addUser(this.state);
  }
  static navigationOptions = ({ navigation }) => ({
    title: "Sign Up",
    drawerIcon: () => <Ionicons name="md-create" size={24} />
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
        <CustomHeader title="Sign Up" />
        <Content
          contentContainerStyle={{
            flex: 1,
            justifyContent: "center"
          }}
        >
          <View style={{ padding: 20 }}>
            <FormLabel>First Name</FormLabel>
            <FormInput
              onChangeText={text => this.setState({ firstName: text })}
              name="firstName"
            />
            <FormLabel>Last Name</FormLabel>
            <FormInput
              onChangeText={text => this.setState({ lastName: text })}
              name="lastname"
            />
            <FormLabel>Email</FormLabel>
            <FormInput
              onChangeText={text => this.setState({ email: text })}
              name="email"
            />
            <FormLabel>Password</FormLabel>
            <FormInput
              onChangeText={text => this.setState({ password: text })}
              name="password"
            />
            <Button
              style={{ marginTop: 40 }}
              onPress={() => {
                this.onSubmit();
              }}
              title="Submit"
            />
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

export default SignUp;
