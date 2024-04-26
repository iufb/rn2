import { Container, TabContent } from "@/components";
import { Button } from "@/shared/ui";
import { Link, Stack, router } from "expo-router";

export default function DietScreen() {
  return (
    <Container>
      <Stack.Screen options={{ title: "Диета:" }} />
      <TabContent
        left={
          <Button
            text="Понятие о диете"
            onPress={() => router.push("/diet/about")}
          />
        }
        right={
          <Button
            text="Лекции специалистов"
            onPress={() => router.push("/diet/res")}
          />
        }
      />
    </Container>
  );
}
