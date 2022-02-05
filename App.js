import React, { useState } from "react";
import { StyleSheet, Text,Button,  TouchableHighlight, View, Modal ,Alert,Pressable } from "react-native";
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import TouchableHighlightExample from "./Home.jsx"
import Another from  "./HomeCopy.jsx"

const Stack = createStackNavigator()

function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={TouchableHighlightExample} />
         <Stack.Screen name='Another' component={Another} />
      </Stack.Navigator>
     
       
     
    </NavigationContainer>
  )
}

const App=()=>{
return (<MainStackNavigator/>)
}
export default App;