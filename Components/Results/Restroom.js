import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import {
  Footer,
  FooterTab,
  Button,
  Right,
  Icon,
  Left,
  Header,
  Container,
  Body,
  Title
} from "native-base";

class Restroom extends Component {
  render() {
    return (
      <View>
        <Header>
          <Left>
            <Icon
              onPress={() => this.props.history.goBack()}
              name="arrow-back"
            />
          </Left>
          <Body>
            <Title>Details</Title>
          </Body>
          <Right />
        </Header>
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
