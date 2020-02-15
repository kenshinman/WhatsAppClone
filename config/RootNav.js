import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../src/screens/Home';
import RootTab from '../src/homeTabs';

const Stack = createStackNavigator ();

const RootNav = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {/* should be the material tabs */}
        <Stack.Screen component={Home} name="Home" />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNav;
