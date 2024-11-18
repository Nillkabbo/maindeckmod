import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Text, TextInput, Button, Alert, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from 'expo-router';

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const router = useRouter();

  const handleSignUp = async () => {
    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match");
      return;
    }

    try {
      const response = await fetch("https://your-api-endpoint.com/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Handle successful sign-up
        Alert.alert("Success", "Signed up successfully!");
      } else {
        // Handle sign-up error
        Alert.alert("Error", data.message || "Sign-up failed");
      }
    } catch (error) {
      Alert.alert("Error", "An error occurred. Please try again.");
    }
  };

  return (
    <SafeAreaView className="flex-1 justify-center items-center p-4">
      <Text className="text-black text-center text-2xl mb-4">Sign Up</Text>
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
      <TextInput
        className="w-full p-2 border border-gray-300 rounded mb-4"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />
      <Button title="Sign Up" onPress={handleSignUp} />
      <TouchableOpacity onPress={() => router.replace('/sign-in')}>
        <Text className="text-blue-500 mt-4">Already have an account? Sign In</Text>
      </TouchableOpacity>
      <StatusBar style="dark" />
    </SafeAreaView>
  );
};

export default SignUp;
