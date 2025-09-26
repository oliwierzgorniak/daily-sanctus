import MyButton from "@/components/MyButton";
import { ThemedText } from "@/components/themed-text";
import { Link } from "expo-router";
import { StyleSheet, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ThemedText type="title">Menu page</ThemedText>
      <Link href={"/settings"}>Settings</Link>
      <MyButton href="./all" text="All saints" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
