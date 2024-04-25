import { ReactNode } from "react";
import { View, ViewProps } from "react-native";
interface ContainerProps extends ViewProps {
  children: ReactNode;
}
export const Container = ({ children, style, ...props }: ContainerProps) => {
  return (
    <View
      {...props}
      style={[
        {
          flexGrow: 1,
          padding: 10,
        },
        style,
      ]}
    >
      {children}
    </View>
  );
};
