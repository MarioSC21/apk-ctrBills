import "react-native-gesture-handler";

import * as React from "react";
import { useState } from "react";
import { MaterialCommunityIcons, FontAwesome5 } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

// screens
import HomeScreen from "../screens/HomeScreen";
import WatchTransaction from "../screens/WatchTransaction";
import DetailBillScreen from "../screens/DetailBillScreen";
import Presupuesto from "../screens/Presupuesto";
import LoginInitiationScreen from "../screens/LoginInitiationScreen";
import LoginCreateAccountScreen from "../screens/LoginCreateAccountScreen";

import theme from "../theme";

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

// screens del Home
function Home() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: "#fff",
        headerTitleStyle: { fontWeight: "bold" },
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTransparent: true,
          headerTitleStyle: {
            opacity: 0,
          },
        }}
      />
      <Stack.Screen
        name="useDetail"
        component={DetailBillScreen}
        options={{ title: "useDetail" }}
      />
    </Stack.Navigator>
  );
}

// screen para ver los movimientos
function WatchMovement() {
  return (
    <Stack.Navigator
      initialRouteName="watchMovement"
      screenOptions={{
        headerTransparent: true,
        headerTitleStyle: {
          opacity: 0,
        },
      }}
    >
      <Stack.Screen name="watchMovement" component={WatchTransaction} />
    </Stack.Navigator>
  );
}

// screen del presupuesto
function EstimationPresupuesto() {
  return (
    <Stack.Navigator
      initialRouteName="presupuesto"
      screenOptions={{
        headerStyle: { backgroundColor: "#42f44b" },
        headerTintColor: "#fff",
        headerTitleStyle: { fontWeight: "bold" },
      }}
    >
      <Stack.Screen
        name="presupuesto"
        component={Presupuesto}
        options={{ title: "settings" }}
      />
    </Stack.Navigator>
  );
}

// screen de la barra de navegacion inferior
function BottomNavigatorHome() {
  return (
    <Tab.Navigator
      initialRouteName="userListHome"
      activeColor={theme.colors.backgroundOnda}
      inactiveColor={theme.colors.titleCardGastos}
      barStyle={{ backgroundColor: theme.colors.titleHeaderText }}
    >
      <Tab.Screen
        name="userListHome"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="home"
              color={color}
              size={theme.size.iconBottomNavar}
            />
          ),
        }}
      />
      <Tab.Screen
        name="createUserHome"
        component={WatchMovement}
        options={{
          tabBarLabel: "Transaction",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="bank-transfer"
              color={color}
              size={theme.size.iconBottomNavar}
            />
          ),
        }}
      />
      <Tab.Screen
        name="presupuestos"
        component={EstimationPresupuesto}
        options={{
          tabBarLabel: "Presupuesto",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="dollar-sign" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

// app principal para exportar y usar en el archivo principal
// con los screens principales
function MyApp() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeLogin"
          component={LoginInitiationScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CreateUserLogin"
          component={LoginCreateAccountScreen}
          options={{
            title: "Create User",
            headerTransparent: true,
            headerTitleStyle: {
              opacity: 0,
            },
            headerTitleAlign: "center",
            headerTintColor: "#fff",
          }}
        />
        <Stack.Screen
          name="MyHome"
          component={BottomNavigatorHome}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MyApp;
