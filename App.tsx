import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import StartScreen from './src/screens/startscreen';
import BottomTabNavigator from './src/navigator/tabnavigator';
import OtpVerification from './src/screens/optverification';
import EnterNumber from './src/screens/enternumber';
import VerificationScreen from './src/screens/verificationscreen';
import DrawerNavigator from './src/navigator/drawernavigator';
// Only import react-native-gesture-handler on native platforms
import 'react-native-gesture-handler';

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator 
      screenOptions={{
        headerShown: false
      }}
      initialRouteName="startscreen">
        <Stack.Screen
          name="bottomtabnavigator"
          component={BottomTabNavigator}
        />
        <Stack.Screen
          name="DrawerNavigator"
          component={DrawerNavigator}
        />
        <Stack.Screen
         name="startscreen"
         component={StartScreen} 
         />
        <Stack.Screen
         name="otpVerification"
         component={OtpVerification} 
         />
        <Stack.Screen
         name="enternumber"
         component={EnterNumber} 
         />
         <Stack.Screen
         name="verificationscreen"
         component={VerificationScreen} 
         />
        {/* <Stack.Screen name="Profile" component={ProfileScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
