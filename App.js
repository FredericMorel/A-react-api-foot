import { StatusBar } from "expo-status-bar";
import React from "react";
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Connexion from "./components/screen/connexion";
import ListPicture from './components/screen/listPicture';
import ViewPicture from './components/screen/viewPicture';
import AddPicture from './components/screen/addPicture';

const Stack = createStackNavigator();

export default function App() {
  return (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Connection">
      <Stack.Screen name="Connection" component={Connexion}options={{headerShown: false}}/>
      <Stack.Screen name="ListPicture" component={ListPicture}options={{headerShown: false}}/>
      <Stack.Screen name="ViewPicture" component={ViewPicture} options={{headerShown: false}}/>
      <Stack.Screen name="AddPicture" component={AddPicture} options={{headerShown: false}}/>
      </Stack.Navigator>

    </NavigationContainer>
  );
 
}
