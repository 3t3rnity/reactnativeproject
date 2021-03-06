import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Ionicons from "react-native-vector-icons/Ionicons";
import { setDate } from "../redux/actionCreators/scheduleScreenActions";
import DatePicker from "react-native-datepicker";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const SheduleScreen = ({ navigation, route }) => {
  const dispatch = useDispatch();

  const scheduleScreenReducer = useSelector(
    (state) => state.scheduleScreenReducer
  );

  useEffect(() => {
    dispatch(setDate());
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.date}>
          <View>
            <Text style={styles.textDay}>{scheduleScreenReducer.date.day}</Text>
            <Text style={styles.text}>{scheduleScreenReducer.date.other}</Text>
          </View>
          <View style={styles.calendar}>
            <DatePicker
              hideText="false"
              onDateChange={(date) => {
                dispatch(setDate(date));
              }}
            />
          </View>
        </View>
        <View style={styles.filter}>
          {scheduleScreenReducer.tabItems.map((el, id) => (
            <TouchableOpacity style={styles.filterItem} key={id}>
              {el.img && <Ionicons name={el.img} size={16} color="white" />}
              <Text
                style={
                  id === 0
                    ? styles.text
                    : [
                        styles.text,
                        {
                          marginLeft: 5,
                        },
                      ]
                }
              >
                {el.text}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <StatusBar style="auto" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: "100%",
    backgroundColor: "#1E1E1E",
  },
  wrapper: {
    minHeight: "100%",
    flex: 1,
    paddingTop: 40,
    backgroundColor: "#1E1E1E",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  date: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  searchContainer: {
    flex: 1,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    maxWidth: "95%",
    maxHeight: 50,
    borderRadius: 20,
    color: "white",
    backgroundColor: "#4B4B4B",
  },
  searchData: {
    minWidth: "100%",
    maxHeight: "100%",
    flex: 1,
  },
  searchDataItem: {
    paddingHorizontal: "5%",
    paddingVertical: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  searchInput: {
    width: "90%",
    color: "white",
  },
  filter: {
    marginTop: 10,
    flex: 1,
    minWidth: "100%",
    maxHeight: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  filterItem: {
    borderRadius: 20,
    padding: 15,
    height: "60%",
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontFamily: "Montserrat",
  },
  textDay: {
    color: "white",
    fontFamily: "Montserrat",
    fontSize: 26,
  },
});
export default SheduleScreen;
