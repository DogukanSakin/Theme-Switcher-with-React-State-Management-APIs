import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Switch } from "react-native";
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
export default function HomePage({ navigation }) {
  const { theme, setTheme } = useContext(ThemeContext);
  console.log(theme);
  return (
    <View style={[styles.container, styles[`${theme}Background`]]}>
      <Text style={styles[`${theme}Text`]}>Home Page</Text>
      <StatusBar style="auto" />
      <Button
        onPress={() => navigation.navigate("Another")}
        title="Go another page"
      ></Button>
      <Switch
        onValueChange={() => setTheme(theme === "light" ? "dark" : "light")}
        value={theme === "dark" ? true : false}
      ></Switch>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  darkBackground: {
    backgroundColor: "#161616",
  },
  lightBackground: {
    backgroundColor: "#fff",
  },
  darkText: {
    color: "white",
  },
  lightText: {
    color: "black",
  },
});
