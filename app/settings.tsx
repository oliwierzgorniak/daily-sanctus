import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Link } from "expo-router";

export default function HomeScreen() {
  return (
    <ThemedView>
      <ThemedText type="title">Settings page</ThemedText>
      <Link href="/">Back to menu</Link>
    </ThemedView>
  );
}
