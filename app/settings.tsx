import { ThemedText } from "@/components/ThemedText";
import { Link } from "expo-router";
import { View } from "react-native";

export default function HomeScreen() {
  return (
    <View>
      <ThemedText type="title">Settings page</ThemedText>
      <Link href="/">Back to menu</Link>
    </View>
  );
}
