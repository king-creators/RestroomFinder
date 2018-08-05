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
import {
  Card,
  CardTitle,
  CardContent,
  CardAction,
  CardButton,
  CardImage
} from "react-native-cards";
import StarRating from "../StarRatings/StarRatings";
import Communications from "react-native-communications";

class Restroom extends Component {
  render() {
    const uri = this.props.location.state.url;
    const ratingObj = {
      ratings: this.props.location.state.rating,
      views: 100
    };
    const restroom = this.props.location.state
    return (
      <ScrollView>
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
          style={{ width: 380, height: 200 }}
          source={{
            uri: restroom.image_url
          }}
        />

        <Text style={styles.title}>{restroom.name}</Text>
        <Text style={styles.text}>{restroom.location.address1}  </Text>
        <TouchableOpacity
          onPress={() => Communications.phonecall(restroom.phone, true)}
        >
          <Text style={styles.textBlue}>{restroom.phone}</Text>
        </TouchableOpacity>
        <Text style={styles.text}>Average wait time: 10 minutes</Text>
        <Text style={styles.spacing}>
          <StarRating ratingObj={ratingObj} />
        </Text>
        <TouchableOpacity onPress={() => Communications.web(uri)}>
          <View style={styles.holder}>
            <Text style={styles.textBlue}>View Menu on Yelp </Text>
          </View>
        </TouchableOpacity>

        {/* <WebViewThatOpensLinksInNavigator />
        <Link to="http://stackoverflow.com/questions/35531679/react-native-open-links-in-browser">
          View Menu
        </Link> */}
      </ScrollView>
    );
  }
}

export default Restroom;

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
    fontSize: 18,
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
