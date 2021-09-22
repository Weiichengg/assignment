import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { HomeScreen, NotificationsScreen, About, Profile, Help } from './screen';

const Drawer = createDrawerNavigator();
const HomeStack = createStackNavigator();
const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home Screen" component={HomeScreen} />
    </HomeStack.Navigator>
  );
}

const NotiStack = createStackNavigator();
const NotiStackScreen = () => {
  return (
    <NotiStack.Navigator>
      <NotiStack.Screen name="Notification Screen" component={NotificationsScreen} />

    </NotiStack.Navigator>
  );
}

function MyDrawer() {
  return (
    <Drawer.Navigator drawerStyle={{
      backgroundColor: '#eee',
      width: 240,
    }}>
      <Drawer.Screen name="Home Stack Screen" component={HomeStackScreen} />
      <Drawer.Screen name="Notifications" component={NotiStackScreen} />
    </Drawer.Navigator>
 );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}