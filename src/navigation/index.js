import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SplashScreen from '../screens/SplashScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import Language from '../screens/Language';
import LevelScreen from '../screens/LevelScreen';
import Preferences from '../screens/Preferences';
import Diatary from '../screens/Diatary';
import Profile from '../screens/Profile';
import CreateAccount from '../screens/CreateAccount';
import SignInScreen from '../screens/SignInScreen';
import Forgot from '../screens/Forgot';
import YouGotEmail from '../screens/YouGotEmail';
import CreateNewAccount from '../screens/CreateNewAccount';

import HomePage from '../screens/HomePage';

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Splash' screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Splash" component={SplashScreen} />
                <Stack.Screen name="Welcome" component={WelcomeScreen} />
                <Stack.Screen name="Language" component={Language} />
                <Stack.Screen name="Level" component={LevelScreen} />
                <Stack.Screen name="Preferences" component={Preferences} />
                <Stack.Screen name="Diatary" component={Diatary} />
                <Stack.Screen name="Profile" component={Profile} />
                <Stack.Screen name="CreateAccount" component={CreateAccount} />
                <Stack.Screen name="SignInScreen" component={SignInScreen} />
                <Stack.Screen name="Forgot" component={Forgot} />
                <Stack.Screen name="YouGotEmail" component={YouGotEmail} />
                <Stack.Screen name="CreateNewAccount" component={CreateNewAccount} />
                <Stack.Screen name='HomePage' component={HomePage} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}