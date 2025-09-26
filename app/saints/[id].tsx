import ParallaxScrollView from "@/components/parallax-scroll-view";
import { ThemedText } from "@/components/themed-text";
import getImageId from "@/utils/getImageId";
import { Image } from "expo-image";
import { Link, useLocalSearchParams } from "expo-router";
import { StyleSheet, View } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
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
      <View style={{ flex: 1, gap: 30 }}>
        <View>
          <ThemedText type="title" style={styles.subtitle}>
            Born
          </ThemedText>
          <ThemedText>{saint.birth}</ThemedText>
        </View>
        <View>
          <ThemedText type="title" style={styles.subtitle}>
            Quote
          </ThemedText>
          <ThemedText>{saint.quote}</ThemedText>
        </View>
        <View>
          <ThemedText type="title" style={styles.subtitle}>
            Legacy
          </ThemedText>
          <ThemedText>{saint.legacy}</ThemedText>
          {/* !TODO make height responsive */}
          <YoutubePlayer height={200} videoId={saint["yt-embbed"]} />
        </View>
        <View>
          <ThemedText type="title" style={styles.subtitle}>
            Notable works
          </ThemedText>
          {/* here normal text is used instead of a FlatList because I get an error (a nested srollable element) */}
          <View>
            {saint["notable-works"].map((item) => (
              <ThemedText key={item}>- {item}</ThemedText>
            ))}
          </View>
        </View>

        <Link style={{ color: "white" }} href={"/"}>
          Back to menu
        </Link>
      </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  subtitle: {
    fontFamily: "Lora_500Medium_Italic",
  },
});
