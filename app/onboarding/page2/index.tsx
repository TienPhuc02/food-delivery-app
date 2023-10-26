import React from "react";
import { Image, Text, View } from "react-native";

const OnBoardingPage2 = () => {
  return (
    <View className="bg-black h-full">
      <Image
        className="mb-[40px]"
        source={require("../../../assets/images/Illustration2.png")}
      />
      <View className="max-w-[200px] max-h-[50px] mx-auto">
        <Text className="text-white font-bold text-[20px] text-center mb-[20px]">
          Food Ninja Is Where Your Comfort Food Lives
        </Text>
      </View>
      <View>
        <Text className="text-white text-center max-w-[240px] mx-auto font-thin mb-[40px]">
          Enjoy a fast and smooth food delivery at your doorstep
        </Text>
      </View>
      <View className="max-w-[160px] max-h-[60px] mx-auto">
        <Text className="text-white bg-[#28cb7d] py-[18px] px-[60px] rounded-[15px]">
          Next
        </Text>
      </View>
    </View>
  );
};

export default OnBoardingPage2;
