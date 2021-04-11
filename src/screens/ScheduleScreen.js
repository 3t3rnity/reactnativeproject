import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import logo from "../../assets/logo.png";
import bg from "../../assets/bg.png";

const SheduleScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={bg} style={styles.bgImage} />
      <Text
        style={{
          fontSize: 32,
          color: "#FFFFFF",
          marginBottom: 80,
          fontFamily: "Montserrat",
        }}
      >
        Расписание
      </Text>
      <Image source={logo} style={{ marginBottom: 24 }} />
      <TouchableOpacity
        onPress={() => navigation.push("registration")}
        style={styles.registration}
      >
        <Text style={(styles.text, styles.registration)}>
          Зарегистрироваться
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.push("login")}
        style={styles.enter}
      >
        <Text style={styles.text}>Войти</Text>
      </TouchableOpacity>
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

export default SheduleScreen;
