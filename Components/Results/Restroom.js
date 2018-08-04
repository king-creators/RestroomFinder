import React, { Component } from "react";
import { StyleSheet, View, Image, Button, Text } from "react-native";

class Restroom extends Component {
  render() {
    return (
      <View>
        <Image
          source={
            "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"
          }
        />

        <Text>Hello!!!</Text>
      </View>
    );
  }
}

export default Restroom;

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

// const SubStack = createStackNavigator({
//   Restroom: {
//     screen: Restroom
//   }
// });

// export default class SubNav extends React.Component {
//   render() {
//     return <SubStack />;
//   }
// }
