import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Link } from "expo-router";

export default function HomeScreen() {
  return (
    <ThemedView>
      <ThemedText type="title">Menu page</ThemedText>
      <Link href={"/settings"}>Settings</Link>
      {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
        <Link key={i} href={`/saints/${i}`}>
          Saint {i}
        </Link>
      ))}
    </ThemedView>
  );
}
