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

const Results = props => {
  console.log(props);
  return (
    <Router history={history}>
      <View style={{ flex: 1 }}>
        <Switch>
          <Route
            exact
            path="/"
            // component={ListResults}
            // toggleDrawer={props.toggleDrawer}
            render={() => (
              <ListResults
                toggleDrawer={props.toggleDrawer}
                history={history}
              />
            )}
          />
          <Route path="/">
            <Container>
              <Switch>
                <Route
                  exact
                  path="/Restroom"
                  component={Restroom}

                  // toggleDrawer={props.toggleDrawer}
                  // render={() => <Restroom toggleDrawer={props.toggleDrawer/>} />}
                />
              </Switch>
            </Container>
          </Route>
        </Switch>
      </View>
    </Router>
  );
};

export default Results;
