import { StatusBar } from "expo-status-bar";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeTabState } from "../redux/actionCreators/searchScreenActions";
import Ionicons from "react-native-vector-icons/Ionicons";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  FlatList,
} from "react-native";

const SearchScreen = ({ navigation }) => {
  const searchScreenReducer = useSelector((state) => state.searchScreenReducer);

  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Введите группу или фио"
            placeholderTextColor="white"
          />
          <Ionicons
            style={styles.icon}
            name="arrow-back-circle-outline"
            size={24}
            color="white"
          />
        </View>
        <View style={styles.filter}>
          {searchScreenReducer.tabItems.map((el, id) => (
            <TouchableOpacity
              style={
                id === searchScreenReducer.tabState
                  ? [styles.filterItem, { backgroundColor: "#484848" }]
                  : styles.filterItem
              }
              key={id}
              onPress={() => {
                dispatch(changeTabState(id));
              }}
            >
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

        <View style={styles.searchData}>
          <FlatList
            data={
              searchScreenReducer.tabState === 0
                ? searchScreenReducer.searchData
                : searchScreenReducer.tabState === 1
                ? searchScreenReducer.searchData.filter(
                    (el) => el.type === "group"
                  )
                : searchScreenReducer.searchData.filter(
                    (el) => el.type === "teacher"
                  )
            }
            renderItem={({ item, id }) => (
              <TouchableOpacity style={styles.searchDataItem} key={id}>
                <Ionicons
                  name={
                    item.type === "group"
                      ? "people-outline"
                      : "briefcase-outline"
                  }
                  size={16}
                  color="white"
                />
                <Text style={[styles.text, { marginLeft: 16, fontSize: 16 }]}>
                  {item.title}
                </Text>
              </TouchableOpacity>
            )}
          />
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
    color: "#FFFFFF",
    fontFamily: "Montserrat",
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
    color: "#FFFFFF",
    fontFamily: "Montserrat",
    fontSize: 12,
  },
});

export default SearchScreen;
