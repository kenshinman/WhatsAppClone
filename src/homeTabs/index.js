import React from 'react';
import {View} from 'react-native';
import {
  createMaterialTopTabNavigator,
} from '@react-navigation/material-top-tabs';
import Calls from './Calls';
import Chats from './Chats';
import Status from './Status';
import {Icon} from 'native-base';

const Tabs = createMaterialTopTabNavigator ();

const RootTab = () => {
  return (
    <Tabs.Navigator
      tabBarOptions={{
        activeTintColor: '#fff',
        inactiveTintColor: 'rgba(223,223,223, 0.6)',
        style: {
          backgroundColor: 'rgba(8,94,84,1)',
          borderBottomColor: '#fff',
        },
        indicatorStyle: {
          backgroundColor: 'white',
        },
      }}
    >
      <Tabs.Screen
        name="Chats"
        component={Chats}
        // options={{title: () => <Icon name="person" />}}
      />
      <Tabs.Screen name="Status" component={Status} />
      <Tabs.Screen name="Calls" component={Calls} />
    </Tabs.Navigator>
  );
};

export default RootTab;
