import { View, Text, Pressable, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
const navigation = useNavigation();
  return (
    <View style={{ backgroundColor: "#002D62", flex: 1 }}>
      <View
        style={{
          height: 150,
          width: 250,
          backgroundColor: "white",
          marginTop: 20,
          marginHorizontal: 50,
          borderRadius: 10,
        }}
      >
        <Pressable
          style={{ alignItems: "center", justifyContent: "center" }}
          onPress={() => {
            navigation.navigate("Details")
          }}
        >
          <Text
            style={{
              fontSize: 30,
              color: "red",
              fontWeight: "bold",
              marginTop: 5,
            }}
          >
            Mathametics
          </Text>
          <Image
            source={require("./assets/owl.png")}
            resizeMode="contain"
            style={{ width: 80, height: 80, marginTop: 10 }}
          />
        </Pressable>
      </View>
      <View
        style={{
          height: 150,
          width: 250,
          backgroundColor: "white",
          marginTop: 10,
          marginHorizontal: 50,
          borderRadius: 10,
        }}
      >
        <Pressable style={{ alignItems: "center", justifyContent: "center" }}>
          <Text
            style={{
              fontSize: 30,
              color: "red",
              fontWeight: "bold",
              marginTop: 5,
            }}
          >
            English
          </Text>
          <Image
            source={require("./assets/eng.png")}
            resizeMode="contain"
            style={{ width: 80, height: 80, marginTop: 10 }}
          />
        </Pressable>
      </View>
      <View
        style={{
          height: 150,
          width: 250,
          backgroundColor: "white",
          marginTop: 10,
          marginHorizontal: 50,
          borderRadius: 10,
        }}
      >
        <Pressable style={{ alignItems: "center", justifyContent: "center" }}>
          <Text
            style={{
              fontSize: 30,
              color: "red",
              fontWeight: "bold",
              marginTop: 10,
            }}
          >
            Science
          </Text>
          <Image
            source={require("./assets/data-science.png")}
            resizeMode="contain"
            style={{ width: 80, height: 80, marginTop: 10 }}
          />
        </Pressable>
      </View>
    </View>
  );
};

export default HomeScreen;
