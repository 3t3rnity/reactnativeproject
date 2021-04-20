import React from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import bg from "../../assets/bg.png";

const RegistrationScreen = ({ navigation }) => {
  return (
    <KeyboardAwareScrollView
      contentContainerStyle={styles.container}
      extraHeight={200}
      enableOnAndroid
    >
      <Image
        source={bg}
        style={[
          styles.bgImage,
          {
            transform: [
              { rotate: "180deg" },
              // {skewY: "30deg"},
            ],
          },
        ]}
      />
      <View style={styles.content}>
        <View style={styles.inputArea}>
          <Text style={styles.text}>ФИО</Text>
          <TextInput style={styles.input} placeholder="ФИО" />
        </View>
        <View style={styles.inputArea}>
          <Text style={styles.text}>Номер группы</Text>
          <TextInput style={styles.input} placeholder="Номер группы" />
        </View>
        <View style={styles.inputArea}>
          <Text style={styles.text}>Почта/Email</Text>
          <TextInput style={styles.input} placeholder="Почта/Email" />
        </View>
        <View style={styles.inputArea}>
          <Text style={styles.text}>Пароль</Text>
          <TextInput style={styles.input} placeholder="Пароль" />
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("home")}
          style={[styles.registration, { marginTop: 24 }]}
        >
          <Text style={styles.registration}>Зарегистрироваться</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: "100%",
    backgroundColor: "#1E1E1E",
  },
  content: {
    flex: 1,
    alignItems: "center",
  },
  input: {
    backgroundColor: "white",
    borderRadius: 20,
    paddingHorizontal: 18,
    width: 240,
    height: 40,
  },
  inputArea: {
    marginVertical: 8,
  },
  text: {
    color: "#FFFFFF",
    fontFamily: "Montserrat",
    fontSize: 16,
    marginHorizontal: 16,
    marginVertical: 8,
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
    bottom: 0,
    left: 0,
  },
});

export default RegistrationScreen;
