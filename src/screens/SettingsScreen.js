import { StatusBar } from "expo-status-bar";
import React from "react";
import { useDispatch } from "react-redux";
import { changeAuth } from "../redux/actionCreators/appActions";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import logo from "../../assets/logo.png";
import bg from "../../assets/bg.png";

const SettingsScreen = ({ navigation, route }) => {
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  html: {
    fontFamily: "bold",
  },
  container: {
    flex: 1,
    backgroundColor: "#1E1E1E",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: 80,
  },
  text: {
    color: "#FFFFFF",
    fontFamily: "Montserrat",
    fontSize: 16,
  },
  registration: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    backgroundColor: "#55B432",
    fontFamily: "Montserrat",
    borderRadius: 40,
    color: "#FFFFFF",
    fontSize: 16,
  },
  bgImage: {
    position: "absolute",
    top: 0,
    right: 0,
  },
  enter: {
    flex: 1,
    width: "40%",
    maxHeight: "10%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 32,
  },
});

export default SettingsScreen;
