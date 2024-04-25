import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import { forwardRef } from "react";

type ButtonProps = {
  text: string;
  loading?: boolean;
  className?: Record<string, string | number>;
} & React.ComponentPropsWithoutRef<typeof Pressable>;

export const Button = forwardRef<View | null, ButtonProps>(
  ({ text, disabled, className, loading, ...pressableProps }, ref) => {
    const { fontScale } = useWindowDimensions();
    const styles = makeStyles(fontScale);
    return (
      <Pressable
        ref={ref}
        {...pressableProps}
        style={{
          ...styles.container,
          ...className,

          backgroundColor: disabled ? "gray" : "black",
        }}
        disabled={disabled}
      >
        {loading ? (
          <ActivityIndicator size={"small"} color={"white"} />
        ) : (
          <Text style={styles.text}>{text}</Text>
        )}
      </Pressable>
    );
  },
);

const makeStyles = (fontScale: number) =>
  StyleSheet.create({
    container: {
      padding: 10,
      alignItems: "center",
      borderRadius: 10,
    },
    text: {
      fontSize: 16 / fontScale,
      fontWeight: "600",
      color: "white",
    },
    disabled: {
      opacity: 50,
    },
  });
