import { View, Text, SafeAreaView, StatusBar, TouchableOpacity, Button, ScrollView, Image, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import * as Icons from "react-native-heroicons/outline";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import Animated, { BounceInDown } from 'react-native-reanimated';


export default function Forgot() {
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
                            className="text-2xl">Forgot Password 🔑 </Text>
                    </View>
                    <Text
                        style={{ fontFamily: "PoppinsLight", fontSize: wp(4.2) }}
                        className="text-base pt-3">
                        Enter your email address. We will send an OTP code for verification in the next step.
                    </Text>
                </View>


                {/* FORMS */}
                <View className="px-5 mt-6">
                    <View className="mt-2">
                        <Text
                            style={{ fontFamily: "PoppinsSemibold", fontSize: wp(4.5) }}
                            className="text-base">Email</Text>
                        <TextInput
                            className="mx-2 text-base border py-3 border-white border-b-[#F74848]"
                            style={{ fontFamily: "PoppinsMedium", fontSize: wp(4.5) }}
                            placeholder='intesedzel@gmail.com'
                        />
                    </View>
                </View>

            </ScrollView>



            {/* BUTTON */}
            <Animated.View
                entering={BounceInDown.delay(200).duration(500)}
                className="absolute w-full bottom-0 items-center bg-white shadow-md"
                style={{ alignSelf: 'center', height: hp(11.5) }}
            >
                <TouchableOpacity
                    onPress={() => navigation.navigate("YouGotEmail")}
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