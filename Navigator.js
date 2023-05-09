import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import DetailScreen from "./DetailScreen";

import BottomNavigation from "./BottomNavigation";
import Header from "./Header";

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Notes" component={BottomNavigation}  options={{
            headerTitle: () => <Header name="Notes" />,
            headerStyle: { backgroundColor: "#002D62", height: 100,borderBottomWidth:2,borderBottomColor:'white' },
            headerTintColor: "white"
          }} />
      <Stack.Screen name="Details" component={DetailScreen} options={{headerShown:false}}/>
    </Stack.Navigator>
  );
};

export default Navigation;
