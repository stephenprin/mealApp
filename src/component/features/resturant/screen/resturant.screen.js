import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar,
  SafeAreaView,
} from "react-native";
import React from "react";
import { Searchbar } from "react-native-paper";
import ResturantInfoCard from "../component/resturant.info";

const ResturantScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.search}>
        <Searchbar placeholder="Search" style={styles.searchInput} />
      </View>

      <View style={styles.main}>
        <ResturantInfoCard />
      </View>
    </SafeAreaView>
  );
};

export default ResturantScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform === "android" ? StatusBar.currentHeight : 0,
  },
  search: {
    padding: 16,
  },
  main: {
    backgroundColor: "blue",
    flex: 1,
    padding: 16,
  },
  searchInput: {
    borderRadius: 20,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 0.2,
    elevation: 10,
    shadowOffset: { width: 0, height: 2 },
  },
});
