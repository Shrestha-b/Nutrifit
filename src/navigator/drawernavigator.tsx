import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/homescreen';
import WalletScreen from '../screens/walletscreen';
// import Animated, { interpolate, ReduceMotion, runOnJS, useAnimatedStyle, useDerivedValue, useSharedValue, withSpring } from 'react-native-reanimated';
const Drawer = createDrawerNavigator();

export default function DrawerNavigator () {
  return (
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={WalletScreen} />
      </Drawer.Navigator>
  );
}