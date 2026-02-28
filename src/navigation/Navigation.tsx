import { NavigationContainer } from "@react-navigation/native";
import { RootStack } from "./stackNavigation";
import { navigationRef } from "./NavigationUtils";


export default function Navigation() {
  return (
    <NavigationContainer ref={navigationRef}>
      <RootStack />
    </NavigationContainer>
  );
}