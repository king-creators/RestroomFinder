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
import getDirections from "react-native-google-maps-directions";

class GmapsDirections extends Component {
  constructor() {
    super();
    this.handleGetDirections = this.handleGetDirections.bind(this);
  }
  handleGetDirections = () => {
    const data = {
      source: {
        latitude: -33.8356372,
        longitude: 18.6947617
      },
      destination: {
        latitude: -33.8600024,
        longitude: 18.697459
      },
      params: [
        {
          key: "travelmode",
          value: "driving" // may be "walking", "bicycling" or "transit" as well
        },
        {
          key: "dir_action",
          value: "navigate" // this instantly initializes navigation using the given travel mode
        }
      ]
    };

    getDirections(data);
  };

  render() {
    return (
      <View style={styles.container}>
        <Button onPress={this.handleGetDirections} title="Get Directions" />
      </View>
    );
  }
}

class ListCard extends Component {
  constructor() {
    super();
    this.handleGetDirections = this.handleGetDirections.bind(this);
  }
  handleGetDirections = () => {
    const data = {
      source: {
        latitude: 40.704941,
        longitude: -74.008943
      },
      destination: {
        latitude: 40.703673,
        longitude: -74.010738
      },
      params: [
        {
          key: "travelmode",
          value: "driving" // may be "walking", "bicycling" or "transit" as well
        },
        {
          key: "dir_action",
          value: "navigate" // this instantly initializes navigation using the given travel mode
        }
      ]
    };

    getDirections(data);
  };
  render() {
    const { history } = this.props;
    const ratingObj = {
      ratings: 4,
      views: 100
    };
    return (
      <React.Fragment>
        <View style={styles.container}>
          <Card style={styles.content} containerViewStyle={{ width: "100%" }}>
            <CardAction separator={false} inColumn={false}>
              <CardButton
                style={styles.top}
                onPress={() => history.push("/Restroom")}
                title="Name of Restaurant"
                color="#FEB557"
              />

              <Right>
                <StarRating ratingObj={ratingObj} />
              </Right>
            </CardAction>

            <CardContent styles={styles.bottom} text="123 Main St." />
            <CardContent
              styles={styles.bottom}
              text="Average Wait Time: 10 minutes"
            />

            <CardAction separator={false} inColumn={false}>
              {/* <CardAction separator={true} inColumn={false}> */}
              {/* <CardButton
                onPress={() => {}}
                title="Directions"
                color="#FEB557"
              /> */}

              <CardButton
                onPress={this.handleGetDirections}
                title="Get Directions"
              />

              <Right style={styles.right}>
                <Text>0.5 miles</Text>
              </Right>
            </CardAction>
            {/* </CardAction> */}
          </Card>
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
  },
  right: {
    marginRight: 10
  },
  top: {
    marginTop: 10
  },
  bottom: {
    marginBottom: 0,
    paddingBottom: 0,
    marginTop: 0,
    paddingTop: 0
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
