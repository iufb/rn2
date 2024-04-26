import React, { useEffect, useState } from "react";
import { View, FlatList, Text, StyleSheet, RefreshControl } from "react-native";

import Storage from "expo-storage";
// Sample health data
const data = [
  {
    date: "2024-04-22",
    painIntensity: 8,
    vomiting: true,
    nausea: false,
    abdominalBloating: true,
    stool: "не регулярно",
    bloodPressure: { systolic: 120, diastolic: 80, pulse: 70 },
  },
  {
    date: "2024-04-23",
    painIntensity: 6,
    vomiting: false,
    nausea: true,
    abdominalBloating: false,
    stool: "регулярно",
    bloodPressure: { systolic: 130, diastolic: 85, pulse: 75 },
  },
  // Add more data as needed
];

const HealthDataTable = () => {
  const [healthData, setHealthData] = useState<typeof data>([]);
  const getVal = async () => {
    const data = JSON.parse((await Storage.getItem({ key: "health" })) || "");
    console.log(data);

    if (data) {
      setHealthData(data);
    }
  };
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = () => {
    setRefreshing(true);
    getVal();
    setRefreshing(false);
  };
  useEffect(() => {
    getVal();
  }, []);

  const renderItem = ({ item }: { item: (typeof data)[0] }) => (
    <View style={styles.row}>
      <Text style={styles.cell}>{item.date}</Text>
      <Text style={styles.cell}>{item.painIntensity}</Text>
      <Text style={styles.cell}>{item.vomiting ? "Да" : "Нет"}</Text>
      <Text style={styles.cell}>{item.nausea ? "Да" : "Нет"}</Text>
      <Text style={styles.cell}>{item.abdominalBloating ? "Да" : "Нет"}</Text>
      <Text style={styles.cell}>{item.stool}</Text>
      <Text style={styles.cell}>{item.bloodPressure.systolic}</Text>
      <Text style={styles.cell}>{item.bloodPressure.diastolic}</Text>
      <Text style={styles.cell}>{item.bloodPressure.pulse}</Text>
    </View>
  );

  return (
    <FlatList
      data={healthData}
      renderItem={renderItem}
      keyExtractor={(item) => item.date}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      ListHeaderComponent={() => (
        <View style={styles.headerRow}>
          <Text style={styles.headerCell}>Дата</Text>
          <Text style={styles.headerCell}>Боль</Text>
          <Text style={styles.headerCell}>Рвота</Text>
          <Text style={styles.headerCell}>Тошнота</Text>
          <Text style={styles.headerCell}>Вздутие живота</Text>
          <Text style={styles.headerCell}>Стул после еды</Text>
          <Text style={styles.headerCell}>Давление (Systolic)</Text>
          <Text style={styles.headerCell}>Давление (Diastolic)</Text>
          <Text style={styles.headerCell}>Пульс</Text>
        </View>
      )}
    />
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
