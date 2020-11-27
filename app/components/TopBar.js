import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function TopBar() {
  return (
    <View style={styles.topBar}>
      <Text style={styles.topText}>What to eat</Text>
      <Image style={styles.topIcon} source={require("../assets/funnel.png")} />
    </View>
  );
}

const styles = StyleSheet.create({
  topBar: {
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 30,
  },
  topText: {
    flex: 1,
    textAlign: "center",
    fontSize: 20,
  },
  topIcon: {
    width: 20,
    height: 20,
  },
});
