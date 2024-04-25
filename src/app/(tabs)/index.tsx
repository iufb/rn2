import { Container } from "@/components";
import { Stack } from "expo-router";
import { Image, View } from "react-native";
export default function HomeScreen() {
  return (
    <View>
      <Stack.Screen options={{ title: "PANCREAS", headerBackVisible: false }} />
      <Container
        style={{
          justifyContent: "center",
          alignItems: "center",
          paddingTop: 200,
        }}
      >
        <Image
          source={{
            uri: "https://newacropolis.org.ua/uploads/production/ckeditor/picture/data/97e/e91/18-/97ee9118-2189-4d96-9a1a-e24971743934/content.png",
          }}
          width={200}
          height={200}
          style={{ borderRadius: 100 }}
        />
      </Container>
    </View>
  );
}
