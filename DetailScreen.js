import { View, Text,Image, ScrollView } from "react-native";
import React from "react";
import YouTubePlayer from "react-native-youtube-iframe";

const DetailScreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "#0000ad" }}>
      <View style={{ marginTop: 30, height: 300, backgroundColor: "#002D62" }}>
        <YouTubePlayer height={200} play={true} videoId={"hmbcF97jlv0"} />
        <View style={{ flexDirection: "row", marginLeft: 10 }}>
          <Text style={{ color: "white" }}>Class ...Chapter one -</Text>
          <Text style={{ color: "red" }}>Number System</Text>
        </View>
        <View style={{ marginLeft: 10, marginTop: 5 }}>
          <Text style={{ color: "white", fontSize: 25, fontWeight: "bold" }}>
            Number System | Lecture 1|
          </Text>
          <Text style={{ color: "white", fontSize: 25, fontWeight: "bold" }}>
            Class 6th
          </Text>
        </View>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Text
          style={{
            backgroundColor: "red",
            width: 150,
            color: "white",
            marginHorizontal: 20,
            padding: 10,
            borderRadius: 10,
            textAlign: "center",
            fontSize: 20,
            marginTop: 10,
          }}
        >
          Playlist
        </Text>
        <Text
          style={{
            borderColor: "white",
            borderWidth: 1,
            width: 150,
            padding: 10,
            borderRadius: 10,
            textAlign: "center",
            fontSize: 20,
            marginTop: 10,
            marginRight: 20,
            color: "white",
          }}
        >
          Notes
        </Text>
      </View>

      <ScrollView>
      <View style={{flexDirection:'row'}}>
        <Image
          source={require("./assets/phto.png")}
          resizeMode="contain"
          style={{ width: 180, height: 100,marginLeft:10,borderRadius:5,marginTop:20 }}
        />
        <View style={{marginTop:25,marginLeft:10}}>
        <Text style={{color:'white'}}>Science</Text>
        <Text style={{color:'white',fontSize:18,fontWeight:'bold'}}>Number System</Text>
        <Text style={{color:'white'}}>Lecture 2</Text>
        <Text style={{color:'white'}}>Class 6th</Text>
        </View>
        
      </View>
      <View style={{flexDirection:'row'}}>
        <Image
          source={require("./assets/phto.png")}
          resizeMode="contain"
          style={{ width: 180, height: 100,marginLeft:10,borderRadius:5,marginTop:20 }}
        />
        <View style={{marginTop:25,marginLeft:10}}>
        <Text style={{color:'white'}}>Science</Text>
        <Text style={{color:'white',fontSize:18,fontWeight:'bold'}}>Number System</Text>
        <Text style={{color:'white'}}>Lecture 2</Text>
        <Text style={{color:'white'}}>Class 6th</Text>
        </View>
        
      </View>
      <View style={{flexDirection:'row'}}>
        <Image
          source={require("./assets/phto.png")}
          resizeMode="contain"
          style={{ width: 180, height: 100,marginLeft:10,borderRadius:5,marginTop:20 }}
        />
        <View style={{marginTop:25,marginLeft:10}}>
        <Text style={{color:'white'}}>Science</Text>
        <Text style={{color:'white',fontSize:18,fontWeight:'bold'}}>Number System</Text>
        <Text style={{color:'white'}}>Lecture 2</Text>
        <Text style={{color:'white'}}>Class 6th</Text>
        </View>
        
      </View>
      <View style={{flexDirection:'row'}}>
        <Image
          source={require("./assets/phto.png")}
          resizeMode="contain"
          style={{ width: 180, height: 100,marginLeft:10,borderRadius:5,marginTop:20 }}
        />
        <View style={{marginTop:25,marginLeft:10}}>
        <Text style={{color:'white'}}>Science</Text>
        <Text style={{color:'white',fontSize:18,fontWeight:'bold'}}>Number System</Text>
        <Text style={{color:'white'}}>Lecture 2</Text>
        <Text style={{color:'white'}}>Class 6th</Text>
        </View>
        
      </View>
      </ScrollView>

      
    </View>
  );
};

export default DetailScreen;
