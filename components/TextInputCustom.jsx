import { View, Text, TextInput } from "react-native";
import React, { forwardRef } from "react";

const TextInputCustom = forwardRef(
  (
    {
      className = "",
      Icon,
      placeholder = "",
      textContentType = "",
      secureTextEntry = false,
      keyboardType = "default",
      onSubmitEditing = () => {},
      onChangeText = () => {},
    },
    ref
  ) => {
    return (
      <View className="flex-row items-center  rounded-lg my-1">
        <View className="px-3">{Icon}</View>
        <TextInput
          ref={ref}
          placeholderTextColor={"#888"}
          className={`px-5 pr-14  font-[baloo2-medium]  text-[#3a3842] border-b-2 border-b-zinc-200 text-lg flex-1  py-3 ${className}`}
          placeholder={placeholder}
          textContentType={textContentType}
          secureTextEntry={secureTextEntry}
          onSubmitEditing={onSubmitEditing}
          onChangeText={onChangeText}
          keyboardType={keyboardType}
        />
      </View>
    );
  }
);

export default TextInputCustom;
