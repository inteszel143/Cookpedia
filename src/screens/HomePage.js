import { View, Text, useColorScheme, StatusBar, TouchableOpacity } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';


import * as Solid from "react-native-heroicons/solid";
import * as OutLine from "react-native-heroicons/outline";

import Home from './tabScreens/Home';
import Discover from './tabScreens/Discover';
import New from './tabScreens/New';
import Profile from './tabScreens/Profile';
import Recipes from './tabScreens/Recipes';
import Settings from './ProfileStack/Settings';

export default function HomePage() {


    const currentTheme = useColorScheme();
    const CustomTabBarButton = ({ accessibilityState, onPress }) => {
        const isFocused = accessibilityState.selected;
        return (
            <TouchableOpacity
                onPress={onPress}
                style={{
                    marginTop: wp(1),
                    marginHorizontal: wp(3),
                    width: 40, // Adjust the width of the circle
                    height: 40, // Adjust the height of the circle
                    borderRadius: 20, // Set the borderRadius to make it circular
                    overflow: 'hidden', // Clip the content to the circular shape
                    alignItems: 'center', // Center horizontally
                    justifyContent: 'center', // Center vertically
                    backgroundColor: "#F74848",
                    flexDirection: 'row', // Align items in a row
                }}
            >
                <OutLine.PlusIcon color={"white"} size={wp(4.2)} />
            </TouchableOpacity>
        );
    };

    // STACK
    const HomeStack = createNativeStackNavigator();
    function HomeStackGroup() {
        return (
            <HomeStack.Navigator>
                <HomeStack.Screen name="TabGroup" component={TabGroup} options={{ headerShown: false }} />
                <HomeStack.Screen name='Settings' component={Settings}
                    options={{
                        headerShown: false,
                        presentation: 'card'
                    }}
                />
            </HomeStack.Navigator>
        )
    };


    const Tab = createBottomTabNavigator();
    function TabGroup() {
        return (
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ color, focused, size }) => {
                        if (route.name === "Home") {
                            return focused ? <Solid.HomeIcon size={wp(6)} color={color} /> : <OutLine.HomeIcon size={wp(6)} color={color} />
                        } else if (route.name === "Discover") {
                            return focused ? <Solid.FireIcon size={wp(6)} color={color} /> : <OutLine.FireIcon size={wp(6)} color={color} />
                        } else if (route.name === "Recipes") {
                            return focused ? <Solid.DocumentTextIcon size={wp(6)} color={color} /> : <OutLine.DocumentTextIcon size={wp(6)} color={color} />
                        } else if (route.name === "Profile") {
                            return focused ? <Solid.UserIcon size={wp(6)} color={color} /> : <OutLine.UserIcon size={wp(6)} color={color} />
                        }
                    },

                    tabBarStyle: {
                        // borderTopWidth: 0,
                    },
                    tabBarLabelStyle: {
                        fontSize: wp(2.8),
                        fontFamily: "PoppinsMedium",
                    },
                    tabBarActiveTintColor: "#F74848",
                })}
            >
                <Tab.Screen name='Home' component={Home} options={{ headerShown: false }} />
                <Tab.Screen name="Discover" component={Discover} />
                <Tab.Screen name="New" component={New}
                    options={{
                        tabBarLabel: "",
                        tabBarButton: (props) => <CustomTabBarButton {...props} />,
                    }}
                />
                <Tab.Screen name="Recipes" component={Recipes}
                    options={{
                        tabBarLabel: "My Recipes",
                    }}

                />
                <Tab.Screen name="Profile" component={Profile} options={{ headerShown: false }} />

            </Tab.Navigator>
        )
    }

    return (
        <NavigationContainer independent={true}>
            <HomeStackGroup />
        </NavigationContainer>
    )
}