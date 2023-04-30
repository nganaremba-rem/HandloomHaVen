import {
  FontAwesome,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import React, { useEffect, useRef, useState } from "react";
import {
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import * as Animatable from "react-native-animatable";
import Container from "../components/Container";
import LogoName from "../components/LogoName";
import SignInWithGoogle from "../components/SignInWithGoogle";
import TextInputCustom from "../components/TextInputCustom";

export default function Home({ navigation }) {
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () =>
    setShowPassword((currentState) => !currentState);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
  const emailRef = useRef();
  const passwordRef = useRef();
  const submitRef = useRef();

  useEffect(() => {
    if (email.trim() === "" || password.trim() === "")
      setIsSubmitDisabled(true);
    else setIsSubmitDisabled(false);
  }, [email, password]);

  const handleSubmit = () => {
    if (email.trim() === "" || password.trim() === "") return;
    const data = {
      email,
      password,
    };

    console.log(data);
  };

  const DynamicButton = isSubmitDisabled
    ? TouchableWithoutFeedback
    : TouchableOpacity;

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

  return (
    <Container>
      {/* Main */}
      <View className="items-center">
        <View className="justify-center items-center py-7 max-w-xs overflow-hidden">
          <Animatable.Image
            animation={bounce}
            duration={1000}
            iterationCount={"infinite"}
            easing={"ease-in-back"}
            source={require("../assets/logos/illustrationLogin.png")}
            className="w-40 h-40"
          />
          <LogoName />
          <Text className="text-[#3a3842] font-[baloo2-medium] py-2 text-center text-xl">
            Welcome back you've been missed!
          </Text>
        </View>

        {/* Input */}
        <View className="items-center space-y-5">
          <TextInputCustom
            Icon={
              <MaterialIcons name="alternate-email" size={24} color={"#777"} />
            }
            textContentType="emailAddress"
            keyboardType="email-address"
            ref={emailRef}
            onSubmitEditing={() => passwordRef.current.focus()}
            onChangeText={(text) => setEmail(text)}
            placeholder="Email"
            className="bg-white text-[#3a3842]  text-lg min-w-full py-5 px-5 rounded-lg"
          />
          <View className={"flex flex-row gap-1 items-center relative"}>
            <TextInputCustom
              className="bg-white px-5 pr-14 text-[#3a3842]  text-lg min-w-full py-5  rounded-lg"
              placeholder="Password"
              textContentType="password"
              ref={passwordRef}
              secureTextEntry={!showPassword}
              onSubmitEditing={() => submitRef.current.focus()}
              onChangeText={(text) => setPassword(text)}
              Icon={
                <MaterialCommunityIcons
                  name="form-textbox-password"
                  size={30}
                  color={"#777"}
                />
              }
            />

            {/* <TextInput
              ref={passwordRef}
              textContentType="password"
              secureTextEntry={!showPassword}
              onSubmitEditing={() => submitRef.current.focus()}
              onChangeText={(text) => setPassword(text)}
              placeholder="Password"
              className="bg-white px-5 pr-14 text-[#3a3842]  text-lg min-w-full py-5  rounded-lg"
            /> */}
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
          <View className="self-end px-4">
            <TouchableOpacity>
              <Text className={"text-[#898791] font-[baloo2-medium]"}>
                Forgot Password?
              </Text>
            </TouchableOpacity>
          </View>
          <View
            className={`min-w-full rounded-xl ${
              isSubmitDisabled ? "bg-[#f2bccf]" : "bg-[#EB5489]"
            }  px-10 py-5`}
          >
            <DynamicButton ref={submitRef} onPress={handleSubmit}>
              <Text className="text-center font-[baloo2-bold] text-white text-xl tracking-wider">
                Sign in
              </Text>
            </DynamicButton>
          </View>
        </View>
        {/* --Input-- */}
        {/* Other sign in */}
        <View className="relative flex-row justify-center items-center mt-10">
          <View className="h-[1px] bg-[#c0c0c0] min-w-full"></View>
          <View className="absolute bg-[#F3EEF2] px-2">
            <Text className="text-[#898791] font-medium font-[lobster]">
              or continue with
            </Text>
          </View>
        </View>
        {/* Social Icons */}
        <SignInWithGoogle />
        <View className="flex-row items-center py-10">
          <Text className="text-[#656565] font-[baloo2-medium]">
            Not a member? {"  "}
          </Text>
          <View>
            <TouchableOpacity onPress={() => navigation.navigate("Register")}>
              <Text className="font-[baloo2-bold] text-sky-800 font-medium">
                Register Now
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Container>
  );
}
