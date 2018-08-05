import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Container, Content, Icon } from "native-base";
import CustomHeader from "../CustomHeader";
import Ionicons from "react-native-vector-icons/Ionicons";
import {
  FormLabel,
  FormInput,
  FormValidationMessage,
  Button
} from "react-native-elements";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    title: "Log In",
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
        <CustomHeader title="Log in" />
        <Content
          contentContainerStyle={{
            flex: 1,
            justifyContent: "center"
          }}
        >
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
            <Button
              style={styles.margin}
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

export default Login;

const styles = StyleSheet.create({
  icon: {
    height: 24,
    width: 24
  },
  margin: {
    marginTop: 40
  }
});
