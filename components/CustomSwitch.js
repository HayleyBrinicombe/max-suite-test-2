import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";

export default function CustomSwitch({
  selectionMode,
  option1,
  option2,
  option3,
  option4,
  onSelectSwitch
}) {
  const [getSelectionMode, setSelectionMode] = useState(selectionMode);

  const updateSwitchData = (value) => {
    setSelectionMode(value);
    onSelectSwitch(value);
  };

  return (
    <View
      style={{
        height: 44,
        width: "100%",
        backgroundColor: "#e4e4e4",
        borderRadius: 10,
        borderColor: "black",
        flexDirection: "row",
        justifyContent: "center"
      }}
    >
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => updateSwitchData(1)}
        style={{
          flex: 1,
          backgroundColor: getSelectionMode == 1 ? "#1c9ac2" : "#e4e4e4",
          borderRadius: 10,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Text
          style={{
            color: getSelectionMode == 1 ? "white" : "#1c9ac2",
            fontSize: 14,
            fontWeight: "bold"
          }}
        >
          {option1}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => updateSwitchData(2)}
        style={{
          flex: 1,
          backgroundColor: getSelectionMode == 2 ? "#1c9ac2" : "#e4e4e4",
          borderRadius: 10,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Text
          style={{
            color: getSelectionMode == 2 ? "white" : "#1c9ac2",
            fontSize: 14,
            fontWeight: "bold"
          }}
        >
          {option2}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => updateSwitchData(3)}
        style={{
          flex: 1,
          backgroundColor: getSelectionMode == 3 ? "#1c9ac2" : "#e4e4e4",
          borderRadius: 10,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Text
          style={{
            color: getSelectionMode == 3 ? "white" : "#1c9ac2",
            fontSize: 14,
            fontWeight: "bold"
          }}
        >
          {option3}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => updateSwitchData(4)}
        style={{
          flex: 1,
          backgroundColor: getSelectionMode == 4 ? "#1c9ac2" : "#e4e4e4",
          borderRadius: 10,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Text
          style={{
            color: getSelectionMode == 4 ? "white" : "#1c9ac2",
            fontSize: 14,
            fontWeight: "bold"
          }}
        >
          {option4}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
