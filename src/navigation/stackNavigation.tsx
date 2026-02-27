
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/home/HomeScreen";
import { MyTabs } from "./bottomTabNav";



const Stack = createNativeStackNavigator();

export function RootStack() {
  return (
    <Stack.Navigator initialRouteName="Mytab">
        <Stack.Screen name="Splash" component={HomeScreen} />
      <Stack.Screen name="Mytab" component={MyTabs} />
    </Stack.Navigator>
  );
}

