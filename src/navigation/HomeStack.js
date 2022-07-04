import React from "react";
import Home from "../screens/Home";
import News from "../screens/News";
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen name="HomeStack" component={Home} />
      <Stack.Screen name="News" component={News} />
    </Stack.Navigator>
  );
}

export default HomeStack;

