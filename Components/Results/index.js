import React from "react";
import { View } from "react-native";
import {
  Footer,
  FooterTab,
  Button,
  Text,
  Right,
  Icon,
  Left,
  Header,
  Container,
  Body,
  Title
} from "native-base";
import { Switch, Router, Route } from "react-router-native";
import createHistory from "history/createMemoryHistory";

import ListResults from "./ListResults";
import Restroom from "./Restroom";

const history = createHistory();

const Results = () => (
  <Router history={history}>
    <View style={{ flex: 1 }}>
      <Switch>
        <Route exact path="/" component={ListResults} />
        <Route path="/">
          <Container>
            <Header>
              <Left>
                <Icon onPress={() => history.goBack()} name="arrow-back" />
              </Left>
              <Body>
                <Title>Details</Title>
              </Body>
              <Right />
            </Header>
            <Switch>
              <Route exact path="/Restroom" component={Restroom} />
            </Switch>
          </Container>
        </Route>
      </Switch>
    </View>
  </Router>
);

export default Results;
