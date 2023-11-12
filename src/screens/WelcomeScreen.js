import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import Animated, { BounceInUp, BounceInDown } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';

export default function WelcomeScreen() {

    const navigation = useNavigation();

    return (
        <View className="flex-1 justify-center items-center bg-black">
            <Image
                className="h-full w-full absolute"
                resizeMode='contain'
                source={require('../../assets/background/background.png')}
            />

            {/* welcome message */}
            <Animated.View entering={BounceInUp.delay(200).duration(1000)} className="items-center">
                <Text
                    style={{ fontFamily: "PoppinsBold", fontSize: wp(10) }}
                    className="text-white">Welcome to</Text>
                <Text
                    style={{ fontFamily: "PoppinsSemibold", fontSize: wp(9) }}
                    className="text-[#F74848] text-2xl pt-4">
                    Cookpedia 👋
                </Text>

                <Text className="text-white px-12 text-center text-base pt-6"
                    style={{ fontFamily: "PoppinsLight" }}
                >
                    The best cooking and food recipes app of the century.
                </Text>


            </Animated.View>


            {/* buttons */}

            <View className="pt-14 space-y-5">

                <Animated.View entering={BounceInDown.duration(1000)}>
                    <TouchableOpacity
                        style={{ width: wp(80) }}
                        className=" flex-row justify-center items-center space-x-2 p-4 bg-white rounded-full">
                        <Image
                            resizeMode='contain'
                            source={require('../../assets/icons/google.png')}
                            style={{
                                width: wp(4),
                                height: wp(4),
                            }}
                        />
                        <Text
                            style={{
                                fontFamily: 'PoppinsMedium', fontSize: wp(4.2)
                            }}
                            className="text-black text-center">Continue with Google</Text>
                    </TouchableOpacity>
                </Animated.View>

                {/* GET STARTED */}
                <Animated.View entering={BounceInDown.delay(200).duration(1000)}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Language")}
                        style={{ width: wp(80) }}
                        className="p-4 bg-[#F74848] rounded-full">
                        <Text
                            style={{
                                fontFamily: 'PoppinsMedium', fontSize: wp(4.2)
                            }}
                            className="text-white text-center">Get Started</Text>
                    </TouchableOpacity>
                </Animated.View>

                {/* ALREADY ACCOUNT */}
                <Animated.View entering={BounceInDown.delay(400).duration(1000)}>
                    <TouchableOpacity
                        style={{ width: wp(80) }}
                        className="p-4 bg-white rounded-full">
                        <Text
                            style={{
                                fontFamily: 'PoppinsMedium', fontSize: wp(4.2)
                            }}
                            className="text-[#F74848] text-center">I already have an Account</Text>
                    </TouchableOpacity>
                </Animated.View>
            </View>
        </View>
    )
}