import MyButton from "@/components/MyButton";
import { ThemedText } from "@/components/themed-text";
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
  }, []);

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
            {/* <MyButton href="./all" text="Your saint" doesOccupyFullSpace /> */}
            <MyButton
              href={"./saints/0"}
              text="Suggest new"
              doesOccupyFullSpace
              isSuggestNew
            />
            <MyButton href="./all" text="All saints" doesOccupyFullSpace />
            <MyButton href="./modal" text="Open modal" doesOccupyFullSpace />
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
