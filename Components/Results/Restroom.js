import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  ScrollView,
  TouchableOpacity
} from "react-native";
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
import StarRating from "../StarRatings/StarRatings";
import Communications from "react-native-communications";
import { connect } from "react-redux";
import getDirections from "react-native-google-maps-directions";
import {
  Card,
  CardTitle,
  CardContent,
  CardAction,
  CardButton,
  CardImage
} from "react-native-cards";
class Restroom extends Component {
  getMiles(i) {
    return (i * 0.000621371192).toFixed(2);
  }
  handleGetDirections = () => {
    const data = {
      source: {
        latitude: this.props.userCurrentLocation.latitude,
        longitude: this.props.userCurrentLocation.longitude
      },
      destination: {
        latitude: this.props.location.state.coordinates.latitude,
        longitude: this.props.location.state.coordinates.longitude
      },
      params: [
        {
          key: "travelmode",
          value: "walking" // may be "walking", "bicycling" or "transit" as well
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
    const uri = this.props.location.state.url;
    const ratingObj = {
      ratings: this.props.location.state.rating,
      views: 100
    };
    const restroom = this.props.location.state;
    return (
      <ScrollView>
        <Header>
          <Left>
            <Icon
              style={{ fontSize: 50 }}
              name="arrow-back"
              onPress={() => this.props.history.goBack()}
            />
          </Left>
          <Body>
            <Title>Details</Title>
          </Body>
          <Right />
        </Header>

        <Image
          style={{ width: 380, height: 200 }}
          source={{
            uri: restroom.image_url
          }}
        />

        <Text style={styles.title}>{restroom.name}</Text>
        <Text style={styles.text}>
          {restroom.location.address1 +
            ", " +
            restroom.location.city +
            ", " +
            restroom.location.state +
            " " +
            restroom.location.zip_code}
        </Text>

        <Text style={styles.text}>Average wait time: 10 minutes</Text>
        <Text style={styles.text}>
          Distance: {this.getMiles(restroom.distance)} miles
        </Text>
        <Text style={styles.spacing}>
          <StarRating ratingObj={ratingObj} />
        </Text>
        <CardAction
          separator={true}
          inColumn={false}
          style={{ marginBottom: 0, marginTop: 0 }}
        >
          <Left style={{ marginRight: 0, width: 300, textAlign: "left" }}>
            <CardButton
              onPress={() => Communications.phonecall(restroom.phone, true)}
              title={"Call " + restroom.phone}
              color="#007FFF"
              style={{ width: 175, marginLeft: 0 }}
            />
          </Left>
          {/* <Text style={{ color: "#007FFF" }}> ||</Text> */}
          <Right style={{ marginRight: 15 }}>
            <CardButton
              onPress={() => Communications.web(uri)}
              title="View on Yelp"
              color="#007FFF"
              style={{ marginLeft: 0 }}
            />
          </Right>
        </CardAction>
        {/* <View>
          <Left style={{ width: 175 }}>
            <TouchableOpacity
              onPress={() => Communications.phonecall(restroom.phone, true)}
            >
              <Text style={styles.textBlue}>Call {restroom.phone}</Text>
            </TouchableOpacity>
          </Left>
          <Right>
            <TouchableOpacity onPress={() => Communications.web(uri)}>
              <View style={styles.holder}>
                <Text style={styles.textBlue}>View Menu on Yelp </Text>
              </View>
            </TouchableOpacity>
          </Right>
        </View> */}
        <CardButton
          onPress={this.handleGetDirections}
          title="Get Directions"
          color="white"
          style={{ backgroundColor: "#FEB557", marginRight: 5, marginTop: 0 }}
        />
        {/* <WebViewThatOpensLinksInNavigator />
        <Link to="http://stackoverflow.com/questions/35531679/react-native-open-links-in-browser">
          View Menu
        </Link> */}
      </ScrollView>
    );
  }
}

const mapStateToProps = state => {
  return {
    userCurrentLocation: state.restroom.userCurrentLocation
  };
};

export default connect(mapStateToProps)(Restroom);

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    fontSize: 25,
    color: "#555555",
    marginTop: 10,
    marginLeft: 10,
    marginBottom: 10,
    marginRight: 10,
    fontWeight: "bold"
  },
  text: {
    fontSize: 15,
    color: "#777777",
    marginLeft: 10,
    marginBottom: 5,
    marginRight: 10
  },
  textBlue: {
    fontSize: 18,
    color: "#007FFF",
    marginLeft: 10,
    marginBottom: 5,
    marginRight: 10
  },
  spacing: {
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    marginTop: 10
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
