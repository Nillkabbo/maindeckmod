import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  Platform,
  Alert,
} from "react-native";
import { Link, useRouter } from "expo-router";
import { login, register } from "../api";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const validateEmail = (email: string) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleSignUp = async () => {
    if (!email || !password) {
      if (Platform.OS === "web") {
        alert("Please fill in all fields.");
      } else {
        Alert.alert("Error", "Please fill in all fields.");
      }
      return;
    }
    if (!validateEmail(email)) {
      if (Platform.OS === "web") {
        alert("Please enter a valid email address.");
      } else {
        Alert.alert("Error", "Please enter a valid email address.");
      }
      return;
    }
    try {
      await register(email, password);
      router.replace("/dashboard");
    } catch (error) {
      if (Platform.OS === "web") {
        alert(error?.message);
      } else {
        Alert.alert("Error", error?.message);
      }
    }
    router.replace("/(auth)/sign-in");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sign Up</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#aaa"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#aaa"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Sign Up" onPress={handleSignUp} />
      <Text
        style={styles.linkText}
        onPress={() => router.replace("/(auth)/sign-in")}
      >
        Already have an account? Sign In
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  text: {
    color: "#fff",
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: "100%",
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#333",
    color: "#fff",
    borderRadius: 5,
  },
  link: {
    marginTop: 15,
  },
  linkText: {
    color: "#1e90ff",
  },
});

export default SignUp;
