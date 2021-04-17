import React from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import { changeAuth } from "../redux/actionCreators/appActions";
import { useSelector, useDispatch } from "react-redux";
import bg from "../../assets/bg.png";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const LoginScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const test = useSelector((state) => state.appReducer);

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={styles.container}
      enableOnAndroid
      scrollEnabled={false}
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
          <Text style={styles.text}>Почта / email</Text>
          <TextInput style={styles.input} placeholder="Почта / email" />
        </View>
        <View style={styles.inputArea}>
          <Text style={styles.text}>Пароль</Text>
          <TextInput style={styles.input} placeholder="Пароль" />
        </View>
        <TouchableOpacity
          onPress={() => {
            dispatch(changeAuth());
            navigation.navigate("home2");
          }}
          style={[styles.registration, { marginTop: 24 }]}
        >
          <Text style={styles.registration}>Войти</Text>
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

export default LoginScreen;
