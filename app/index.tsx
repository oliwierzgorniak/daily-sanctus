import MyButton from "@/components/MyButton";
import { ThemedText } from "@/components/themed-text";
import { Colors } from "@/constants/theme";
import { StyleSheet, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ThemedText type="title" style={styles.title}>
        Daily Sanctus
      </ThemedText>
      <MyButton href="./all" text="All saints" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.headerBackground,
    justifyContent: "center",
    alignItems: "center",
    gap: 30,
  },
  title: { color: Colors.text },
});
