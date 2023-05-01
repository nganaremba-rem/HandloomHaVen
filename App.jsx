import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { Suspense } from "react";
import { ActivityIndicator } from "react-native";
import Container from "./components/Container";
import StateContextProvider from "./context/StateContext";
import Home from "./screens/Home";
import AuthContextProvider from "./context/AuthContext";
// import dynamicImport from "./dynamicImport";

const Stack = createNativeStackNavigator();

// const Home = lazy(() => import("./screens/Home.jsx"));
// const Register = lazy(() => import("./screens/Register.jsx"));

export default function App() {
  return (
    <AuthContextProvider>
      <StateContextProvider>
        <NavigationContainer>
          <Suspense
            fallback={
              <Container>
                <ActivityIndicator />
              </Container>
            }
          >
            <Stack.Navigator
              screenOptions={{
                headerShown: false,
                animation: "slide_from_bottom",
                animationDuration: 200,
              }}
            >
              <Stack.Screen name="Home" component={Home} />
            </Stack.Navigator>
          </Suspense>
        </NavigationContainer>
      </StateContextProvider>
    </AuthContextProvider>
  );
}
