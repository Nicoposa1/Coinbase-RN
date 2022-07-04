import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// import Home from "../screens/Home";
import Prices from "../screens/Prices";
import Actions from "../screens/Actions";
import Portfolio from "../screens/Portfolio";
import Settings from "../screens/Settings";
import TabBar from "../components/TabBar"
import HomeStack from "./HomeStack";

const TabBarNavigator = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <TabBarNavigator.Navigator tabBar={(props) => <TabBar {...props} />}>
      <TabBarNavigator.Screen name="Home" component={HomeStack} />
      <TabBarNavigator.Screen name="Porfolio" component={Portfolio} />
      <TabBarNavigator.Screen name="Actions" component={Actions} />
      <TabBarNavigator.Screen name="Prices" component={Prices} />
      <TabBarNavigator.Screen name="Settings" component={Settings} />
    </TabBarNavigator.Navigator>
  );
};

export default TabNavigator;
