import React, { useState } from "react";
import { StyleSheet, Text, View, Dimensions, FlatList } from "react-native";

export default function ResultGrid() {
  const [results] = useState([
    { color: "#FCE498", id: 1 },
    { color: "#BEE8FF", id: 2 },
    { color: "#F5A492", id: 3 },
    { color: "#D2B0E0", id: 4 },
    { color: "#7EDABF", id: 5 },
    { color: "#FCD496", id: 6 },
  ]);

  const ItemSeparatorLine = () => {
    return (
      <View
        style={{
          height: 20,
          width: "100%",
          backgroundColor: "white",
        }}
      />
    );
  };

  // const { width: screenWidth } = Dimensions.get("screen");
  // const itemWidth = (screenWidth - 50) / 2;

  const Item = ({ color }) => {
    return <View style={[styles.result, { backgroundColor: color }]} />;
  };

  return (
    <FlatList
      data={results}
      style={styles.container}
      renderItem={(item) => <Item color={item.item.color} />}
      numColumns={2}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={ItemSeparatorLine}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 5,
    paddingLeft: 20,
    marginBottom: 20,
  },
  result: {
    borderRadius: 5,
    width: 150,
    marginRight: 20,
    height: 150,
    backgroundColor: "tomato",
  },
});
