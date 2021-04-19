import "react-native-gesture-handler";
import Material from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import React from "react";
import { TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import StartScreen from "./screens/StartScreen";
import RegistrationScreen from "./screens/RegistrationScreen";
import LoginScreen from "./screens/LoginScreen";
import ScheduleScreen from "./screens/ScheduleScreen";
import SearchScreen from "./screens/SearchScreen";
import SettingsScreen from "./screens/SettingsScreen";

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
      <Material name="arrow-back-ios" size={24} color="#FFF" />
    </TouchableOpacity>
  );
};

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const RouteProvider = ({ navigation }) => {
  const appReducer = useSelector((state) => state.appReducer);

  const unsignedRoutes = () => (
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
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#f0edf6"
      inactiveColor="#3e2465"
      barStyle={{ backgroundColor: "#694fad" }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "reader" : "reader-outline";
          } else if (route.name === "Settings") {
            iconName = focused ? "cog" : "cog-outline";
          } else if (route.name === "Search") {
            iconName = focused ? "search" : "search-outline";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "white",
        inactiveTintColor: "gray",
        labelStyle: {
          fontFamily: "Montserrat",
        },
        style: {
          backgroundColor: "#282828",
          borderTopColor: "#282828",
        },
      }}
    >
      <Tab.Screen
        name="Settings"
        options={{ title: "Настройки" }}
        component={SettingsScreen}
      />
      <Tab.Screen
        name="Home"
        options={{ title: "Расписание" }}
        component={ScheduleScreen}
      />
      <Tab.Screen
        name="Search"
        options={{ title: "Поиск" }}
        component={SearchScreen}
      />
    </Tab.Navigator>
  );

  return (
    <NavigationContainer>
      {!appReducer.auth ? unsignedRoutes() : signedRoutes()}
    </NavigationContainer>
  );
};

export default RouteProvider;
