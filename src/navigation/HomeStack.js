import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeStack from "../screens/Home";
import News from "../screens/News";

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeStack" component={HomeStack} />
      <Stack.Screen name="News" component={News} />
    </Stack.Navigator>
  )
}

export default HomeStack;

