import { NavigationContainer } from "@react-navigation/native";
import { RootStack } from "./stackNavigation";


export default function Navigation() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}