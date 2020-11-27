import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import BottomTabs from "./app/components/BottomTabs";
import ResultGrid from "./app/components/ResultGrid";
import SearchBox from "./app/components/SearchBox";
import TopBar from "./app/components/TopBar";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ExpoStatusBar style="auto" />
      <TopBar />
      <SearchBox />
      <ResultGrid />
      <BottomTabs />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  topBar: {},
});
