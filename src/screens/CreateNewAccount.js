import { View, Text, SafeAreaView, StatusBar, TouchableOpacity, Button, ScrollView, Image, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import * as Icons from "react-native-heroicons/outline";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import Animated, { BounceInDown } from 'react-native-reanimated';
import { Ionicons } from 'react-native-vector-icons';

import Modal from "react-native-modal";
import { SkypeIndicator, } from 'react-native-indicators';
const confitte = require('../../assets/icons/confitte.png');

export default function CreateNewAccount() {
    const navigation = useNavigation();
    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
        // setTimeout(() => {
        //     setModalVisible(false);
        //     navigation.navigate("SignInScreen");
        // }, 5000)

    };

    
    return (
        <SafeAreaView className="flex-1 bg-white">
            <StatusBar barStyle={'dark-content'} />

            <Modal isVisible={isModalVisible}
                animationIn={"bounceInUp"}
                animationOut={"bounceOutDown"}
            >
                <View style={{ height: hp(52), marginHorizontal: wp(4) }}
                    className="bg-white rounded-3xl p-6"
                >
                    {/* IMAGE */}
                    <View className="items-center">
                        <Image
                            resizeMode='contain'
                            style={{ width: wp(25), height: wp(25) }}
                            source={confitte}
                        />
                    </View>
                    {/* TEXT */}
                    <View className="items-center justify-center mt-8">
                        <Text
                            style={{
                                fontFamily: "PoppinsSemibold",
                                fontSize: wp(7)
                            }}
                            className="text-2xl text-[#F74848] text-center">Reset Password Successful!</Text>

                        <Text
                            style={{ fontFamily: "PoppinsMedium", fontSize: wp(4.2) }}
                            className="text-center px-7 text-base mt-4 text-gray-500">
                            Your password has been successfully changed.
                        </Text>
                    </View>

                    {/* Button */}
                    <View className="items-center mt-5">
                        <TouchableOpacity
                            className="w-full items-center justify-center py-4 rounded-full bg-[#F74848]"
                        >
                            <Text
                                style={{ fontFamily: "PoppinsMedium", fontSize: wp(4.2) }}
                                className="text-white text-base">Go to Home</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

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
                            className="text-2xl">Create New Password 🔑 </Text>
                    </View>
                    <Text
                        style={{ fontFamily: "PoppinsLight", fontSize: wp(4.2) }}
                        className="text-base pt-3">
                        Enter your new password If you forget it. then you have to do forgot password.
                    </Text>
                </View>

                {/* FORMS */}
                <View className="px-5 mt-5">
                    <View className="mt-2">
                        <Text
                            style={{ fontFamily: "PoppinsSemibold", fontSize: wp(4.5) }}
                            className="text-base">Password</Text>
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
                            className="text-base">Confirm Password</Text>
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

            </ScrollView>


            {/* BUTTON */}
            <Animated.View
                entering={BounceInDown.delay(200).duration(500)}
                className="absolute w-full bottom-0 items-center bg-white shadow-md"
                style={{ alignSelf: 'center', height: hp(11.5) }}
            >
                <TouchableOpacity
                    onPress={toggleModal}
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