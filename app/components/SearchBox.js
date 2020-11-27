import React from "react";
import { StyleSheet, Text, View, Image, TextInput } from "react-native";

export default function SearchBox() {
  return (
    <View style={styles.searchBox}>
      <Image
        style={styles.searchIcon}
        source={require("../assets/search.png")}
      />
      <TextInput
        allowFontScaling={true}
        underlineColorAndroid="transparent"
        style={styles.searchInput}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  searchBox: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#D8D8D8",
    alignItems: "center",
    borderRadius: 44,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginHorizontal: 20,
    marginBottom: 20,
  },
  searchIcon: {
    width: 20,
    height: 20,
  },
  searchInput: {
    flex: 1,
    paddingHorizontal: 10,
    fontSize: 15,
  },
});
