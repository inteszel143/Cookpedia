import { View, Text, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import * as Solid from "react-native-heroicons/solid";
import * as OutLine from "react-native-heroicons/outline";
import { removeItem } from '../../utils/asyncStorage';

export default function Settings() {


    const navigation = useNavigation();

    const handleReset = async () => {
        await removeItem('onboarded');
        navigation.navigate("Welcome");
    }


    return (
        <SafeAreaView className="flex-1 bg-white">


            {/* header */}
            <View className="flex-row items-center justify-between w-full px-4 mt-3">
                <View className="flex-row items-center gap-3">
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                    >
                        <OutLine.ArrowLeftIcon color={"black"} size={hp(4)} />
                    </TouchableOpacity>

                    <Text
                        style={{
                            fontFamily: "PoppinsSemibold",
                            fontSize: wp(5),
                        }}
                        className="text-base"
                    >Settings</Text>
                </View>

            </View>



            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingBottom: hp(10),
                }}
            >
                <View className="flex-row items-center justify-between px-4 mt-5">
                    <View className="flex-row items-center gap-4">
                        <View
                            className="bg-[#F8F5EB] rounded-full flex items-center justify-center"
                            style={{
                                width: wp(11),
                                height: wp(11),
                            }}
                        >
                            <Solid.UserIcon color={"#F85858"} size={hp(3.2)} />
                        </View>
                        <Text
                            style={{
                                fontFamily: "PoppinsMedium",
                                fontSize: hp(2.4),
                            }}
                            className="text-base"
                        >Personal Info</Text>
                    </View>

                    <View>
                        <Solid.ChevronRightIcon className="text-black/50" size={hp(3.2)} />
                    </View>

                </View>

                <View className="flex-row items-center justify-between px-4 mt-5">
                    <View className="flex-row items-center gap-4">
                        <View
                            className="bg-[#F8F5EB] rounded-full flex items-center justify-center"
                            style={{
                                width: wp(11),
                                height: wp(11),
                            }}
                        >
                            <Solid.BellIcon color={"#F3AE41"} size={hp(3.2)} />
                        </View>
                        <Text
                            style={{
                                fontFamily: "PoppinsMedium",
                                fontSize: hp(2.4),
                            }}
                            className="text-base"
                        >Notification</Text>
                    </View>

                    <View>
                        <Solid.ChevronRightIcon className="text-black/50" size={hp(3.2)} />
                    </View>

                </View>

                <View className="flex-row items-center justify-between px-4 mt-5">
                    <View className="flex-row items-center gap-4">
                        <View
                            className="bg-[#F8F5EB] rounded-full flex items-center justify-center"
                            style={{
                                width: wp(11),
                                height: wp(11),
                            }}
                        >
                            <Solid.ShieldCheckIcon color={"#4DD68A"} size={hp(3.2)} />
                        </View>
                        <Text
                            style={{
                                fontFamily: "PoppinsMedium",
                                fontSize: hp(2.4),
                            }}
                            className="text-base"
                        >Security</Text>
                    </View>

                    <View>
                        <Solid.ChevronRightIcon className="text-black/50" size={hp(3.2)} />
                    </View>

                </View>

                <View className="flex-row items-center justify-between px-4 mt-5">
                    <View className="flex-row items-center gap-4">
                        <View
                            className="bg-[#F8F5EB] rounded-full flex items-center justify-center"
                            style={{
                                width: wp(11),
                                height: wp(11),
                            }}
                        >
                            <Solid.LanguageIcon color={"#1B79E7"} size={hp(3.2)} />
                        </View>
                        <Text
                            style={{
                                fontFamily: "PoppinsMedium",
                                fontSize: hp(2.4),
                            }}
                            className="text-base"
                        >Language</Text>
                    </View>

                    <View className="flex-row items-center gap-2">
                        <Text>English (US)</Text>
                        <Solid.ChevronRightIcon className="text-black/50" size={hp(3.2)} />
                    </View>

                </View>


                <View className="flex-row items-center justify-between px-4 mt-5">
                    <View className="flex-row items-center gap-4">
                        <View
                            className="bg-[#F8F5EB] rounded-full flex items-center justify-center"
                            style={{
                                width: wp(11),
                                height: wp(11),
                            }}
                        >
                            <Solid.EyeIcon color={"#835EE2"} size={hp(3.2)} />
                        </View>
                        <Text
                            style={{
                                fontFamily: "PoppinsMedium",
                                fontSize: hp(2.4),
                            }}
                            className="text-base"
                        >Dark mode</Text>
                    </View>

                    <View>
                        <Solid.ChevronRightIcon className="text-black/50" size={hp(3.2)} />
                    </View>

                </View>


                <View
                    className="mt-4"
                    style={{ flex: 1, height: 1, backgroundColor: '#EBEBEB', marginHorizontal: wp(5), }} />



                <View className="flex-row items-center justify-between px-4 mt-5">
                    <View className="flex-row items-center gap-4">
                        <View
                            className="bg-[#F8F5EB] rounded-full flex items-center justify-center"
                            style={{
                                width: wp(11),
                                height: wp(11),
                            }}
                        >
                            <Solid.UsersIcon color={"#F4A817"} size={hp(3.2)} />
                        </View>
                        <Text
                            style={{
                                fontFamily: "PoppinsMedium",
                                fontSize: hp(2.4),
                            }}
                            className="text-base"
                        >Invite Friends</Text>
                    </View>

                    <View>
                        <Solid.ChevronRightIcon className="text-black/50" size={hp(3.2)} />
                    </View>

                </View>

                <View className="flex-row items-center justify-between px-4 mt-5">
                    <View className="flex-row items-center gap-4">
                        <View
                            className="bg-[#F8F5EB] rounded-full flex items-center justify-center"
                            style={{
                                width: wp(11),
                                height: wp(11),
                            }}
                        >
                            <Solid.DocumentTextIcon color={"#8DD7BC"} size={hp(3.2)} />
                        </View>
                        <Text
                            style={{
                                fontFamily: "PoppinsMedium",
                                fontSize: hp(2.4),
                            }}
                            className="text-base"
                        >Helper Center</Text>
                    </View>

                    <View>
                        <Solid.ChevronRightIcon className="text-black/50" size={hp(3.2)} />
                    </View>

                </View>

                <View className="flex-row items-center justify-between px-4 mt-5">
                    <View className="flex-row items-center gap-4">
                        <View
                            className="bg-[#F8F5EB] rounded-full flex items-center justify-center"
                            style={{
                                width: wp(11),
                                height: wp(11),
                            }}
                        >
                            <Solid.ExclamationCircleIcon color={"#1B79E7"} size={hp(3.2)} />
                        </View>
                        <Text
                            style={{
                                fontFamily: "PoppinsMedium",
                                fontSize: hp(2.4),
                            }}
                            className="text-base"
                        >About Cookpedia</Text>
                    </View>

                    <View>
                        <Solid.ChevronRightIcon className="text-black/50" size={hp(3.2)} />
                    </View>

                </View>

                <TouchableOpacity
                    onPress={handleReset}
                    className="flex-row items-center justify-between px-4 mt-5">
                    <View className="flex-row items-center gap-4">
                        <View
                            className="bg-[#F8F5EB] rounded-full flex items-center justify-center"
                            style={{
                                width: wp(11),
                                height: wp(11),
                            }}
                        >
                            <Solid.ArrowRightOnRectangleIcon color={"red"} size={hp(3.2)} />
                        </View>
                        <Text
                            style={{
                                fontFamily: "PoppinsMedium",
                                fontSize: hp(2.4),
                            }}
                            className="text-base"
                        >Logout</Text>
                    </View>

                </TouchableOpacity>

            </ScrollView>


        </SafeAreaView>
    )
}