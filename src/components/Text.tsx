import { PropsWithChildren } from "react";
import { StyleSheet, Text, View } from "react-native";

export const Title = ({ children }: PropsWithChildren) => (
  <Text style={styles.title}>{children}</Text>
);
export const Subtitle = ({ children }: PropsWithChildren) => (
  <Text style={styles.subtitle}>{children}</Text>
);
export const ListItem = ({ content }: { content: string }) => {
  return (
    <View style={styles.listItem}>
      <Text style={styles.bullet}>&#8226;</Text>
      <Text>{content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 10 },
  subtitle: { fontSize: 20, fontWeight: "bold" },
  listItem: {
    paddingLeft: 5,
    marginBottom: 5,
    flexDirection: "row", // To align bullet point and text horizontally
    alignItems: "center", // To center items vertically
  },
  bullet: {
    fontSize: 20,
    marginRight: 5,
  },
});
