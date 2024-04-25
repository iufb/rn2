import { Container, TabContent } from "@/components";
import { Link, Stack } from "expo-router";

export default function DietScreen() {
  return (
    <Container>
      <Stack.Screen options={{ title: "Диета:" }} />
      <TabContent
        left={<Link href={"/diet/about"}>Понятие о диете</Link>}
        right={<Link href={"/diet/res"}>Лекции специалистов</Link>}
      />
    </Container>
  );
}
