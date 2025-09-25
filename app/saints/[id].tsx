import ParallaxScrollView from "@/components/parallax-scroll-view";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import getImageId from "@/utils/getImageId";
import { Image } from "expo-image";
import { Link, useLocalSearchParams } from "expo-router";
import { FlatList, StyleSheet } from "react-native";
import saints from "../../data/saints/content.json";

export default function SaintScreen() {
  const searchParams = useLocalSearchParams();
  const saintId = +searchParams.id;
  const saint = saints[saintId];

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          style={{
            width: "100%",
            flex: 1,
          }}
          source={getImageId(saintId)}
        />
      }
    >
      <ThemedView style={{ flex: 1, gap: 30 }}>
        <ThemedView>
          <ThemedText type="title" style={styles.subtitle}>
            Born
          </ThemedText>
          <ThemedText>{saint.birth}</ThemedText>
        </ThemedView>
        <ThemedView>
          <ThemedText type="title" style={styles.subtitle}>
            Quote
          </ThemedText>
          <ThemedText>{saint.quote}</ThemedText>
        </ThemedView>
        <ThemedView>
          <ThemedText type="title" style={styles.subtitle}>
            Legacy
          </ThemedText>
          <ThemedText>{saint.legacy}</ThemedText>
        </ThemedView>
        <ThemedView>
          <ThemedText type="title" style={styles.subtitle}>
            Notable works
          </ThemedText>
          <FlatList
            data={saint["notable-works"]}
            renderItem={({ item }) => <ThemedText>- {item}</ThemedText>}
          />
        </ThemedView>
        <Link style={{ color: "white" }} href={"/"}>
          Back to menu
        </Link>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  subtitle: {
    fontFamily: "Lora_500Medium_Italic",
  },
});
