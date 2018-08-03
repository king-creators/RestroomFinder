import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Container, Content, Icon } from "native-base";
import CustomHeader from "./CustomHeader";

export default class ListResults extends Component {
  render() {
    return (
      <Container>
        <Content
          contentContainerStyle={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            padding: 10
          }}
        >
          <View>
            <Text>This is the results page.</Text>
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
