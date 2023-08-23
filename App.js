//packet imports
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Ionicons from "react-native-vector-icons/Ionicons";
// Screens
import { HomeScreen } from "./components/HomeScreen/homescreen";
import { SettingsScreen } from "./components/SettingsScreen/settingsscreen";
import { AddItem } from "./components/AddItem/additem";
import { SelectedItem } from "./components/SelectedItem/selecteditem";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="SelectedItem" component={SelectedItem} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

function Home() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Hem") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Inställningar") {
            iconName = focused ? "ios-list" : "ios-list-outline";
          } else if (route.name === "Ny annons") {
            iconName = focused ? "home" : "home-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Hem" component={HomeScreen} />
      <Tab.Screen name="Ny annons" component={AddItem} />
      <Tab.Screen name="Inställningar" component={SettingsScreen} />
    </Tab.Navigator>
  );
}
