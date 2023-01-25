import React from "react";
import { Text, View } from "react-native";
import { useSelector } from "react-redux";
import pageStyles from "./pageStyles";
export default function AnotherPage() {
  const theme = useSelector((selector) => selector.theme);

  return (
    <View style={pageStyles[theme].container}>
      <Text style={pageStyles[theme].text}>hello</Text>
    </View>
  );
}
