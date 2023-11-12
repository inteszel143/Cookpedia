import { View, Text, SafeAreaView, StatusBar, TouchableOpacity, Button, ScrollView, Image, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import * as Icons from "react-native-heroicons/outline";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import * as Progress from 'react-native-progress';
import { useNavigation } from '@react-navigation/native';
import Animated, { BounceInDown } from 'react-native-reanimated';
import { FontAwesome5, MaterialIcons } from 'react-native-vector-icons';

export default function Profile() {

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
                <Progress.Bar
                    progress={0.7}
                    width={160}
                    height={10}
                    borderRadius={10}
                    color='#F74848'
                    unfilledColor="#EFEFEF"
                    borderWidth={0}
                />
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
                            style={{ fontFamily: "PoppinsSemibold", fontSize: wp(6.8) }}
                            className="text-2xl">Complete Your Profile 📄 </Text>
                    </View>
                    <Text
                        style={{ fontFamily: "PoppinsLight", fontSize: wp(4.2) }}
                        className="text-base pt-3">
                        Don't worry, only you can see your personal data. No one else will be able to see it.
                    </Text>
                </View>


                {/* Image */}
                <View className="items-center justify-center mt-4">
                    <View
                        style={{ width: wp(32), height: wp(32), backgroundColor: "#E8EBE8" }}
                        className="rounded-full items-center justify-center"
                    >
                        <FontAwesome5 name="user-alt" size={wp(15)} color={"#BCBCBC"} />
                        <TouchableOpacity
                            style={{ width: wp(6), height: wp(6) }}
                            className="absolute bg-[#F74848] rounded-md items-center justify-center bottom-4 right-1">
                            <MaterialIcons name="edit" size={wp(4)} color={"#FFFFFF"} />
                        </TouchableOpacity>
                    </View>
                </View>

                {/* FORMS */}
                <View className="px-4">
                    <View className="mt-2">
                        <Text
                            style={{ fontFamily: "PoppinsSemibold", fontSize: wp(4.5) }}
                            className="text-base">Full name</Text>
                        <TextInput
                            className="mx-2 text-base border py-3 border-white border-b-[#F74848]"
                            style={{ fontFamily: "PoppinsMedium", fontSize: wp(4.5) }}
                            placeholder='John Doe'
                        />
                    </View>
                    <View className="mt-5">
                        <Text
                            style={{ fontFamily: "PoppinsSemibold", fontSize: wp(4.5) }}
                            className="text-base">Phone Number</Text>
                        <TextInput
                            className="mx-2 text-base border py-3 border-white border-b-[#F74848]"
                            style={{ fontFamily: "PoppinsMedium", fontSize: wp(4.5) }}
                            placeholder='+63 928 4856 233'
                        />
                    </View>
                    <View className="mt-5">
                        <Text
                            style={{ fontFamily: "PoppinsSemibold", fontSize: wp(4.5) }}
                            className="text-base">Gender</Text>
                        <TextInput
                            className="mx-2 text-base border py-3 border-white border-b-[#F74848]"
                            style={{ fontFamily: "PoppinsMedium", fontSize: wp(4.5) }}
                            placeholder='Male'
                        />
                    </View>
                    <View className="mt-5">
                        <Text
                            style={{ fontFamily: "PoppinsSemibold", fontSize: wp(4.5) }}
                            className="text-base">Date of Birth</Text>
                        <TextInput
                            className="mx-2 text-base border py-3 border-white border-b-[#F74848]"
                            style={{ fontFamily: "PoppinsMedium", fontSize: wp(4.5) }}
                            placeholder='MM/DD/YYYY'
                        />
                    </View>
                </View>

            </ScrollView>


            {/* BUTTON */}
            {/* BUTTON */}
            <Animated.View
                entering={BounceInDown.delay(200).duration(500)}
                className="absolute w-full bottom-0 items-center bg-white shadow-md"
                style={{ alignSelf: 'center', height: hp(11.5) }}
            >
                <TouchableOpacity
                    onPress={() => navigation.navigate("CreateAccount")}
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