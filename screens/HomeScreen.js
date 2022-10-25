import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TextInput,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Pressable
} from "react-native";

import React, { useState } from "react";
import Feather from "react-native-vector-icons/Feather";
import CustomSwitch from "../components/CustomSwitch";
import ListItem from "../components/ListItem";
import { FontAwesome5 } from "@expo/vector-icons";


export default function Home({ navigation }) {
  const [statsTab, setStatsTab] = useState(1);

  const onSelectSwitch = (value) => {
    setStatsTab(value);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 1,
          marginVertical: 5,
          marginLeft: 10,
          marginRight: 0
        }}
      >
        <Text
          style={{
            fontSize: 17,
            fontWeight: "bold",
            color: "#676a6c",
            marginLeft: 10
          }}
        ></Text>
        <SafeAreaView style={{ flex: 1 }}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Settings")}
            style={{ alignItems: "flex-start", margin: 5 }}
          >
            <FontAwesome5 name="bars" size={38} color="#969799" />
          </TouchableOpacity>
        </SafeAreaView>
        <Image
          source={require("../assets/gs-logo.png")}
          style={{ width: 90, height: 50, borderRadius: 10, marginRight: 20 }}
        />
      </View>
      <View style={{ marginBottom: -5, padding: 20 }}>
        <CustomSwitch
          selectionMode={1}
          option1="Day"
          option2="Week"
          option3="Month"
          option4="Year"
          onSelectSwitch={onSelectSwitch}
        />
      </View>
      <View >
    
      </View>

      {statsTab == 1 && <ListItem />}
      {statsTab == 2 && <ListItem />}
      {statsTab == 3 && <ListItem />}
      {statsTab == 4 && <ListItem />}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  navBarContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#fff",
    borderTopWidth: 0.2,
    marginTop: 60
  },
  navBarIcon: {
    flex: 1,
    padding: 1,
    flexDirection: "row",
    justifyContent: "center"
  }
});
