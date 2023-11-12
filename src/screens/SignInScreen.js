import { View, Text, SafeAreaView, StatusBar, TouchableOpacity, Button, ScrollView, Image, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import * as Icons from "react-native-heroicons/outline";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import Animated, { BounceInDown } from 'react-native-reanimated';
import { Ionicons } from 'react-native-vector-icons';

const google = require("../../assets/icons/google.png");
const facebook = require("../../assets/icons/facebook.png");
const apple = require("../../assets/icons/apple.png");


export default function SignInScreen() {
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
                            style={{ fontFamily: "PoppinsSemibold", fontSize: wp(7.5) }}
                            className="text-2xl">Hello there 👋 </Text>
                    </View>
                    <Text
                        style={{ fontFamily: "PoppinsLight", fontSize: wp(4.2) }}
                        className="text-base pt-3">
                        Please enter your username/email and password to sign in
                    </Text>
                </View>


                {/* FORMS */}
                <View className="px-5 mt-5">
                    <View className="mt-2">
                        <Text
                            style={{ fontFamily: "PoppinsSemibold", fontSize: wp(4.5) }}
                            className="text-base">Username/Email</Text>
                        <TextInput
                            className="mx-2 text-base border py-3 border-white border-b-[#F74848]"
                            style={{ fontFamily: "PoppinsMedium", fontSize: wp(4.5) }}
                            placeholder='johndoe23@gmail.com'
                        />
                    </View>
                    {/* passw2o2rd */}
                    <View className="mt-6">
                        <Text
                            style={{ fontFamily: "PoppinsSemibold", fontSize: wp(4.5) }}
                            className="text-base">Password</Text>
                        <TextInput
                            className="mx-2 text-base border py-3 border-white border-b-[#F74848]"
                            style={{ fontFamily: "PoppinsMedium", fontSize: wp(4.5) }}
                            placeholder='**********'
                            secureTextEntry
                        />
                    </View>

                </View>


                {/* REMEMBER */}
                <View className="px-5 mt-4 flex-row items-center space-x-2">
                    <Ionicons name="checkbox" size={wp(6)} color={"#F74848"} />
                    <Text
                        style={{ fontFamily: "PoppinsMedium", fontSize: wp(4.2) }}
                        className="text-base"
                    >Remember me</Text>
                </View>

                {/* FORGOT */}
                <View className="items-center justify-center mt-8">
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Forgot")}
                    >
                        <Text
                            style={{ fontFamily: "PoppinsSemibold", fontSize: wp(4.4) }}
                            className="text-base text-[#F74848]"
                        >Forgot Password</Text>
                    </TouchableOpacity>

                    <Text className="mt-4 text-base text-gray-500" style={{ fontSize: wp(4.2) }}>or continue with</Text>

                    <View className="flex-row space-x-16 mt-8">
                        <TouchableOpacity>
                            <Image
                                style={{ width: wp(8), height: wp(8) }}
                                resizeMode='contain'
                                source={google}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image
                                style={{ width: wp(8), height: wp(8) }}
                                resizeMode='contain'
                                source={facebook}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image
                                style={{ width: wp(8), height: wp(8) }}
                                resizeMode='contain'
                                source={apple}
                            />
                        </TouchableOpacity>
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
                    onPress={() => navigation.navigate("Navigation")}
                    className="bg-[#F74848] rounded-full items-center justify-center mt-2"
                    style={{ width: wp(90), height: wp(13) }}>
                    <Text
                        style={{ fontFamily: 'PoppinsMedium', fontSize: wp(4.2) }}
                        className="text-white text-lg">Sign In</Text>
                </TouchableOpacity>
            </Animated.View>

        </SafeAreaView>
    )
}