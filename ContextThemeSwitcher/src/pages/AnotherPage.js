import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
export default function AnotherPage() {
  const { theme, setTheme } = useContext(ThemeContext);
  console.log("another page theme:" + theme);
  return (
    <View style={[styles.container, styles[`${theme}Background`]]}>
      <Text style={styles[`${theme}Text`]}>Another Page</Text>
      <StatusBar style="auto" />
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
