import { router } from "expo-router";
import React from "react";
import { Image, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const OnBoarding = () => {
  const handleClickButtonNext = () => {
    router.replace("/onboarding/page2");
  };
  return (
    <View className="bg-black h-full">
      <Image
        className="mb-[40px]"
        source={require("../../assets/images/Illustartion.png")}
      />
      <View className="max-w-[200px] max-h-[50px] mx-auto">
        <Text className="text-white font-bold text-[20px] text-center mb-[20px]">
          Find your Comfort Food here
        </Text>
      </View>
      <View>
        <Text className="text-white text-center max-w-[240px] mx-auto font-thin mb-[40px]">
          Here You Can find a chef or dish for every taste and color.Enjoy!
        </Text>
      </View>
      
      <TouchableOpacity
        onPress={handleClickButtonNext}
        className="max-w-[160px] max-h-[60px] mx-auto"
      >
        <Text className="text-white bg-[#28cb7d] py-[18px] px-[60px] rounded-[15px]">
          Next
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default OnBoarding;
