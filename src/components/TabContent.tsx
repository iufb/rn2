import { ReactNode } from "react";
import { View, ViewProps } from "react-native";
interface ContainerProps extends ViewProps {
  left: ReactNode;
  right: ReactNode;
}
export const TabContent = ({
  left,
  right,
  style,
  ...props
}: ContainerProps) => {
  return (
    <View
      {...props}
      style={[
        {
          flexDirection: "row",
          flexGrow: 1,
        },
        style,
      ]}
    >
      <View style={{ flex: 1, alignSelf: "center" }}>{left}</View>
      <View style={{ height: "100%", width: 1, backgroundColor: "black" }} />
      <View
        style={{
          flex: 1,
          alignSelf: "center",
          marginLeft: 20,
        }}
      >
        {right}
      </View>
    </View>
  );
};
