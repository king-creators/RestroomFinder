import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  FormLabel,
  FormInput,
  FormValidationMessage,
  Button
} from "react-native-elements";
import { auth } from "../../store/thunks";
import { connect } from "react-redux";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
      email: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(evt) {
    evt.preventDefault();
    this.props.auth(this.state);
  }
  render() {
    return (
      <View>
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
        <Button onPress={this.handleSubmit} title="Submit" />
      </View>
    );
  }
}

const mapDispatch = dispatch => {
  return {
    auth: userData => dispatch(auth(userData))
  };
};

export default Login;
// export default connect(
//   null,
//   mapDispatch
// )(Login);
