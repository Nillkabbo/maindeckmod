import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";

const DashboardView = ({ data }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.cardTitle}>
        Weekly Summary{" "}
        <Text style={{ fontSize: 10 }}>{data.subject.split("-")[1]}</Text>
      </Text>
      <View style={styles.card}>
        <View>
          <Text style={styles.title}>Net Sales</Text>
          <Text style={styles.title_large}>
            {"$ " + data.sales[0].net_sales}
          </Text>
        </View>
        <View>
          <Text>Net Sales</Text>
        </View>
      </View>
      <View style={styles.card}>
        <View>
          <Text style={styles.title}>Labour Cost</Text>
          <Text style={styles.title_large}>
            {"$ " + data.hourly_labor_cost[0].hourly_labor_cost}
          </Text>
        </View>
      </View>
      <View style={styles.card}>
        <View>
          <Text style={styles.title}>Guest Count</Text>
          <Text style={styles.title_large}>
            {data.guests_covers[0].guests_covers}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: "100%",
    backgroundColor: "#3b3b3b",
    borderRadius: 8,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
    marginBottom: 16,
    flex: 1, // Changed to flex: 1
  },
  card: {
    backgroundColor: "#717171",
    borderRadius: 8,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
    marginBottom: 16,
    flex: 1, // Changed to flex: 1
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  cardContent: {
    fontSize: 16,
    color: "#333",
  },
  title: {
    color: "#fff",
    fontSize: 16,
    marginBottom: 20,
  },
  title_large: {
    color: "#fff",
    fontSize: 24,
    marginBottom: 20,
  },
});

export default DashboardView;
