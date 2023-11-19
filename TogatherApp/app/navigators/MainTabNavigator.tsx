import { BottomTabScreenProps, createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { CompositeScreenProps } from "@react-navigation/native"
import React from "react"
import { AppStackScreenProps, AppStackParamList } from "./AppNavigator"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { DevScreen, WelcomeScreen } from "app/screens"
import { colors } from "app/theme/colors"

export type MainTabParamList = {
  Home: undefined
  Messages: undefined
  Explore: undefined
  Notifications: undefined
  Dev: { testLabelParam?: string }
  // Profile: undefined // commented out in favor of Dev page
}

export type MainTabScreenProps<T extends keyof MainTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<MainTabParamList, T>,
  AppStackScreenProps<keyof AppStackParamList>
>

const Tab = createBottomTabNavigator<MainTabParamList>()

export function MainTabNavigator() {
  const { bottom } = useSafeAreaInsets()

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        // tabBarStyle: [$tabBar, { height: bottom + 70 }],
        tabBarStyle: {
          // bottom,
          width: 342,
          height: 100,
          backgroundColor: "pink",
          alignSelf: "center",
          borderRadius: 12,
          justifyContent: "center",
          // padding: 10,
          // paddingBottom: bottom,
          padding: 0,
          marginBottom: 50,
        },
        tabBarActiveTintColor: colors.text,
        tabBarInactiveTintColor: colors.text,

        // tabBarLabelStyle: $tabBarLabel,
        // tabBarItemStyle: $tabBarItem,
      }}
    >
      <Tab.Screen name="Home" component={DevScreen} />
      <Tab.Screen name="Messages" component={WelcomeScreen} />
      <Tab.Screen name="Explore" component={WelcomeScreen} />
      <Tab.Screen name="Notifications" component={WelcomeScreen} />
      <Tab.Screen name="Dev" component={WelcomeScreen} />
      {/* <Tab.Screen name="Profile" component={WelcomeScreen} /> */}
    </Tab.Navigator>
  )
}
