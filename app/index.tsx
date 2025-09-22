import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Link } from "expo-router";

export default function HomeScreen() {
  return (
    <ThemedView>
      <ThemedText type="title">Menu page</ThemedText>
      <Link href={"/settings"}>Settings</Link>
      <Link href={"/saints/1"}>Saint</Link>
    </ThemedView>
  );
}
