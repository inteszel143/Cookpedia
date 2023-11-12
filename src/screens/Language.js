import { View, Text, SafeAreaView, StatusBar, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import * as Icons from "react-native-heroicons/outline";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import * as Progress from 'react-native-progress';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from 'react-native-vector-icons';

import Animated, { FadeInRight, FadeInLeft, BounceInDown, FadeInUp } from 'react-native-reanimated';

export default function Language() {

    const navigation = useNavigation();

    return (
        <SafeAreaView className="flex-1 bg-white">
            <StatusBar barStyle={'dark-content'} />
            {/* header */}
            <View
                className="flex-row space-x-16 items-center px-4 py-3">

                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                >
                    <Icons.ArrowLongLeftIcon color={"black"} size={wp(8)} />
                </TouchableOpacity>
                <Progress.Bar
                    progress={0.3}
                    width={160}
                    height={10}
                    borderRadius={10}
                    color='#F74848'
                    unfilledColor="#EFEFEF"
                    borderWidth={0}
                />

                <View />
            </View>

            {/* Title */}
            <View className="px-5 pt-6">
                <Text
                    style={{ fontFamily: "PoppinsSemibold", fontSize: wp(6.5) }}
                    className="text-2xl">Choose your Language? 🏳️</Text>

                <Text
                    style={{ fontFamily: "PoppinsLight", fontSize: wp(4.2) }}
                    className="text-base pt-3">
                    Please select your contry of origin for a better recommendations.
                </Text>
            </View>

            {/* CHOOSE */}

            <View>
                {/* ENG */}
                <Animated.View
                    entering={FadeInLeft.springify().delay(200).duration(1000)}
                    className="flex-row justify-between items-center px-8 pt-12">
                    <View className="flex-row items-center space-x-4">
                        <Image
                            className="rounded-full"
                            style={{
                                width: wp(15),
                                height: wp(15),
                            }}
                            resizeMode='contain'
                            source={require('../../assets/icons/english.png')}
                        />
                        <Text
                            style={{ fontFamily: 'PoppinsMedium', fontSize: wp(4.2) }}
                            className="text-lg">English</Text>
                    </View>

                    <Ionicons name="radio-button-on" size={22} color={"#F74848"} />
                </Animated.View>


                {/* SEPERATOR */}
                <View className="my-5" style={{ alignSelf: 'center', width: wp(90), height: 1, backgroundColor: "#EFEFEF" }} />

                {/* TAGALOG */}
                <Animated.View
                    entering={FadeInRight.springify().delay(200).duration(1000)}
                    className="flex-row justify-between items-center px-8">
                    <View className="flex-row items-center space-x-4">
                        <Image
                            className="rounded-full"
                            style={{
                                width: wp(15),
                                height: wp(15),
                            }}
                            resizeMode='contain'
                            source={require('../../assets/icons/tagalog.png')}
                        />
                        <Text
                            style={{ fontFamily: 'PoppinsMedium', fontSize: wp(4.2) }}
                            className="text-lg">Tagalog</Text>
                    </View>

                    <Ionicons name="radio-button-off" size={22} color={"#D3D3D3"} />
                </Animated.View>

            </View>


            <Animated.View
                entering={BounceInDown.delay(200).duration(500)}
                className="absolute w-full bottom-0 items-center bg-white shadow-md"
                style={{ alignSelf: 'center', height: hp(11.5) }}
            >
                <TouchableOpacity
                    onPress={() => navigation.navigate("Level")}
                    className="bg-[#F74848] rounded-full items-center justify-center mt-2"
                    style={{ width: wp(90), height: wp(13) }}>
                    <Text
                        style={{ fontFamily: 'PoppinsMedium', fontSize: wp(4.2) }}
                        className="text-white text-lg">Continue</Text>
                </TouchableOpacity>
            </Animated.View>


        </SafeAreaView >
    )
}