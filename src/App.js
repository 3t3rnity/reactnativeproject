import "react-native-gesture-handler";
import Icon from "react-native-vector-icons/MaterialIcons";
import React, { useState } from "react";
import { View, TouchableOpacity } from "react-native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import StartScreen from "./screens/StartScreen";
import RegistrationScreen from "./screens/RegistrationScreen";
import LoginScreen from "./screens/LoginScreen";
import ScheduleScreen from "./screens/ScheduleScreen";

const fetchFonts = () =>
  Font.loadAsync({
    Montserrat: require("../assets/fonts/Montserrat-Regular.ttf"),
  });

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

const App = () => {
  const [dataLoaded, setDataLoaded] = useState(false);
  const [auth, setAuth] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={(e) => console.error(e)}
      />
    );
  }

  const authFunc = () => console.log("worked");

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
        authFunc={authFunc}
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
        name="home"
        component={ScheduleScreen}
        options={{
          title: "",
        }}
      />
    </Stack.Navigator>
  );

  return (
    <NavigationContainer>
      {!auth ? usnignedRoutes() : signedRoutes()}
    </NavigationContainer>
  );
};

export default App;
