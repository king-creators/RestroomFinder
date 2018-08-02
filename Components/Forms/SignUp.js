import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  FormLabel,
  FormInput,
  FormValidationMessage,
  Button
} from "react-native-elements";
import { addUser } from "../../store/thunks";
import { connect } from "react-redux";
import { createStackNavigator } from "react-navigation";

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
    // console.log(this.state);
    this.props.addUser(this.state);
  }
  render() {
    return (
      <View>
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
          onPress={() => {
            this.onSubmit();
          }}
          title="Submit"
        />
      </View>
    );
  }
}

const mapDispatch = dispatch => ({
  addUser: user => dispatch(addUser(user))
});

const SignUpComp = connect(
  null,
  mapDispatch
)(SignUp);

export default createStackNavigator({
  Home: {
    screen: SignUpComp
  }
});
