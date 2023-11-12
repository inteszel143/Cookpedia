
import { View, Text, SafeAreaView, StatusBar, TouchableOpacity, Button, ScrollView, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import * as Icons from "react-native-heroicons/outline";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import * as Progress from 'react-native-progress';
import { useNavigation } from '@react-navigation/native';
import Animated, { BounceInDown } from 'react-native-reanimated';

const cooking = require('../../assets/icons/cooking.png');
const salad = require('../../assets/icons/salad.png');
const soup = require('../../assets/icons/soup.png');
const meat = require('../../assets/icons/meat.png');
const chicken = require('../../assets/icons/chicken.png');
const seafood = require('../../assets/icons/seafood.png');
const burger = require('../../assets/icons/burger.png');
const pizza = require('../../assets/icons/pizza.png');
const sushi = require('../../assets/icons/sushi.png');

export default function Preferences() {

    const navigation = useNavigation();

    const data = [
        {
            id: 1,
            image: salad,
            name: "Salad",
            delay: 200,
        },
        {
            id: 2,
            image: cooking,
            name: "Egg",
            delay: 200,
        },
        {
            id: 3,
            image: soup,
            name: "Soup",
            delay: 200,
        },
        {
            id: 4,
            image: meat,
            name: "Meat",
            delay: 400,
        },
        {
            id: 5,
            image: chicken,
            name: "Chicken",
            delay: 400,
        },
        {
            id: 6,
            image: seafood,
            name: "Seafood",
            delay: 400,
        },
        {
            id: 7,
            image: burger,
            name: "Burger",
            delay: 600,
        },
        {
            id: 8,
            image: pizza,
            name: "Pizza",
            delay: 600,
        },
        {
            id: 9,
            image: sushi,
            name: "Sushi",
            delay: 600,
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
                    progress={0.5}
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
                            className="text-2xl">Select your cuisines preferences? </Text>
                    </View>
                    <Text
                        style={{ fontFamily: "PoppinsLight", fontSize: wp(4.2) }}
                        className="text-base pt-3">
                        Select your cuisines preferences for better recommendations. or you can skip it.
                    </Text>
                </View>



                {/* preferences */}
                <View
                    className="flex-row flex-wrap gap-3 items-center justify-between px-4 mt-5">

                    {
                        data.map((item, index) => {
                            return (
                                <Animated.View
                                    key={index}
                                    entering={BounceInDown.delay(item.delay).duration(1000)}
                                >
                                    <TouchableOpacity
                                        key={index}
                                        style={{ width: wp(28) }}
                                        className="border items-center border-[#EFEFEF] rounded-lg p-4">
                                        <Image
                                            style={{ width: wp(10), height: hp(10) }}
                                            source={item.image}
                                            resizeMode='contain'
                                        />
                                        <Text className="text-base"
                                            style={{ fontFamily: "PoppinsMedium", fontSize: wp(4.2) }}
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
                        onPress={() => navigation.navigate("Diatary")}
                        className="bg-[#F8E8EF] rounded-full items-center justify-center mt-2"
                        style={{ width: wp(40), height: wp(13) }}>
                        <Text
                            style={{ fontFamily: 'PoppinsMedium', fontSize: wp(4.2) }}
                            className="text-[#F74848] text-lg">Skip</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Diatary")}
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