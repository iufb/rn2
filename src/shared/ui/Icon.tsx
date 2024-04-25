import { FontAwesome } from "@expo/vector-icons";
import { ComponentProps } from "react";

interface IconProps extends ComponentProps<typeof FontAwesome> {}
export function Icon({ name, size, ...props }: IconProps) {
  return <FontAwesome name={name} size={size} {...props} />;
}
