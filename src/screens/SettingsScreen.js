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
      <TouchableOpacity
        style={styles.button}
        onPress={() => dispatch(changeAuth())}
      >
        <Text style={styles.text}>Выход</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E1E1E",
    paddingTop: 40,
  },
  text: {
    color: "#FFFFFF",
    fontFamily: "Montserrat",
    fontSize: 16,
  },
  button: {
    borderWidth: 1,
    borderColor: "#1E1E1E",
    borderBottomColor: "white",
    justifyContent: "center",
    height: "12%",
    width: "100%",
  },
});

export default SettingsScreen;
