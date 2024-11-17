import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Profile = () => {
  return (
    <SafeAreaView className="flex-1 justify-center items-center">
      <Text className="text-black text-center text-2xl">Profile Page</Text>
      <StatusBar style="dark" />
    </SafeAreaView>
  );
};
export default Profile;
