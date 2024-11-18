import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Text, TextInput, Button, Alert, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from 'expo-router';

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSignIn = async () => {
    try {
      const response = await fetch("https://your-api-endpoint.com/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Handle successful sign-in
        Alert.alert("Success", "Signed in successfully!");
        router.push('/welcome');
      } else {
        // Handle sign-in error
        Alert.alert("Error", data.message || "Sign-in failed");
      }
    } catch (error) {
      Alert.alert("Error", "An error occurred. Please try again.");
    }
  };

  return (
    <SafeAreaView className="flex-1 justify-center items-center p-4">
      <Text className="text-black text-center text-2xl mb-4">Sign In</Text>
      <TextInput
        className="w-full p-2 border border-gray-300 rounded mb-4"
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        className="w-full p-2 border border-gray-300 rounded mb-4"
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Sign In" onPress={handleSignIn} />
      <TouchableOpacity onPress={() => router.replace('/sign-up')}>
        <Text className="text-blue-500 mt-4">Don't have an account? Sign Up</Text>
      </TouchableOpacity>
      <StatusBar style="dark" />
    </SafeAreaView>
  );
};

export default SignIn;
