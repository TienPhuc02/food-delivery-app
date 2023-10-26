import { router } from "expo-router";
import React from "react";
import { Image, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const OnBoardingPage2 = () => {
  const handleClickButtonNext = () => {
    router.replace("/sign-up");
  };
  return (
    <View className="bg-black h-full">
      <Image
        className="mb-[60px]"
        source={require("../../../assets/images/Illustration2.png")}
      />
      <View className="max-w-[350px] max-h-[60px] mx-auto mb-[30px]">
        <Text className="text-white font-bold text-[25px] text-center">
          Food Ninja Is Where Your Comfort Food Lives
        </Text>
      </View>
      <View>
        <Text className="text-white text-center max-w-[240px] mx-auto font-thin mb-[40px]">
          Enjoy a fast and smooth food delivery at your doorstep
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

export default OnBoardingPage2;
