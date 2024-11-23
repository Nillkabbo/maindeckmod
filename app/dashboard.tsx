import React, { useEffect, useState, ReactNode } from "react";
import { Text, View, StyleSheet, Button, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { fetchData } from "./api";
import DashboardView from "@/components/dashbord_view";

const Dashboard = () => {
  const [data, setData] = useState<any | null>(null);
  const router = useRouter();

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetchData("report/last_week");
        if (result.status === 200) {
          console.log("Data:", result.results);
          setData(result.results);
        }
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };

    getData();
  }, []);

  const handleLogout = async () => {
    await AsyncStorage.removeItem("token");
    router.push("/(auth)/sign-in");
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.text}>Welcome to the Dashboard</Text>
        <Text style={styles.header}>Overview</Text>
        {data ? (
          <DashboardView data={data} />
        ) : (
          <Text style={styles.text}>Loading data...</Text>
        )}
        <Button title="Logout" onPress={handleLogout} />
      </ScrollView>
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
  header: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },
  scrollContainer: {
    paddingVertical: 20,
  },
});

export default Dashboard;
