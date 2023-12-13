import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Screens} from './Screens';
import {BottomNavigator} from './BottomNavigator';
import Categories from '../views/screens/details/Categories';
import Platforms from '../views/screens/details/Platforms';
import PlatformDetail from '../views/screens/details/PlatformDetail';
import MySubscriptions from '../views/screens/details/MySubscriptions';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{
          headerShown: false,
          presentation: 'fullScreenModal',
        }}>
        <Stack.Screen name="Main" component={MainRoutes} />
        <Stack.Screen
          name={Screens.PlatformDetail}
          component={PlatformDetail}
        />
        <Stack.Screen
          name={Screens.MySubscriptions}
          component={MySubscriptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;

const MainRoutes = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={BottomNavigator} />
      <Stack.Screen name={Screens.Categories} component={Categories} />
      <Stack.Screen name={Screens.Platforms} component={Platforms} />
    </Stack.Navigator>
  );
};
