import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, Button, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { fetchData } from "../api";
import DashboardView from "@/components/dashbord_view";
import { StatusBar } from "expo-status-bar";

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
      <StatusBar style="dark" />
      {data ? (
        <View style={styles.dashboardViewContainer}>
          <DashboardView data={data} />
        </View>
      ) : (
        <Text style={styles.text}>Loading data...</Text>
      )}
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#212121",
    padding: 20,
    width: "100%",
  },
  text: {
    width: "100%",
    color: "#fff",
    fontSize: 24,
    marginBottom: 20,
    textAlign: "center",
  },
  dashboardViewContainer: {
    height: 400,
    width: "100%",
  },
});

export default Dashboard;
