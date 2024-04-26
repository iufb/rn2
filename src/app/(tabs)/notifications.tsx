import { Container } from "@/components";
import { Stack, router } from "expo-router";
import { View } from "react-native";
import { Button } from "react-native-paper";

export default function NotificationsScreen() {
  return (
    <Container style={{ alignItems: "center", justifyContent: "center" }}>
      <Stack.Screen options={{ title: "Уведомления:" }} />
      <View
        style={{
          gap: 15,
          backgroundColor: "white",
          padding: 40,
          borderRadius: 20,
        }}
      >
        <Button
          onPress={() => router.push("/not/med")}
          mode="contained"
          icon="flask"
        >
          Лекарства
        </Button>
        <Button
          onPress={() => router.push("/not/food")}
          mode="contained"
          icon="apple"
        >
          Питание
        </Button>
        <Button
          onPress={() => router.push("/not/activity")}
          mode="contained"
          icon="run"
        >
          Физическая активность
        </Button>
        <Button
          onPress={() => router.push("/not/graph")}
          mode="contained"
          icon="chart-bar"
        >
          График (план)
        </Button>
      </View>
    </Container>
  );
}
