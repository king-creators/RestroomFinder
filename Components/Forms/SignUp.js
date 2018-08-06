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

import {LogIn} from '../../store/User'

import createHistory from 'history/createMemoryHistory'

const history = createHistory()

// import { userInfo } from "os";

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
    this.props.LogIn(this.state)
    // history.push('Home')
    
  }
  static navigationOptions = ({ navigation }) => ({
    title: "Sign Up",
    drawerIcon: () => <Ionicons name="md-create" size={24} />
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

const MapStateToProps = state => {
  return {
    user : state.user
  }
}

const MapDispatchToProps = dispatch => {
  return {
    LogIn : (userInfo) => (dispatch(LogIn(userInfo)))
  }
}

export default connect(MapStateToProps,MapDispatchToProps)(SignUp)
