import { View, Text, StatusBar, SafeAreaView, Image, TouchableOpacity, ScrollView, TouchableWithoutFeedback, Dimensions } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import * as Solid from "react-native-heroicons/solid";
import * as OutLine from "react-native-heroicons/outline";
import Carousel from 'react-native-snap-carousel';

const logo = require("../../../assets/logo/Splash.png");
const banner1 = require("../../../assets/banners/banner1.png");
const banner2 = require("../../../assets/banners/banner2.png");
const banner3 = require("../../../assets/banners/banner3.png");

const { width, height } = Dimensions.get("window");

export default function Home() {

    return (
        <SafeAreaView className="flex-1 bg-white">
            <StatusBar barStyle={"dark-content"} />

            {/* header */}
            <View className="flex-row items-center justify-between w-full px-4 mt-2">
                <View className="flex-row items-center gap-2">
                    <Image
                        resizeMode='contain'
                        style={{
                            width: wp(10),
                            height: wp(10),
                        }}
                        source={logo}
                    />
                    <Text
                        style={{
                            fontFamily: "PoppinsSemibold",
                            fontSize: wp(5),
                        }}
                        className="text-base"
                    >Cookpedia</Text>
                </View>

                <View className="flex-row items-center gap-4">
                    <TouchableOpacity>
                        <OutLine.BellIcon color={"black"} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <OutLine.BookmarkIcon color={"black"} />
                    </TouchableOpacity>
                </View>
            </View>

            {/* <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: hp(10) }}
            >




            </ScrollView> */}

        </SafeAreaView>
    )
}


