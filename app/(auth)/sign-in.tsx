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
import { login } from "../api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StatusBar } from "expo-status-bar";
const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const validateEmail = (email: string) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleSignIn = async () => {
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
      const parsedResponse = await login(email, password);
      if (parsedResponse.status === 200) {
        const { token } = parsedResponse.results;
        await AsyncStorage.setItem("token", JSON.stringify({ token }));
        router.replace("/(tabs)"); // Updated to use drawer layout
      } else {
        console.error("Login failed:", parsedResponse.message);
      }
    } catch (error) {
      if (Platform.OS === "web") {
        alert((error as Error)?.message);
      } else {
        Alert.alert("Error", (error as Error)?.message);
      }
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <Text style={styles.text}>Sign In</Text>
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
      <Button title="Sign In" onPress={handleSignIn} />
      <Link
        href="/(auth)/sign-up"
        style={styles.link}
        onPress={(e) => {
          e.preventDefault();
          router.replace("/(auth)/sign-up");
        }}
      >
        <Text style={styles.linkText}>Don't have an account? Sign Up</Text>
      </Link>
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

export default SignIn;
