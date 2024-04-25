import { Container, TabContent } from "@/components";
import { Link, Stack } from "expo-router";
const InfoScreen = () => {
  return (
    <Container>
      <Stack.Screen options={{ title: "Инфо:" }} />
      <TabContent
        left={<Link href={"/info/about"}>Понятие о панкреатите</Link>}
        right={<Link href={"/info/res"}>Лекции специалистов</Link>}
      />
    </Container>
  );
};
export default InfoScreen;
