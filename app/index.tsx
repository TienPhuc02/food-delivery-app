import { Image, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Dimensions } from "react-native";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import { router } from "expo-router";

var { height, width } = Dimensions.get("window");
const styles = StyleSheet.create({
  stylesTextLogoPage: {
    fontFamily: "Viga",
    color: "#1fc57c",
    marginLeft: "auto",
    marginRight: "auto",
    fontSize: 30,
    fontWeight: "600",
  },
  stylesTextDescriptionLogoPage: {
    fontSize: 15,
    fontWeight: "600",
    marginLeft: "auto",
    marginRight: "auto",
    color: "white",
  },
});
export default function Page() {
  const [fontsLoaded] = useFonts({
    Viga: require("../assets/fonts/Viga-Regular.ttf"),
    Inter: require("../assets/fonts/Inter-SemiBold.ttf"),
  });
  const navigateToOnboarding = () => {
    if (fontsLoaded) {
      setTimeout(() => {
        router.replace("/onboarding");
      }, 3000);
    }
  };

  useEffect(navigateToOnboarding, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View className="bg-black h-full">
      <View className="h-full">
        <LinearGradient
          className="h-[40%]"
          colors={["rgba(74, 72, 72, 0.8)", "transparent"]}
        >
          <Image source={require("../assets/images/Pattern.png")} />
        </LinearGradient>
        <Image
          source={require("../assets/images/Logo.png")}
          className="mx-auto my-0"
        />
        <Text style={styles.stylesTextLogoPage}>FoodNinja</Text>
        <Text
          style={{
            ...styles.stylesTextDescriptionLogoPage,
            fontFamily: "Inter",
          }}
        >
          Deliever Favorite Food
        </Text>
      </View>
    </View>
  );
}
