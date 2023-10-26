import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Dimensions } from "react-native";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import { router } from "expo-router";
import { Control, useController, useForm } from "react-hook-form";
import { EvilIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
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
interface InputProps {
  name: string;
  control: Control;
  placeholder: string;
}
const Input: React.FC<InputProps> = ({ name, control, placeholder }) => {
  const { field } = useController({
    control,
    defaultValue: "",
    name,
  });
  return (
    <TextInput
      value={field.value}
      onChangeText={field.onChange}
      placeholderTextColor="#666"
      placeholder={placeholder}
      className="max-w-[325px] bg-[#252525] py-[20px] pl-[25px] rounded-[15px] text-white"
      selectionColor="#666"
    />
  );
};
export default function SignUpScreen() {
  const [fontsLoaded] = useFonts({
    Viga: require("../../assets/fonts/Viga-Regular.ttf"),
    Inter: require("../../assets/fonts/Inter-SemiBold.ttf"),
  });
  const { control, handleSubmit } = useForm();
  const onSubmit = (data: object) => {
    Alert.alert(JSON.stringify(data));
  };
  if (!fontsLoaded) {
    return null;
  }
  return (
    <View className="bg-black h-full">
      <ScrollView>
        <View className="h-full">
          <LinearGradient
            className="h-[40%] mb-[40px]"
            colors={["rgba(74, 72, 72, 0.8)", "transparent"]}
          >
            <Image source={require("../../assets/images/Pattern.png")} />
          </LinearGradient>
          <View className="absolute top-[50px] left-[95px]">
            <Image
              source={require("../../assets/images/Logo.png")}
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
          <View className="content-sign-up px-[25px]">
            <View className="form-input mb-[12px]">
              <Input name="email" control={control} placeholder="email" />
            </View>
            <View className="form-input mb-[20px]">
              <Input name="password" control={control} placeholder="password" />
            </View>
            <Text className="text-white mx-auto font-semibold mb-[20px]">
              Or Continue With
            </Text>
            <View className="flex flex-row gap-[20px] justify-center items-center mb-[20px]">
              <View className="bg-[#252525] py-[16px] px-[24px] min-w-[152px] flex flex-row rounded-[15px]">
                <View className="bg-[#3c5a9a] w-[25px] h-[25px] rounded-full flex flex-row justify-center items-center ">
                  <EvilIcons
                    name="sc-facebook"
                    size={24}
                    color="white"
                    className="bg-[#3c5a9a] w-[25px] h-[25px]"
                  />
                </View>
                <Text className="text-white ml-[13px] font-medium text-[15px]">
                  Facebook
                </Text>
              </View>
              <View className="bg-[#252525] py-[16px] px-[24px] min-w-[152px] flex flex-row rounded-[15px]">
                <View className="bg-[#3c5a9a] w-[25px] h-[25px] rounded-full flex flex-row justify-center items-center ">
                  <FontAwesome5 name="google" size={24} color="white" />
                </View>
                <Text className="text-white ml-[13px] font-medium text-[15px]">
                  Google
                </Text>
              </View>
            </View>
            <View className="border-b border-[#28cb7d] block max-w-[130px] mx-auto mb-[40px]">
              <Text className="text-[#1dc47a] text-center text-[12px]">
                Forgot Your Password
              </Text>
            </View>
            <TouchableOpacity
              onPress={handleSubmit(onSubmit)}
              className="max-w-[160px] max-h-[60px] mx-auto"
            >
              <Text className="text-white bg-[#28cb7d] py-[18px] px-[50px] rounded-[15px]">
                Submit
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
