import { Container, TabContent } from "@/components";
import { Button } from "@/shared/ui";
import { Link, Stack, router } from "expo-router";
const InfoScreen = () => {
  return (
    <Container>
      <Stack.Screen options={{ title: "Инфо:" }} />
      <TabContent
        left={
          <Button
            text="Понятие о панкреатите"
            onPress={() => router.push("/info/about")}
          />
        }
        right={
          <Button
            text="Лекции специалистов"
            onPress={() => router.push("/info/res")}
          />
        }
      />
    </Container>
  );
};
export default InfoScreen;
