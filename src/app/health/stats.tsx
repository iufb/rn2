import { Container } from "@/components";
import HealthDataTable from "@/components/HealthTable";
import { Stack } from "expo-router";
import { Title } from "react-native-paper";

const Stats = () => {
  return (
    <Container>
      <Stack.Screen options={{ title: "Здоровье:" }} />

      <Title style={{ color: "black" }}>Статистика:</Title>
      <HealthDataTable />
    </Container>
  );
};
export default Stats;
