import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import {
  FormLabel,
  FormInput,
  FormValidationMessage,
  Button
} from "react-native-elements";
import { addUser } from "../../store/thunks";
import { connect } from "react-redux";
import { createStackNavigator } from "react-navigation";
import { Container, Content, Icon } from "native-base";
import CustomHeader from "../CustomHeader";

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
          title="Login"
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

// const mapDispatch = dispatch => ({
//   addUser: user => dispatch(addUser(user))
// });

// const SignUpComp = connect(
//   null,
//   mapDispatch
// )(SignUp);

// export default createStackNavigator({
//   Home: {
//     screen: SignUpComp
//   }
// });

export default SignUp;
