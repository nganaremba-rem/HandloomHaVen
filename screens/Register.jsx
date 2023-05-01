import {
  FontAwesome,
  FontAwesome5,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import React, { useState } from "react";
import {
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import * as Animatable from "react-native-animatable";
import Container from "../components/Container";
import LogoName from "../components/LogoName";
import TextInputCustom from "../components/TextInputCustom";
const Register = ({ navigation }) => {
  const bounce = {
    0: {
      translateY: 0,
    },
    0.5: {
      translateY: 10,
    },
    1: {
      translateY: 0,
    },
  };

  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => setShowPassword((prev) => !prev);

  return (
    <Container>
      <View className={"items-center"}>
        <View className="justify-center items-center py-7 max-w-xs overflow-hidden">
          <Animatable.Image
            animation={bounce}
            duration={1000}
            iterationCount={"infinite"}
            easing={"ease-in-back"}
            source={require("../assets/logos/signup.png")}
            className="w-40 h-40"
          />
          <LogoName />
        </View>
      </View>
      <Text className="text-[#3a3842] font-[baloo2-extrabold] py-2 text-3xl">
        Sign up
      </Text>
      <View>
        <TextInputCustom
          textContentType="emailAddress"
          placeholder="Email"
          keyboardType="email-address"
          Icon={<MaterialIcons name="alternate-email" size={24} color="#777" />}
        />
        <TextInputCustom
          textContentType="name"
          placeholder="Full Name"
          keyboardType="default"
          Icon={<FontAwesome5 name="user" size={24} color="#777" />}
        />
        <TextInputCustom
          textContentType="telephoneNumber"
          placeholder="Mobile"
          keyboardType="number-pad"
          Icon={<MaterialIcons name="smartphone" size={24} color="#777" />}
        />
        <View className={"flex flex-row gap-1 items-center relative"}>
          <TextInputCustom
            className="bg-white px-5 pr-14 text-[#3a3842]  text-lg min-w-full py-5  rounded-lg"
            placeholder="Password"
            textContentType="password"
            secureTextEntry={!showPassword}
            // onChangeText={(text) => setPassword(text)}
            Icon={
              <MaterialCommunityIcons
                name="form-textbox-password"
                size={30}
                color={"#777"}
              />
            }
          />
          <View className="absolute right-0 h-full">
            <Pressable
              className="h-full w-16 px-5 justify-center items-center"
              onPress={handleShowPassword}
            >
              <FontAwesome
                name={showPassword ? "eye" : "eye-slash"}
                size={20}
                color="#8f8f8f"
              />
            </Pressable>
          </View>
        </View>
        <View className={"flex flex-row gap-1 items-center relative"}>
          <TextInputCustom
            className="bg-white px-5 pr-14 text-[#3a3842]  text-lg min-w-full py-5  rounded-lg"
            placeholder="Confirm Password"
            textContentType="password"
            secureTextEntry={!showPassword}
            // onChangeText={(text) => setPassword(text)}
            Icon={
              <MaterialCommunityIcons
                name="form-textbox-password"
                size={30}
                color={"#777"}
              />
            }
          />
          <View className="absolute right-0 h-full">
            <Pressable
              className="h-full w-16 px-5 justify-center items-center"
              onPress={handleShowPassword}
            >
              <FontAwesome
                name={showPassword ? "eye" : "eye-slash"}
                size={20}
                color="#8f8f8f"
              />
            </Pressable>
          </View>
        </View>
      </View>
      <View className="py-10">
        <Text className="font-[baloo2-medium] text-gray-600">
          By signing up, you've agree to our Terms & Conditions and Privacy
          Policy
        </Text>
      </View>
      <TouchableOpacity className="bg-[#EB5489] px-10 py-3 rounded-lg">
        <Text className="font-[baloo2-bold] text-white text-center text-xl">
          Sign up
        </Text>
      </TouchableOpacity>
      <View className="py-5 flex-row items-center justify-center">
        <Text className="font-[baloo2-medium]  text-gray-600">
          Already a member?{"  "}
        </Text>
        <TouchableOpacity
          className=" py-4 px-2"
          onPress={() => navigation.navigate("Login")}
        >
          <Text className="text-sky-700 font-[baloo2-bold]">Login</Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
};

export default Register;
