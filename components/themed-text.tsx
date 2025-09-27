import { Colors } from "@/constants/theme";
import { StyleSheet, Text, TextStyle } from "react-native";

export type ThemedTextProps = {
  children: string | string[];
  style?: TextStyle;
  type?: "default" | "title" | "defaultSemiBold" | "subtitle" | "link";
};

export function ThemedText({
  style,
  type = "default",
  ...rest
}: ThemedTextProps) {
  return (
    <Text
      style={[
        { color: Colors.text },
        type === "default" ? styles.default : undefined,
        type === "title" ? styles.title : undefined,
        type === "subtitle" ? styles.subtitle : undefined,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: 19,
    fontFamily: "Lora_400Regular",
  },
  title: {
    fontSize: 48,
    fontFamily: "Lora_700Bold",
  },
  subtitle: {
    fontSize: 36,
    fontFamily: "Lora_500Medium_Italic",
  },
});
