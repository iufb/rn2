import { Tabs } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";

import { Icon } from "@/shared/ui";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={
        {
          // Disable the static render of the header on web
          // to prevent a hydration error in React Navigation v6.
        }
      }
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: "home",
          tabBarStyle: tabLabelStyle.tab,
          tabBarShowLabel: false,
          headerShown: true,
          tabBarIcon: ({ focused, color }) => (
            <Icon size={28} name="home" color={focused ? "white" : "gray"} />
          ),
        }}
      />

      <Tabs.Screen
        name="info"
        options={{
          tabBarLabel: "info",
          tabBarStyle: tabLabelStyle.tab,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, color }) => (
            <Icon
              size={28}
              name="info"
              style={{}}
              color={focused ? "white" : "gray"}
            />
          ),
          headerShown: true,
        }}
      />
      <Tabs.Screen
        name="diet"
        options={{
          tabBarLabel: "diet",
          tabBarStyle: tabLabelStyle.tab,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, color }) => (
            <Icon size={28} name="apple" color={focused ? "white" : "gray"} />
          ),
          headerShown: true,
        }}
      />
      <Tabs.Screen
        name="notifications"
        options={{
          tabBarLabel: "notifications",
          tabBarStyle: tabLabelStyle.tab,
          tabBarShowLabel: false,
          headerShown: true,
          tabBarIcon: ({ focused, color }) => (
            <Icon size={28} name="bell" color={focused ? "white" : "gray"} />
          ),
        }}
      />
      <Tabs.Screen
        name="health"
        options={{
          tabBarLabel: "health",
          tabBarStyle: tabLabelStyle.tab,
          tabBarShowLabel: false,
          headerShown: true,
          tabBarIcon: ({ focused, color }) => (
            <Icon size={28} name="heart" color={focused ? "white" : "gray"} />
          ),
        }}
      />
      <Tabs.Screen
        name="anketa"
        options={{
          tabBarLabel: "anketa",
          tabBarStyle: tabLabelStyle.tab,
          tabBarShowLabel: false,
          headerShown: true,
          tabBarIcon: ({ focused, color }) => (
            <Icon size={28} name="list" color={focused ? "white" : "gray"} />
          ),
        }}
      />
    </Tabs>
  );
}
const tabLabelStyle = StyleSheet.create({
  tab: {
    height: 60,
    paddingBottom: 8,
    backgroundColor: "black",
  },
});
