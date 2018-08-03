import Home from "./Home";
import ListResults from "./ListResults";
import Login from "./Forms/Login";
import SignUp from "./Forms/SignUp";
import {
  createStackNavigator
} from "react-navigation";

const navStack = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: () => ({
      title: `Welcome!`,
      headerBackTitle: "Back",
      headerTruncatedBackTitle: ``
    })
  },
  ListResults: {
    screen: ListResults,
    navigationOptions: () => ({
      title: `Near you`,
      headerBackTitle: "Back",
      headerTruncatedBackTitle: ``
    })
  },
  Map: {
    screen: Home,
    navigationOptions: () => ({
      title: `Near you`,
      headerBackTitle: "Back",
      headerTruncatedBackTitle: ``
    })
  },
  Login: {
    screen: Login,
    navigationOptions: () => ({
      title: `Login`,
      headerBackTitle: "Back",
      headerTruncatedBackTitle: ``
    })
  },
  SignUp: {
    screen: SignUp,
    navigationOptions: () => ({
      title: `Sign Up`,
      headerBackTitle: "Back",
      headerTruncatedBackTitle: ``
    })
  }
});

export default navStack;
