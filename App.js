import React from "react";
import { StyleSheet, Text, View } from "react-native";
import SignUp from "./Components/Forms/SignUp";
import EditRestroom from "./Components/Forms/EditRestroom";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <EditRestroom />
        {/* <SignUp /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
