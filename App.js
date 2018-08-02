import { createStackNavigator } from "react-navigation";
import Home from "./Components/Home";
import Login from "./Components/Forms/Login";
import SignUp from "./Components/Forms/SignUp";

const App = createStackNavigator({
  Home: { screen: Home },
  Login: { screen: Login },
  SignUp: { screen: SignUp }
});

export default App;
