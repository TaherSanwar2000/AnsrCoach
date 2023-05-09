import { View, Text } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';

const Header = (props) => {
  return (
    <View style={{margin:15,flexDirection:'row'}}>
       <AntDesign name='arrowleft' size={40} color='white'/>
      <Text style={{fontSize:30,fontWeight:'bold',color:'white',marginLeft:70}}>{props.name}</Text>
    </View>
  )
}

export default Header