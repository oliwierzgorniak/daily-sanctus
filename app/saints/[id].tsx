import ParallaxScrollView from "@/components/parallax-scroll-view";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Image } from "expo-image";
import { Link, useLocalSearchParams } from "expo-router";

export default function HomeScreen() {
  const { id } = useLocalSearchParams();

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          style={{
            width: "100%",
            flex: 1,
          }}
          source={require("@/assets/images/martin-luther-icon.jpg")}
        />
      }
    >
      <ThemedView style={{ flex: 1 }}>
        <ThemedText type="title">Satint: {id}</ThemedText>
        <Link href={"/"}>Back to menu</Link>
      </ThemedView>
    </ParallaxScrollView>
  );
}
