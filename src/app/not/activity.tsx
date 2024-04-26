import { Container } from "@/components";
import { Stack } from "expo-router";

const InfoScreen = () => {
  return (
    <Container>
      <Stack.Screen options={{ title: "Уведомления:" }} />
    </Container>
  );
};
export default InfoScreen;
