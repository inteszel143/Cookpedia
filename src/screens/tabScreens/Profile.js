import { View, Text, StatusBar, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import * as Solid from "react-native-heroicons/solid";
import * as OutLine from "react-native-heroicons/outline";
import { useNavigation } from '@react-navigation/native';



const logo = require("../../../assets/logo/Splash.png");
const avatar = require("../../../assets/logo/profile.png");

export default function Profile() {

    const navigation = useNavigation();

    return (
        <SafeAreaView className="flex-1 bg-white">
            <StatusBar barStyle={"dark-content"} />

            {/* header */}
            <View className="flex-row items-center justify-between w-full px-3 mt-2">
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
                    >Profile</Text>
                </View>

                <View className="flex-row items-center gap-4">
                    <TouchableOpacity>
                        <OutLine.ShareIcon color={"black"} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Settings")}
                    >
                        <OutLine.Cog6ToothIcon color={"black"} />
                    </TouchableOpacity>
                </View>
            </View>


            {/* PROFILE SECTION */}
            <View className="flex-row items-center justify-between px-4 mt-5">

                <View className="flex-row items-center">
                    <Image
                        resizeMode='contain'
                        style={{
                            width: wp(20),
                            height: wp(20),
                        }}
                        source={avatar}
                    />
                    <View>
                        <Text
                            style={{
                                fontFamily: "PoppinsMedium",
                                fontSize: hp(2.5),
                            }}
                            className="text-lg"
                        >Andrew Ainsley</Text>
                        <Text
                            style={{ fontFamily: "PoppinsMedium", fontSize: hp(2) }}
                            className="text-black/50">
                            @andrew_anisley
                        </Text>
                    </View>
                </View>
                <TouchableOpacity className="flex-row items-center border-[1.5px] border-[#F74848] px-4 py-2 rounded-full space-x-2 ">
                    <OutLine.PencilIcon color={"black"} size={14} />
                    <Text>Edit</Text>
                </TouchableOpacity>
            </View>




        </SafeAreaView>
    )
}