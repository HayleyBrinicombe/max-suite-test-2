import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import React from "react";
import { ProgressBar } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

const grossName = "Gross";

const DATA = [
  {
    id: 1,
    title: "Gross Profit",
    figures: 9000,
    target: 17000,
    format: "c"
  },
  {
    id: 2,
    title: "After Promo's",
    figures: 5000,
    target: 16000,
    format: "c"
  },
  {
    id: 3,
    title: "Covers",
    figures: 80,
    target: 200,
    format: "n"
  }
];
const intFormat = "en-UK";
const currency = "GBP";
const decPlaces = 0;

export default function ListItem() {
  return (
    <View >
     
      <SafeAreaView>
        <FlatList
          style={{ marginLeft: 15, marginRight: 15, marginTop: 1 }}
          data={DATA}
          keyExtractor={(id) => id.title}
          renderItem={({ item }) => {
            return (
              <View style={styles.boxList}>
                <TouchableOpacity>
                  <View>
                    <Text style={styles.text}>{item.title}</Text>
                  </View>
                </TouchableOpacity>
                <View>
                  <TouchableOpacity>
                    <Text style={styles.largeText}>
                      {item.format === "c"
                        ? Intl.NumberFormat(intFormat, {
                            style: "currency",
                            currency: currency,
                            minimumFractionDigits: decPlaces
                          }).format(item.figures)
                        : item.figures}
                    </Text>
                  </TouchableOpacity>
                </View>
                <View>
                  <TouchableOpacity>
                    <ProgressBar
                      progress={item.figures / item.target}
                      color={"#72F772"}
                    />
                  </TouchableOpacity>
                  <Text style={styles.smallText}>
                    (Target{" "}
                    {item.format === "c"
                      ? Intl.NumberFormat(intFormat, {
                          style: "currency",
                          currency: currency,
                          minimumFractionDigits: decPlaces
                        }).format(item.target)
                      : item.target}
                    )
                  </Text>
                </View>
              </View>
            );
          }}
        />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "#969799",
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 1,
    marginLeft: 5
  },

  largeText: {
    color: "#1c9ac2",
    fontWeight: "bold",
    fontSize: 25,
    marginLeft: 5
  },
  smallText: {
    color: "#1c9ac2",
    fontWeight: "normal",
    fontSize: 15,
    padding: 10,
    marginLeft: 2
  },

  boxList: {
    backgroundColor: "#fff",
    color: "#1c9ac2",
    padding: 5,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 20,
    shadowOpacity: 0.6,
    shadowRadius: 4,
    shadowColor: "#676a6c",
    textShadowOffset: { height: -5, width: -9 }
  }
});
