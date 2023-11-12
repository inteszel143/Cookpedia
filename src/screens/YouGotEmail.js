import { View, Text, SafeAreaView, StatusBar, TouchableOpacity, Button, ScrollView, Image, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import * as Icons from "react-native-heroicons/outline";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import Animated, { BounceInDown } from 'react-native-reanimated';

export default function YouGotEmail() {
    const navigation = useNavigation();

    return (
        <SafeAreaView className="flex-1 bg-white">
            <StatusBar barStyle={'dark-content'} />

            {/* header */}
            <View className="flex-row items-center px-4 py-3 space-x-16">
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                >
                    <Icons.ArrowLongLeftIcon color={"black"} size={wp(8)} />
                </TouchableOpacity>
                <View />
            </View>

            <ScrollView
                contentContainerStyle={{ paddingBottom: hp(15) }}
                showsVerticalScrollIndicator={false}
            >
                {/* title */}
                <View className="px-5 pt-6">
                    <View className="flex-row items-center">
                        <Text
                            style={{ fontFamily: "PoppinsSemibold", fontSize: wp(8) }}
                            className="text-2xl">You've Got Mail ✉️ </Text>
                    </View>
                    <Text
                        style={{ fontFamily: "PoppinsLight", fontSize: wp(4.2) }}
                        className="text-base pt-3">
                        We have sent the OTP verification code to your email address. Check your email and enter the code below.
                    </Text>
                </View>

                {/* input code */}
                <View className="flex-row items-center px-7 mt-8 justify-between">
                    <View
                        className="p-5 px-7 border border-white bg-[#F7F7F7] rounded-lg">
                        <Text
                            style={{ fontFamily: "PoppinsSemibold", fontSize: wp(7) }}
                        >4</Text>

                    </View>
                    <View
                        className="p-5 px-7 border border-white bg-[#F7F7F7] rounded-lg">
                        <Text
                            style={{ fontFamily: "PoppinsSemibold", fontSize: wp(7) }}
                        >6</Text>
                    </View>
                    <View
                        className="p-5 px-7 border border-white bg-[#F7F7F7] rounded-lg">
                        <Text
                            style={{ fontFamily: "PoppinsSemibold", fontSize: wp(7) }}
                        >7</Text>
                    </View>
                    <View
                        className="p-5 px-7 border border-white bg-[#F7F7F7] rounded-lg">
                        <Text
                            style={{ fontFamily: "PoppinsSemibold", fontSize: wp(7) }}
                        >2</Text>
                    </View>
                </View>


                {/* Didn't */}
                <View className="items-center mt-8 space-y-3">
                    <Text
                        style={{ fontFamily: "PoppinsLight", fontSize: wp(4.4) }}
                        className="text-lg"
                    >Didn't receive email ?</Text>
                    <Text
                        style={{ fontFamily: "PoppinsLight", fontSize: wp(4.4) }}
                        className="text-lg"
                    >You can resend code in <Text className="text-[#F74848]">55</Text> s</Text>
                </View>


            </ScrollView>


            {/* BUTTON */}
            <Animated.View
                entering={BounceInDown.delay(200).duration(500)}
                className="absolute w-full bottom-0 items-center bg-white shadow-md"
                style={{ alignSelf: 'center', height: hp(11.5) }}
            >
                <TouchableOpacity
                    onPress={() => navigation.navigate("CreateNewAccount")}
                    className="bg-[#F74848] rounded-full items-center justify-center mt-2"
                    style={{ width: wp(90), height: wp(13) }}>
                    <Text
                        style={{ fontFamily: 'PoppinsMedium', fontSize: wp(4.2) }}
                        className="text-white text-lg">Continue</Text>
                </TouchableOpacity>
            </Animated.View>


        </SafeAreaView>
    )
}