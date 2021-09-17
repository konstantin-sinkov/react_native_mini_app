import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Users from "./components/Users";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import Home from "./components/Home";
import StackNavigator from "@react-navigation/stack/src/navigators/createStackNavigator";

export default function App() {
  return (<NavigationContainer>
          <StackNavigator.Navigator>
              <StackNavigator.Screen name={'Home Page'} component={Home} />
              <StackNavigator.Screen name={'Users Page'} component={Users} />
          </StackNavigator.Navigator>
      </NavigationContainer>

    // <View style={styles.container}>
    //   <StatusBar style="auto" />
    //   <Users />
    // </View>
  );
}

const styles = StyleSheet.create({});
