import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ThemeProvider } from "./context/ThemeContext";
import AnotherPage from "./pages/AnotherPage";
import HomePage from "./pages/Home";
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <ThemeProvider>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={HomePage} />
          <Stack.Screen name="Another" component={AnotherPage} />
        </Stack.Navigator>
      </ThemeProvider>
    </NavigationContainer>
  );
}
