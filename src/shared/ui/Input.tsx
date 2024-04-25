import { ComponentPropsWithoutRef } from "react";
import {
  TextInput,
  Text,
  StyleSheet,
  View,
  useWindowDimensions,
} from "react-native";

interface InputProps extends ComponentPropsWithoutRef<typeof TextInput> {
  label: string;
}
export const Input = ({ style, label, ...props }: InputProps) => {
  const { fontScale } = useWindowDimensions();
  const styles = makeStyles(fontScale);
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={[style, styles.input]} {...props} />
    </View>
  );
};

const makeStyles = (fontScale: number) =>
  StyleSheet.create({
    label: {
      color: "gray",
      fontSize: 20 / fontScale,
    },
    input: {
      fontSize: 20 / fontScale,
      borderWidth: 1,
      borderColor: "gray",
      padding: 10,
      marginTop: 5,
      marginBottom: 20,
      backgroundColor: "white",
      borderRadius: 5,
    },
  });
