import { View, Text, StatusBar, SafeAreaView, Image, TouchableOpacity, ScrollView, TouchableWithoutFeedback, Dimensions, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import * as Solid from "react-native-heroicons/solid";
import * as OutLine from "react-native-heroicons/outline";
import Categories from '../../components/Categories';
import axios from 'axios';
import Recipes from '../../components/Recipes';

const logo = require("../../../assets/logo/Splash.png");
const banner1 = require("../../../assets/banners/banner1.png");
const banner2 = require("../../../assets/banners/banner2.png");
const banner3 = require("../../../assets/banners/banner3.png");

const { width, height } = Dimensions.get("window");

export default function Home() {

    const [activeCategory, setActiveCategory] = useState('Beef');
    const [categories, setCategories] = useState([]);
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        getCategories();
        getRecipes();
    }, [])

    const handleChangeCategory = category => {
        getRecipes(category);
        setActiveCategory(category);
        setRecipes([]);
    }

    const getCategories = async () => {
        try {
            const response = await axios.get('https://themealdb.com/api/json/v1/1/categories.php');
            if (response && response.data) {
                setCategories(response.data.categories);
            }
        } catch (error) {
            console.log('error', error)
        }
    };


    const getRecipes = async (category = "Beef") => {
        try {
            const response = await axios.get(`https://themealdb.com/api/json/v1/1/filter.php?c=${category}`);

            if (response && response.data) {
                setRecipes(response.data.meals);
            }
        } catch (error) {
            console.log("error", error)
        }
    }

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


            {/* Search Bar */}
            <View className="mx-4 mt-6 flex-row items-center rounded-full bg-black/5 p-[5px]">
                <TextInput
                    placeholder='Search any recipe'
                    placeholderTextColor={'gray'}
                    style={{
                        fontSize: hp(2),
                        fontFamily: "PoppinsMedium",
                    }}
                    className="flex-1 text-base mb-1 pl-3 tracking-wider"
                />
                <View className="bg-white rounded-full p-3">
                    <Solid.MagnifyingGlassIcon size={hp(2.7)} strokeWidth={3} color={"gray"} />
                </View>
            </View>


            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: hp(10) }}
                className="pt-4"
            >

                {/* CATEGORIES */}
                <View>
                    {
                        categories.length > 0 && <Categories categories={categories} activeCategory={activeCategory} handleChangeCategory={handleChangeCategory} />
                    }
                </View>


                {/* RECIPES */}
                <View>
                    <Recipes recipes={recipes} categories={categories} />
                </View>

            </ScrollView>

        </SafeAreaView>
    )
}


