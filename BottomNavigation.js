import React from "react";
import SettingScreen from "./SettingScreen";
import HomeScreen from "./HomeScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, View,Text } from "react-native";
import Quiz from "./Quiz";

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: { backgroundColor: "#00308F", height: 70 },
        headerStyle: { backgroundColor: "#00308F" },
        headerShown:false
      }}
    >
      <Tab.Screen
        name="home"
        component={HomeScreen}
        options={{
          tabBarIcon: () => (
            <View style={{alignItems:'center',justifyContent:'center'}}>
              <Image
                source={require("./assets/notepad.png")}
                resizeMode="contain"
                style={{ width: 35, height: 35 }}
              />
              <Text  style={{color:'white',fontSize:15,marginRight:10,fontWeight:'bold'}}>Notes</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingScreen}
        options={{
            tabBarIcon: () => (
              <View style={{alignItems:'center',justifyContent:'center'}}>
                <Image
                  source={require("./assets/notebook.png")}
                  resizeMode="contain"
                  style={{ width: 35, height: 35 }}
                />
                <Text  style={{color:'white',fontSize:15,fontWeight:'bold'}}>Form</Text>
              </View>
            ),
          }}
      />
      <Tab.Screen
        name="Quiz"
        component={Quiz}
        options={{
            tabBarIcon: () => (
              <View style={{alignItems:'center',justifyContent:'center'}}>
                <Image
                  source={require("./assets/ideas.png")}
                  resizeMode="contain"
                  style={{ width: 35, height: 35 }}
                />
                <Text  style={{color:'white',fontSize:15,fontWeight:'bold'}}>Quiz</Text>
              </View>
            ),
          }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;
