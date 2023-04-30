import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { Suspense, lazy } from "react";
import { ActivityIndicator } from "react-native";
import Container from "./components/Container";
import StateContextProvider from "./context/StateContext";
import Home from "./screens/Home";
import Register from "./screens/Register";
// import dynamicImport from "./dynamicImport";

const Stack = createNativeStackNavigator();

// const Home = lazy(() => import("./screens/Home.jsx"));
// const Register = lazy(() => import("./screens/Register.jsx"));

export default function App() {
  return (
    <Suspense
      fallback={
        <Container>
          <ActivityIndicator />
        </Container>
      }
    >
      <StateContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
              animation: "slide_from_bottom",
              animationDuration: 200,
            }}
          >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Register" component={Register} />
          </Stack.Navigator>
        </NavigationContainer>
      </StateContextProvider>
    </Suspense>
  );
}
