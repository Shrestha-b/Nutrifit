import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/homescreen';
import OrderScreen from '../screens/orderscreen';
import PlansScrenn from '../screens/plans';
import WalletScreen from '../screens/walletscreen';
import SettingScreen from '../screens/settingscreen';
import {COLORS, SPACING} from '../theme/theme';

const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: COLORS.White,
          borderTopWidth: 0,
          height: SPACING.space_10 * 8,
          paddingTop: SPACING.space_10 * 1.6
        },
      }}>
      <Tab.Screen
       name="homescreen"
      component={HomeScreen}
      options={{
        tabBarShowLabel: false,

      }}
      />
      <Tab.Screen 
      name="orderscreen"
      component={OrderScreen} 
        options={{
        tabBarShowLabel: false
      }}
       />
      <Tab.Screen 
      name="planscreen"
       component={PlansScrenn} 
       options={{
        tabBarShowLabel: false
      }}
       />
      <Tab.Screen 
      name="walletscreen"
       component={WalletScreen}
       options={{
        tabBarShowLabel: false
      }}
       />
      <Tab.Screen
       name="settingsreen"
        component={SettingScreen} 
        options={{
        tabBarShowLabel: false
      }}
        />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;
