import { Container } from "@/components";
import { Stack } from "expo-router";
import { Linking, Text, TouchableOpacity, View } from "react-native";
import { Divider } from "react-native-paper";

const youtubeLinks = [
  {
    url: "https://www.youtube.com/watch?v=3W04nEg9Ux4",
    desc: "№5 диета. Емдік диета. Түскі ас. Қазақша рецепт.",
  },
  {
    url: "https://www.youtube.com/watch?v=ilKEEe7AsmU&t=49s",
    desc: "Панкреатит емделе ме? І «Теледәрігер»",
  },
  {
    url: "https://www.youtube.com/watch?v=5F_yHiXIdR8",
    desc: "Ұйқы безі қабынуы, панкреатиттегі бір күнгі ас мәзірім. Диеталық тағамдар",
  },
  {
    url: "https://www.youtube.com/watch?v=Xn5tlHQwXz0",
    desc: "Diet for the digestive system. Basic principles. Permitted and prohibited products.",
  },
  {
    url: "https://www.youtube.com/watch?v=Cim7EX1I06o",
    desc: "ДИЕТА СТОЛ №5. Вкусное и простое МЕНЮ НА КАЖДЫЙ ДЕНЬ!",
  },
  {
    url: "https://www.youtube.com/watch?v=TrQ3dyH0KHE",
    desc: "'Школа ХХ и ХП' Питание при холецистите и панкреатите (22.12.20)",
  },
  {
    url: "https://www.youtube.com/watch?v=hISFGPGAP3c",
    desc: "День № 1. Стол 5, диета. Меню на каждый день. Рецепты блюд.",
  },
];

const ResScreen = () => {
  const handleOpenYoutube = (link: string) => {
    Linking.openURL(link);
  };
  return (
    <Container>
      <Stack.Screen options={{ title: "Диета:" }} />
      <Text style={{ fontSize: 24 }}>Лекции:</Text>
      <View style={{ gap: 10 }}>
        {youtubeLinks.map((v, idx) => (
          <TouchableOpacity key={idx} onPress={() => handleOpenYoutube(v.url)}>
            <Text>
              {idx + 1}.{v.desc}
            </Text>
            <Divider style={{ marginBottom: 5 }} />
          </TouchableOpacity>
        ))}
      </View>
    </Container>
  );
};
export default ResScreen;
