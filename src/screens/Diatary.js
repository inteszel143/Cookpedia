
import { View, Text, SafeAreaView, StatusBar, TouchableOpacity, Button, ScrollView, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import * as Icons from "react-native-heroicons/outline";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import * as Progress from 'react-native-progress';
import { useNavigation } from '@react-navigation/native';
import Animated, { BounceInDown } from 'react-native-reanimated';

const cooking = require('../../assets/icons/cooking.png');
const salad = require('../../assets/icons/salad.png');

export default function Diatary() {

    const navigation = useNavigation();

    const data = [
        {
            image: salad,
            name: "Vegetarian",
            delay: 200,
        },
        {
            image: cooking,
            name: "Vegan",
            delay: 200,
        },
        {
            image: cooking,
            name: "Gluten-free",
            delay: 400,
        },
        {
            image: salad,
            name: "Nut-free",
            delay: 400,
        },
        {
            image: salad,
            name: "Daily-free",
            delay: 600,
        },
        {
            image: cooking,
            name: "Low-crap",
            delay: 600,
        },
        {
            image: cooking,
            name: "Peanut-free",
            delay: 800,
        },
        {
            image: salad,
            name: "Keto",
            delay: 800,
        },
        {
            image: salad,
            name: "Soy-free",
            delay: 1000,
        },
        {
            image: cooking,
            name: "Raw-food",
            delay: 1000,
        },
    ];

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
                    progress={0.6}
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

                {/* Title */}
                <View className="px-5 pt-6">
                    <View className="flex-row items-center">
                        <Text
                            style={{ fontFamily: "PoppinsSemibold", fontSize: wp(6.8) }}
                            className="text-2xl">Do you have any dietary preferences? </Text>
                    </View>
                    <Text
                        style={{ fontFamily: "PoppinsLight", fontSize: wp(4.2) }}
                        className="text-base pt-3">
                        Select your cuisines preferences for better recommendations. or you can skip it.
                    </Text>
                </View>


                {/* Dietary */}
                <View
                    className="flex-row flex-wrap gap-3 items-center justify-between px-4 mt-5" >

                    {
                        data.map((item, index) => {
                            return (
                                <Animated.View
                                    entering={BounceInDown.delay(item.delay).duration(1000)}
                                    key={index}
                                >
                                    <TouchableOpacity
                                        style={{ width: wp(44) }}
                                        className="flex-row border space-x-2 items-center border-[#EFEFEF] rounded-lg py-2 px-3">
                                        <Image
                                            style={{ width: wp(10), height: hp(10) }}
                                            source={item.image}
                                            resizeMode='contain'
                                        />
                                        <Text className="text-base"
                                            style={{ fontFamily: "PoppinsMedium", fontSize: wp(4.5) }}
                                        >{item.name}</Text>
                                    </TouchableOpacity>
                                </Animated.View>
                            )
                        })
                    }
                </View>

            </ScrollView>

            {/* BUTTON */}
            <Animated.View
                entering={BounceInDown.delay(200).duration(500)}
                className="absolute w-full bottom-0 bg-white shadow-md"
                style={{ alignSelf: 'center', height: hp(11) }}
            >
                <View className="flex-row items-center justify-between px-6">
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Profile")}
                        className="bg-[#F8E8EF] rounded-full items-center justify-center mt-2"
                        style={{ width: wp(40), height: wp(13) }}>
                        <Text
                            style={{ fontFamily: 'PoppinsMedium', fontSize: wp(4.2) }}
                            className="text-[#F74848] text-lg">Skip</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Profile")}
                        className="bg-[#F74848] rounded-full items-center justify-center mt-2"
                        style={{ width: wp(40), height: wp(13) }}>
                        <Text
                            style={{ fontFamily: 'PoppinsMedium', fontSize: wp(4.2) }}
                            className="text-white text-lg">Continue</Text>
                    </TouchableOpacity>
                </View>
            </Animated.View>

        </SafeAreaView>
    )
}