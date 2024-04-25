import { Container } from "@/components";
import { Stack } from "expo-router";
import { Linking, Text, TouchableOpacity, View } from "react-native";
const videos = [
  {
    url: "https://www.youtube.com/watch?v=ilKEEe7AsmU",
    desc: "Панкреатит емделе ме? І «Теледәрігер»",
  },
  {
    url: "https://www.youtube.com/watch?v=EumM1443K3A",
    desc: "«Теледәрігер». Панкреатитті емдемесе...",
  },
  {
    url: "https://www.youtube.com/watch?v=237GaXdPgZs",
    desc: "ҰЙҚЫ БЕЗІ ауруын МЫНА әдіс ЕМДЕЙДІ. ҰЙҚЫ БЕЗІ АУРУЛАРЫНЫҢ БЕЛГІЛЕРІ...",
  },
  {
    url: "https://www.youtube.com/watch?v=6NOkw9qo6Z0",
    desc: "Программа 'Диагноз' - Жіті панкреонекроз",
  },
  {
    url: "https://www.youtube.com/watch?v=E5lJYTGR3e8",
    desc: "Хронический и острый панкреатит. Симптомы, причины и лечение.",
  },
  {
    url: "https://www.youtube.com/watch?v=ImrdJs6s-JI",
    desc: 'Доктор знает! Панкреатит | Телеканал "Открытый мир. Здоровье"',
  },
  {
    url: "https://www.youtube.com/watch?v=sLsxMfkM_F4",
    desc: "Вы это не перевариваете! Хронический панкреатит",
  },
];
const ResScreen = () => {
  const handleOpenYoutube = (link: string) => {
    Linking.openURL(link);
  };
  return (
    <Container>
      <Stack.Screen options={{ title: "Инфо:" }} />
      <Text style={{ fontSize: 24 }}>Лекции:</Text>
      <View style={{ gap: 10 }}>
        {videos.map((v, idx) => (
          <TouchableOpacity key={idx} onPress={() => handleOpenYoutube(v.url)}>
            <Text>
              {idx + 1}.{v.desc}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </Container>
  );
};
export default ResScreen;
