import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";

const DashboardView = ({ data }) => {
  return (
    // <ScrollView style={styles.container}>
    //   <Text style={styles.header}>{data.subject}</Text>
    //   <Text style={styles.subHeader}>Sales</Text>
    //   {data.sales.map((sale, index) => (
    //     <View key={index} style={styles.section}>
    //       <Text>Net Sales: {sale.net_sales}</Text>
    //       <Text>SDLW Percentage: {sale.sdlw_percentage}%</Text>
    //       <Text>SDLW Value: {sale.sdlw_value}</Text>
    //       <Text>
    //         Four Week Avg Percentage: {sale.four_week_avg_percentage}%
    //       </Text>
    //       <Text>Four Week Avg Value: {sale.four_week_avg_value}</Text>
    //       <Text>
    //         Four Week Avg Increase: {sale.four_week_avg_increase ? "Yes" : "No"}
    //       </Text>
    //     </View>
    //   ))}
    //   <Text style={styles.subHeader}>Guests Covers</Text>
    //   {data.guests_covers.map((guest, index) => (
    //     <View key={index} style={styles.section}>
    //       <Text>Guests Covers: {guest.guests_covers}</Text>
    //       <Text>SDLW Percentage: {guest.sdlw_percentage}%</Text>
    //       <Text>SDLW Value: {guest.sdlw_value}</Text>
    //       <Text>
    //         Four Week Avg Percentage: {guest.four_week_avg_percentage}%
    //       </Text>
    //       <Text>Four Week Avg Value: {guest.four_week_avg_value}</Text>
    //       <Text>
    //         Four Week Avg Increase:{" "}
    //         {guest.four_week_avg_increase ? "Yes" : "No"}
    //       </Text>
    //     </View>
    //   ))}
    //   <Text style={styles.subHeader}>Guests Avg Spend</Text>
    //   {data.guests_avg_spend.map((spend, index) => (
    //     <View key={index} style={styles.section}>
    //       <Text>Avg Spend Guest: {spend.avg_spend_guest}</Text>
    //       <Text>SDLW Percentage: {spend.sdlw_percentage}%</Text>
    //       <Text>SDLW Value: {spend.sdlw_value}</Text>
    //       <Text>
    //         Four Week Avg Percentage: {spend.four_week_avg_percentage}%
    //       </Text>
    //       <Text>Four Week Avg Value: {spend.four_week_avg_value}</Text>
    //       <Text>
    //         Four Week Avg Increase:{" "}
    //         {spend.four_week_avg_increase ? "Yes" : "No"}
    //       </Text>
    //     </View>
    //   ))}
    //   <Text style={styles.subHeader}>Hourly Labor Cost</Text>
    //   {data.hourly_labor_cost.map((cost, index) => (
    //     <View key={index} style={styles.section}>
    //       <Text>Hourly Labor Cost: {cost.hourly_labor_cost}</Text>
    //       <Text>SDLW Percentage: {cost.sdlw_percentage}%</Text>
    //       <Text>SDLW Value: {cost.sdlw_value}</Text>
    //       <Text>
    //         Four Week Avg Percentage: {cost.four_week_avg_percentage}%
    //       </Text>
    //       <Text>Four Week Avg Value: {cost.four_week_avg_value}</Text>
    //       <Text>
    //         Four Week Avg Increase: {cost.four_week_avg_increase ? "Yes" : "No"}
    //       </Text>
    //     </View>
    //   ))}
    //   <Text style={styles.subHeader}>Hourly Labor Cost Percent of Net</Text>
    //   {data.hourly_labor_cost_percent_of_net.map(
    //     (percent: any, index: number) => (
    //       <View key={index} style={styles.section}>
    //         <Text>
    //           Hourly Labor Cost Percent of Net:{" "}
    //           {percent.hourly_labor_cost_percent_of_net}%
    //         </Text>
    //         <Text>SDLW Percentage: {percent.sdlw_percentage}%</Text>
    //         <Text>SDLW Value: {percent.sdlw_value}</Text>
    //         <Text>
    //           Four Week Avg Percentage: {percent.four_week_avg_percentage}%
    //         </Text>
    //         <Text>Four Week Avg Value: {percent.four_week_avg_value}</Text>
    //         <Text>
    //           Four Week Avg Increase:{" "}
    //           {percent.four_week_avg_increase ? "Yes" : "No"}
    //         </Text>
    //       </View>
    //     ),
    //   )}
    //   <Text style={styles.subHeader}>Sales Category Data</Text>
    //   {data.sales_category_data.map((category: any, index: number) => (
    //     <View key={index} style={styles.section}>
    //       <Text>Name: {category.name}</Text>
    //       <Text>Net Sales: {category.net_sales}</Text>
    //     </View>
    //   ))}
    // </ScrollView>

    <View style={styles.card}>
      <Text style={styles.cardTitle}>Card Title</Text>
      <Text style={styles.cardContent}>This is the content of the card.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  subHeader: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 16,
    marginBottom: 8,
  },
  section: {
    marginBottom: 16,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  cardContent: {
    fontSize: 16,
    color: "#333",
  },
});

export default DashboardView;
