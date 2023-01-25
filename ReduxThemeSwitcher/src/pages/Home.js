import React from "react";
import { Text, View, Button, Switch } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import pageStyles from "./pageStyles";
export default function HomePage({ navigation }) {
  const dispatch = useDispatch();
  const theme = useSelector((selector) => selector.theme);
  return (
    <View style={pageStyles[theme].container}>
      <Text style={pageStyles[theme].text}>This is a TEXT!</Text>
      <Switch
        onValueChange={() => dispatch({ type: "CHANGE_THEME" })}
        value={theme === "dark" ? true : false}
      ></Switch>
      <Button
        title="Go another page"
        onPress={() => navigation.navigate("Another")}
      ></Button>
    </View>
  );
}
