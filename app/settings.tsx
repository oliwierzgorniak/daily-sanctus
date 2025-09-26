import { ThemedText } from "@/components/themed-text";
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
