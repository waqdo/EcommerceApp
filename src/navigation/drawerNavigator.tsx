import { createDrawerNavigator } from '@react-navigation/drawer';
import { MyTabs } from './bottomTabNav';
import { Image } from 'react-native';

const Drawer = createDrawerNavigator();

export function MyDrawer() {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: true, }}>
      <Drawer.Screen name="HomeDrawer" component={MyTabs} options={{ title: 'Home' }} />
    </Drawer.Navigator>
  );
}