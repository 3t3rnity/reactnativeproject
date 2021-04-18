import { StatusBar } from "expo-status-bar";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeAuth } from "../redux/actionCreators/appActions";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";

const SheduleScreen = ({ navigation, route }) => {
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E1E1E",
  },
});

export default SheduleScreen;
