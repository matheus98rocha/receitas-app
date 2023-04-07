import { createStackNavigator } from "@react-navigation/stack";

import "react-native-gesture-handler";

import Home from "../pages/home";
import Detail from "../pages/detail";
import Search from "../pages/search/";
import { customTransition } from "./animations/animation-config";

const Stack = createStackNavigator();

const defaultOptions = {
  headerShown: false,
};

export function StackRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: true,
        gestureDirection: "horizontal",
      }}
    >
      <Stack.Screen name="home" component={Home} options={defaultOptions} />
      <Stack.Screen
        name="detail"
        component={Detail}
        options={{
          title: "Detalhes da receita",
          ...customTransition,
        }}
      />
      <Stack.Screen
        name="search"
        component={Search}
        options={{
          title: "Veja o que encontramos",
          ...customTransition,
        }}
      />
    </Stack.Navigator>
  );
}
