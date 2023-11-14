import { View, Text, Image, ActivityIndicator } from 'react-native'
import React, { useEffect } from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import Animated, { FadeIn, BounceInUp } from 'react-native-reanimated';
import { SkypeIndicator, } from 'react-native-indicators';
import { useNavigation } from '@react-navigation/native';
import { getItem } from '../utils/asyncStorage';

export default function SplashScreen() {

    const navigation = useNavigation();

    const [fontsLoaded] = useFonts({
        "PoppinsBlack": require("../../assets/fonts/Poppins-Black.ttf"),
        "PoppinsBold": require("../../assets/fonts/Poppins-Bold.ttf"),
        "PoppinsBlack": require("../../assets/fonts/Poppins-ExtraBold.ttf"),
        "PoppinsExtraB": require("../../assets/fonts/Poppins-ExtraLight.ttf"),
        "PoppinsExtraL": require("../../assets/fonts/Poppins-Black.ttf"),
        "PoppinsLight": require("../../assets/fonts/Poppins-Light.ttf"),
        "PoppinsMedium": require("../../assets/fonts/Poppins-Medium.ttf"),
        "PoppinsRegular": require("../../assets/fonts/Poppins-Regular.ttf"),
        "PoppinsSemibold": require("../../assets/fonts/Poppins-SemiBold.ttf"),
        "PoppinsThinr": require("../../assets/fonts/Poppins-Thin.ttf"),
    });



    useEffect(() => {
        const timer = setTimeout(() => {
            // navigation.push("Welcome");
            // let onboarded = await getItem('onboarded');
            handleDoneSplash();
        }, 5000);
        return () => clearTimeout(timer);
    }, [navigation]);



    const handleDoneSplash = async () => {
        let onboarded = await getItem('onboarded');
        if (onboarded == 1) {
            navigation.push("HomePage");
        } else {
            navigation.push("Welcome");
        }
    };


    if (!fontsLoaded) {
        return undefined;
    };


    return (
        <View className="flex-1 pb-14 justify-center items-center bg-[#F74848]">
            <StatusBar style='light' />
            <Animated.View entering={BounceInUp.delay(200).duration(1000).springify().damping(3)}>
                <Image
                    style={{ width: wp(80), height: hp(90), resizeMode: 'contain' }}
                    source={require('../../assets/logo/Splash.png')}
                />
            </Animated.View>
            <Animated.View entering={FadeIn.delay(400).duration(1000)} className="absolute bottom-12">
                <SkypeIndicator color='white' size={30} />
            </Animated.View>
        </View>
    )
}