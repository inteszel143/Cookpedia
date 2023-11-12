import { View, Text, SafeAreaView, StatusBar, TouchableOpacity, Image, Button, ScrollView } from 'react-native'
import React, { useState } from 'react'
import * as Icons from "react-native-heroicons/outline";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import * as Progress from 'react-native-progress';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from 'react-native-vector-icons';
import Animated, { FadeInRight, FadeInLeft, BounceInDown, FadeInUp, BounceInRight, BounceInLeft } from 'react-native-reanimated';

export default function LevelScreen() {

    const navigation = useNavigation();

    const [selected, setSelected] = useState(0);

    const data = [
        {
            title: "Novice",
            subtitle: "Basic understanding of kitchen tools and basic cooking techniques such as boiling and frying.",
            fade: BounceInLeft,
        },
        {
            title: "Intermediate",
            subtitle: "Ability to follow recipes, prepare simple dishes, and basic knife skills.",
            fade: BounceInRight,
        },
        {
            title: "Advanced",
            subtitle: "Understanding of cooking principles. create recipes & proficiency in various cooking techniques such as baking. grilling & roashing.",
            fade: BounceInLeft,
        }
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
                    progress={0.4}
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
                contentContainerStyle={{ paddingBottom: hp(12) }}
                showsVerticalScrollIndicator={false}
            >

                {/* Title */}
                <View className="px-5 pt-6">
                    <View className="flex-row items-center">
                        <Text
                            style={{ fontFamily: "PoppinsSemibold", fontSize: wp(6.8) }}
                            className="text-2xl">What is your cooking level ? </Text>
                    </View>
                    <Text
                        style={{ fontFamily: "PoppinsLight", fontSize: wp(4.2) }}
                        className="text-base pt-3">
                        Please select your contry of origin for a better recommendations.
                    </Text>
                </View>

                {/* CHOOSE */}
                <View className="flex-1 space-y-2 px-4 my-4">
                    {
                        data.map((item, index) => {
                            return (
                                <Animated.View
                                    key={index}
                                    entering={item.fade.delay(200).duration(1000)}
                                >
                                    <TouchableOpacity
                                        onPress={() => setSelected(index)}
                                        className={`rounded-lg px-5 py-5 border ${selected == index ? "border-[#F74848]" : "border-gray-200"} mb-2`}>
                                        <Text className="text-2xl"
                                            style={{ fontFamily: 'PoppinsSemibold', fontSize: wp(5) }}
                                        >{item.title}</Text>
                                        <Text
                                            style={{ fontFamily: "PoppinsLight", fontSize: wp(4) }}
                                            className="mt-2 text-base"
                                        >{item.subtitle}</Text>
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
                className="absolute w-full bottom-0 items-center bg-white shadow-md"
                style={{ alignSelf: 'center', height: hp(11.5) }}
            >
                <TouchableOpacity
                    onPress={() => navigation.navigate("Preferences")}
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