import React from "react";
import { StatusBar, StatusBarStyle } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Stacks from "../stacks/Stacks";

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stacks />
    </NavigationContainer>
  )
}

export default MainNavigation;