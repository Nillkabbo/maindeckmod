import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Welcome = () => {
  return (
    <SafeAreaView className="flex h-full items-center justify-between bg-white">
      <TouchableOpacity
        onPress={() => {
          router.replace("/(auth)/sign-up");
        }}
        className="w-full flex justify-end items-end p-5 bg-general-400"
      >
        <Text className="text-black text-md font-JakartaBold">Skip</Text>
        <View>
          <Text className="text-black text-center text-2xl font-JakartaBold">
            Welcome to Expo
          </Text>
          <Text className="text-black text-center text-md font-Jakarta">
            Let's get started
          </Text>
        </View>
      </TouchableOpacity>
      <StatusBar style="dark" />
    </SafeAreaView>
  );
};
export default Welcome;
