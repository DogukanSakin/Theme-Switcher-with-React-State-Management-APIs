import { StyleSheet } from "react-native";
const stylesConstants = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default {
  dark: StyleSheet.create({
    container: {
      ...stylesConstants.container,
      backgroundColor: "#161616",
    },
    text: {
      color: "white",
    },
  }),
  light: StyleSheet.create({
    container: {
      ...stylesConstants.container,
      backgroundColor: "#fff",
    },
    text: {
      color: "black",
    },
  }),
};
