import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack"; 
import { AppNavigation, NavigationStackLists } from "@shared/config/navigation";

/**
 * screen import 
 */

import { WelcomeScreen } from "@screen/welcome";
import { LoginScreen } from "@screen/auth/login";

const Stack = createNativeStackNavigator<NavigationStackLists>();

export const AppNavigatorOptions = {
  headerShown: false,
  gestureEnabled: false,
};

const Stacks = () => {
  return (
    <Stack.Navigator initialRouteName={AppNavigation.WELCOME} screenOptions={AppNavigatorOptions} >
      <Stack.Screen name={AppNavigation.WELCOME} component={ WelcomeScreen } />
      <Stack.Screen name={AppNavigation.LOGIN} component={ LoginScreen } />
    </Stack.Navigator>
  )
}

export default Stacks;