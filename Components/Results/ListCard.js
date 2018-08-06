import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  PixelRatio,
  ScrollView,
  TouchableOpacity
} from "react-native";
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
import { connect } from "react-redux";
import { getRating, getWaitTime } from "../../store/Restrooms";

class ListCard extends Component {
  constructor() {
    super();
    this.handleGetDirections = this.handleGetDirections.bind(this);
  }
  // componentDidMount() {
  //   this.props.getRating(this.props.restroom.id);
  //   this.props.getWaitTime(this.props.restroom.id);
  // }
  handleGetDirections = () => {
    const data = {
      source: {
        latitude: this.props.userLocation.latitude,
        longitude: this.props.userLocation.longitude
      },
      destination: {
        latitude: this.props.restroom.coordinates.latitude,
        longitude: this.props.restroom.coordinates.longitude
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
  getMiles(i) {
    return (i * 0.000621371192).toFixed(2);
  }

  render() {
    const { history, restroom } = this.props;
    // console.log(this.props.restroom.id);
    const ratingObj = {
      ratings: restroom.rating,
      views: restroom.review_count
      // ratings: this.props.ratings.rating ? this.props.ratings.rating : 0,
      // views: this.props.ratings.views ? this.props.ratings.views : 0
    };

    return (
      <React.Fragment>
        <View style={styles.container}>
          <Card style={styles.content} containerViewStyle={{ width: "100%" }}>
            <CardAction
              separator={false}
              inColumn={false}
              style={{
                backgroundColor: "#FEB557",
                marginBottom: 10,
                width: "100%"
              }}
            >
              <CardButton
                style={styles.top}
                title={restroom.name}
                color="#444444"
                onPress={() =>
                  history.push({
                    pathname: "/Restroom",
                    state: this.props.restroom
                  })
                }
              />

              <Right>
                <Icon
                  style={{ color: "#444444", marginRight: 15 }}
                  name="arrow-dropright"
                  onPress={() =>
                    history.push({
                      pathname: "/Restroom",
                      state: this.props.restroom
                    })
                  }
                />
              </Right>

              {/* <Right>
                <StarRating ratingObj={ratingObj} />
              </Right> */}
            </CardAction>

            <CardContent
              styles={styles.bottom}
              text={restroom.location.address1}
            />
            <CardContent
              styles={styles.bottom}
              text="Average Wait Time: 10 minutes"
            />
            <Text style={{ marginLeft: 15, marginBottom: 20 }}>
              <StarRating ratingObj={ratingObj} />
            </Text>
            <CardAction separator={true} inColumn={false}>
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
              <Icon
                style={{ marginLeft: 15, fontSize: 20, color: "#FEB557" }}
                name="md-arrow-dropright"
                onPress={this.handleGetDirections}
              />
              <Right style={styles.right}>
                <Text style={{ color: "#666666" }}>
                  {this.getMiles(restroom.distance)} miles
                </Text>
              </Right>
            </CardAction>
            {/* </CardAction> */}
          </Card>
        </View>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    ratings: state.restroom.restroomRating,
    waitTime: state.restroom.restroomWaitTime
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getRating: yelpId => dispatch(getRating(yelpId)),
    getWaitTime: yelpId => dispatch(getWaitTime(yelpId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListCard);

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
});
