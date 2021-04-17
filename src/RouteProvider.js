import "react-native-gesture-handler";
import Icon from "react-native-vector-icons/MaterialIcons";
import React from "react";
import { TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import StartScreen from "./screens/StartScreen";
import RegistrationScreen from "./screens/RegistrationScreen";
import LoginScreen from "./screens/LoginScreen";
import ScheduleScreen from "./screens/ScheduleScreen";

const BackButton = ({ navigation }) => {
  return (
    <TouchableOpacity
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        width: 80,
        height: 48,
      }}
      onPress={() => navigation.goBack()}
    >
      <Icon name="arrow-back-ios" size={24} color="#FFF" />
    </TouchableOpacity>
  );
};

const Stack = createStackNavigator();

const RouteProvider = ({ navigation }) => {
  const appReducer = useSelector((state) => state.appReducer);

  const usnignedRoutes = () => (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={({ navigation, route }) => ({
        headerStyle: {
          backgroundColor: "#1E1E1E",
          elevation: 0, // remove shadow on Android
          shadowOpacity: 0, // remove shadow on iOS
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontSize: 24,
          fontFamily: "Montserrat",
        },
        headerTitleAlign: "center",
        headerLeft: (props) =>
          route.name !== "home" && (
            <BackButton {...props} navigation={navigation} />
          ),
      })}
    >
      <Stack.Screen
        name="home"
        component={StartScreen}
        options={{
          title: "",
        }}
      />
      <Stack.Screen
        name="registration"
        component={RegistrationScreen}
        options={{
          title: "Регистрация",
        }}
      />
      <Stack.Screen
        name="login"
        component={LoginScreen}
        options={{
          title: "Вход",
        }}
      />
    </Stack.Navigator>
  );

  const signedRoutes = () => (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={({ navigation, route }) => ({
        headerStyle: {
          backgroundColor: "#1E1E1E",
          elevation: 0, // remove shadow on Android
          shadowOpacity: 0, // remove shadow on iOS
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontSize: 24,
          fontFamily: "Montserrat",
        },
        headerTitleAlign: "center",
        headerLeft: (props) =>
          route.name !== "home" && (
            <BackButton {...props} navigation={navigation} />
          ),
      })}
    >
      <Stack.Screen
        name="home2"
        component={ScheduleScreen}
        options={{
          title: "",
        }}
      />
    </Stack.Navigator>
  );

  return (
    <NavigationContainer>
      {!appReducer.auth ? usnignedRoutes() : signedRoutes()}
    </NavigationContainer>
  );
};

export default RouteProvider;
