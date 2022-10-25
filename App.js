import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MaterialIcons from "react-native-vector-icons/MaterialIcons";

// Screens Import
import HomeScreen from "./screens/HomeScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          component={Main}
          name="Main"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          component={HomeScreen}
          name="Home"
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Main = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff"
      }}
    >
      <View>
        <Image
          source={require("./assets/max-suite.png")}
          style={{ width: 180, height: 110 }}
        />
      </View>
      <View>
        <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
            color: "#20315f",
            marginBottom: 50
          }}
        ></Text>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("Home")}
        style={{
          backgroundColor: "#1c9ac2",
          padding: 20,
          width: "90%",
          borderRadius: 5,
          flexDirection: "row",
          justifyContent: "space-between"
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 18, color: "#fff" }}>
          Let's Begin
        </Text>
        <MaterialIcons name="arrow-forward-ios" size={22} color="#fff" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};
