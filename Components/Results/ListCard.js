import React, { Component } from "react";
import { StyleSheet, Text, View, PixelRatio, ScrollView } from "react-native";
import {
  Card,
  CardTitle,
  CardContent,
  CardAction,
  CardButton,
  CardImage
} from "react-native-cards";
import {
  Icon,
  Button,
  Container,
  Header,
  Content,
  Left,
  Right,
  Body,
  Title
} from "native-base";
// import Restroom from "../Results/Restroom";
import { withNavigation } from "react-navigation";
import StarRating from "../StarRatings/StarRatings";
// import SubNav from "../Restroom";

class ListCard extends Component {
  render() {
    const ratingObj = {
      ratings: 4,
      views: 100
    };
    return (
      <React.Fragment>
        <View style={styles.container}>
          <Card style={styles.content} containerViewStyle={{ width: "100%" }}>
            <Right>
              <StarRating ratingObj={ratingObj} />
            </Right>
            <CardButton
              onPress={() => history.push("/Restroom")}
              title="Name of Restaurant"
              color="#FEB557"
            />
            <CardTitle subtitle="123 Main St." />
            <CardContent text="0.5 miles" />

            {/* <CardAction separator={true} inColumn={false}> */}
            <CardButton onPress={() => {}} title="Directions" color="#FEB557" />

            {/* </CardAction> */}
          </Card>
          {/* <SubNav /> */}
        </View>
      </React.Fragment>
    );
  }
}

export default ListCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
    // backgroundColor: "#ecf0f1"
  }
  //   content: {
  //     // flex: 1,
  //     // width: 25,
  //     // height: 25,
  //     // backgroundColor: "orange"
  //     width: "100%"
  //   }
});

// const SubStack = createStackNavigator({
//   Restroom: {
//     screen: Restroom
//   }
// });

// class SubNav extends React.Component {
//   render() {
//     return <SubStack />;
//   }
// }
