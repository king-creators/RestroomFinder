// import React, { Component } from "react";
// import { StyleSheet, Text, View } from "react-native";
// import {
//   FormLabel,
//   FormInput,
//   FormValidationMessage,
//   Button
// } from "react-native-elements";
// import { auth } from "../../store/thunks";
// import { connect } from "react-redux";

// class Login extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       password: "",
//       email: ""
//     };
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }
//   handleSubmit(evt) {
//     evt.preventDefault();
//     this.props.auth(this.state);
//   }
//   render() {
//     return (
//       <View>
//         <FormLabel>Email</FormLabel>
//         <FormInput
//           onChangeText={text => this.setState({ email: text })}
//           name="email"
//         />
//         <FormLabel>Password</FormLabel>
//         <FormInput
//           onChangeText={text => this.setState({ password: text })}
//           name="password"
//         />
//         <Button onPress={this.handleSubmit} title="Submit" />
//       </View>
//     );
//   }
// }

// const mapDispatch = dispatch => {
//   return {
//     auth: userData => dispatch(auth(userData))
//   };
// };

// export default Login;
// // export default connect(
// //   null,
// //   mapDispatch
// // )(Login);

import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import { Container, Content, Icon, Button } from "native-base";
import CustomHeader from "../CustomHeader";

class Login extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Login",
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
