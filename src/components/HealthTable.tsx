import React from "react";
import { View, FlatList, Text, StyleSheet, ScrollView } from "react-native";

// Sample health data
const healthData = [
  {
    date: "2024-04-22",
    painIntensity: 8,
    vomiting: true,
    nausea: false,
    abdominalBloating: true,
    stool: "irregular",
    bloodPressure: { systolic: 120, diastolic: 80, pulse: 70 },
  },
  {
    date: "2024-04-23",
    painIntensity: 6,
    vomiting: false,
    nausea: true,
    abdominalBloating: false,
    stool: "regular",
    bloodPressure: { systolic: 130, diastolic: 85, pulse: 75 },
  },
  // Add more data here
  {
    date: "2024-04-24",
    painIntensity: 7,
    vomiting: false,
    nausea: true,
    abdominalBloating: true,
    stool: "irregular",
    bloodPressure: { systolic: 125, diastolic: 82, pulse: 72 },
  },
  {
    date: "2024-04-25",
    painIntensity: 5,
    vomiting: true,
    nausea: false,
    abdominalBloating: false,
    stool: "regular",
    bloodPressure: { systolic: 128, diastolic: 88, pulse: 68 },
  },
  // Add more data as needed
];

const HealthDataTable = () => {
  const renderItem = ({ item }: { item: (typeof healthData)[0] }) => (
    <View style={styles.row}>
      <Text style={styles.cell}>{item.date}</Text>
      <Text style={styles.cell}>{item.painIntensity}</Text>
      <Text style={styles.cell}>{item.vomiting ? "Yes" : "No"}</Text>
      <Text style={styles.cell}>{item.nausea ? "Yes" : "No"}</Text>
      <Text style={styles.cell}>{item.abdominalBloating ? "Yes" : "No"}</Text>
      <Text style={styles.cell}>{item.stool}</Text>
      <Text style={styles.cell}>{item.bloodPressure.systolic}</Text>
      <Text style={styles.cell}>{item.bloodPressure.diastolic}</Text>
      <Text style={styles.cell}>{item.bloodPressure.pulse}</Text>
    </View>
  );

  return (
    <ScrollView horizontal>
      <View>
        <View style={styles.headerRow}>
          <Text style={styles.headerCell}>Date</Text>
          <Text style={styles.headerCell}>Pain Intensity</Text>
          <Text style={styles.headerCell}>Vomiting</Text>
          <Text style={styles.headerCell}>Nausea</Text>
          <Text style={styles.headerCell}>Abdominal Bloating</Text>
          <Text style={styles.headerCell}>Stool after Eating</Text>
          <Text style={styles.headerCell}>Blood Pressure (Systolic)</Text>
          <Text style={styles.headerCell}>Blood Pressure (Diastolic)</Text>
          <Text style={styles.headerCell}>Pulse</Text>
        </View>
        <FlatList
          data={healthData}
          renderItem={renderItem}
          keyExtractor={(item) => item.date}
          horizontal // Enable horizontal scrolling
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingVertical: 10,
  },
  headerRow: {
    flexDirection: "row",
    borderBottomWidth: 2,
    borderBottomColor: "#000",
    paddingVertical: 10,
  },
  cell: {
    flex: 1,
    textAlign: "center",
    paddingVertical: 5,
  },
  headerCell: {
    flex: 1,
    textAlign: "center",
    fontWeight: "bold",
    paddingVertical: 5,
  },
});

export default HealthDataTable;
