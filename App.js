import React from "react";
import {
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  StatusBar,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.search}>
        <Text>Red</Text>
      </View>

       <View style={styles.main}>
        <Text>Green</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform === "android" ? StatusBar.currentHeight : 0,
    gap: 10,
  },
  search: {
    backgroundColor: "red",
    padding: 16,
  },
  main: {
    backgroundColor: "green",
    flex: 1,
    padding: 16,
  },
});
