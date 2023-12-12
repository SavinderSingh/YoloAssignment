import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Screens } from './Screens';
import Genie from '../views/screens/tabGinie/Genie';
import Home from '../views/screens/tabHome/Home';
import CustomBottomTabView from './CustomBottomTabView';

const Tab = createBottomTabNavigator();

export const BottomNavigator = () => {
  return (
    <Tab.Navigator
        initialRouteName={Screens.TabHome}
        screenOptions={{
            headerShown: false,
        }}
        tabBar={props => <CustomBottomTabView {...props}/>}
    >
      <Tab.Screen name={Screens.TabHome} component={Home} />
      <Tab.Screen name={Screens.TabGenie} component={Genie} />
    </Tab.Navigator>
  );
}
