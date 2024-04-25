import { Container, Title } from "@/components";
import HealthDataTable from "@/components/HealthTable";
import { Stack } from "expo-router";
import { View, Text, Linking, TouchableOpacity } from "react-native";

const onlineTools = [
  { url: "https://massage-sport.ru/sf_36/", desc: "онлайн калькулятор КЖ" },
  {
    url: "https://psytests.org/result?v=depA2TP",
    desc: "онлайн депрессия Бека",
  },
  {
    url: "https://onlinetestpad.com/ru/test/714-test-issledovanie-trevozhnosti-oprosnik-spilbergera",
    desc: "тревожность онлайн",
  },
  {
    url: "https://psytests.org/result?v=kltK1RTrJ6",
    desc: "приверженность онлайн",
  },
];
const AnketaScreen = () => {
  const handleOpenYoutube = (link: string) => {
    Linking.openURL(link);
  };
  return (
    <Container>
      <Stack.Screen options={{ title: "Анкета:" }} />
      <Title>
        Тесты для самоконтроля через стандартизированные опросники:{" "}
      </Title>
      <View style={{ gap: 10 }}>
        {onlineTools.map((v, idx) => (
          <TouchableOpacity key={idx} onPress={() => handleOpenYoutube(v.url)}>
            <Text>
              {idx + 1}.{v.desc}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <HealthDataTable />
    </Container>
  );
};
export default AnketaScreen;
