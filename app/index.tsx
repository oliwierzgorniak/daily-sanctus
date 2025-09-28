import LinkButton from "@/components/LinkButton";
import { ThemedText } from "@/components/ThemedText";
import { Colors } from "@/constants/theme";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ImageBackground } from "expo-image";
import { useRouter } from "expo-router";
import { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

export default function HomeScreen() {
  const insets = useSafeAreaInsets();
  const router = useRouter();

  useEffect(() => {
    async function handleModal() {
      const virtues = await AsyncStorage.getItem("virtues");
      if (virtues === null) {
        router.push("/modal");
      }
    }
    handleModal();
  }, [router]);

  return (
    <SafeAreaProvider>
      <ImageBackground
        source={require("../assets/images/home-background.jpg")}
        style={styles.backgroundImage}
        contentFit="cover"
      >
        <View style={styles.container}>
          <ThemedText
            type="title"
            style={{ ...styles.title, marginTop: insets.top + 50 }}
          >
            Daily Sanctus
          </ThemedText>
          <View
            style={{
              ...styles.buttonsContainer,
              marginBottom: insets.bottom + 35,
            }}
          >
            <LinkButton
              href={"./saints/0"}
              text="Suggest new"
              doesOccupyFullSpace
              isSuggestNew
            />
            <LinkButton
              href="./modal"
              text="Chosen virtues"
              doesOccupyFullSpace
            />
            <LinkButton href="./all" text="All saints" doesOccupyFullSpace />
          </View>
        </View>
      </ImageBackground>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    backgroundColor: Colors.headerBackground,
  },
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    gap: 30,
  },
  title: { color: Colors.text },
  buttonsContainer: {
    gap: 8,
    paddingHorizontal: 40,
  },
});
