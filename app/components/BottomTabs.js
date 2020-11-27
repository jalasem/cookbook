import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  Platform,
  TouchableOpacity,
  TouchableNativeFeedback,
} from "react-native";

const tabList = [
  { icon: require("../assets/home.png"), name: "Home" },
  { icon: require("../assets/book.png"), name: "Recipes" },
  { icon: require("../assets/grey-search.png"), name: "Search" },
  { icon: require("../assets/heart.png"), name: "Favourites" },
];

export default function BottomTabs({ active }) {
  const [activeTab, setActiveTab] = useState(active || "Search");

  const Touchable =
    Platform.OS === "android" ? TouchableNativeFeedback : TouchableOpacity;

  const handlePress = (tab) => {
    setActiveTab(tab);
  };

  return (
    <View style={styles.container}>
      {tabList.map((tab, index) => (
        <Touchable
          style={{
            flex: 1,
            alignItems: "center",
          }}
          key={`tab-item_${index}`}
          onPress={() => handlePress(tab.name)}
        >
          <View style={styles.item}>
            <Image style={styles.icon} source={tab.icon} />
            <View
              style={[
                styles.afterIcon,
                activeTab === tab.name && styles.active,
              ]}
            />
          </View>
        </Touchable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderTopColor: "#E5E5E5",
    borderTopWidth: 1,
    backgroundColor: "white",
  },
  item: {
    alignItems: "center",
    flex: 1,
    paddingTop: 10,
    paddingBottom: 20,
  },
  icon: {
    width: 28,
    height: 28,
  },
  afterIcon: {
    backgroundColor: "transparent",
    width: 5,
    height: 5,
    borderRadius: 5,
    marginTop: 10,
  },
  active: {
    backgroundColor: "#2F6966",
  },
});
