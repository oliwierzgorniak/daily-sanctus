import ActionButton from "@/components/ActionButton";
import ParallaxScrollView from "@/components/parallax-scroll-view";
import { ThemedText } from "@/components/themed-text";
import addEvent from "@/utils/calendar/addEvent";
import getCalendarId from "@/utils/calendar/getCalendarId";
import getImageId from "@/utils/getImageId";
import { Image } from "expo-image";
import { useLocalSearchParams } from "expo-router";
import { StyleSheet, View } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
import saints from "../../data/saints/content.json";

export default function SaintScreen() {
  const searchParams = useLocalSearchParams();
  const saintId = +searchParams.id;
  const saint = saints[saintId];

  return (
    <ParallaxScrollView
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
      <View style={styles.textContainer}>
        <View>
          <ThemedText type="subtitle" style={styles.subtitle}>
            Born
          </ThemedText>
          <ThemedText>{saint.birth}</ThemedText>
        </View>
        <View>
          <ThemedText type="subtitle" style={styles.subtitle}>
            Quote
          </ThemedText>
          <ThemedText style={styles.quoteText}>{saint.quote}</ThemedText>
        </View>
        <View>
          <ThemedText type="subtitle" style={styles.subtitle}>
            Legacy
          </ThemedText>
          <ThemedText style={styles.legacyText}>{saint.legacy}</ThemedText>
          {/* !TODO make height responsive */}
          <View style={styles.ytEmbedContainer}>
            <YoutubePlayer height={190} videoId={saint["yt-embbed"]} />
          </View>
        </View>
        <View>
          <ThemedText type="subtitle" style={styles.subtitle}>
            Notable works
          </ThemedText>
          {/* here normal text is used instead of a FlatList because I get an error (a nested srollable element) */}
          <View style={styles.notableWorksContainer}>
            {saint["notable-works"].map((item) => (
              <ThemedText key={item}>- {item}</ThemedText>
            ))}
          </View>
        </View>
        <View style={styles.buttonsContainer}>
          <ActionButton
            text="Add to calendar"
            onPress={async () => {
              const calendarId = await getCalendarId();
              // !TODO handle no calendarId
              if (calendarId) {
                addEvent(calendarId, {
                  name: saint.name,
                  legacy: saint.legacy,
                  remembrance: {
                    month: saint.remembrance.month,
                    day: saint.remembrance.day,
                  },
                });
              }
            }}
          />
          {/* <ActionButton text="Share saint" /> */}
        </View>
      </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  textContainer: {
    gap: 25,
    paddingBottom: 90,
  },
  subtitle: {
    marginBottom: 10,
  },
  quoteText: {
    lineHeight: 34,
    fontSize: 25,
    fontFamily: "Lora_400Regular_Italic",
  },
  legacyText: {
    lineHeight: 30,
  },
  notableWorksContainer: {
    gap: 8,
    marginBottom: 30,
  },
  ytEmbedContainer: {
    marginTop: 20,
    width: "95%",
    margin: "auto",
    marginBottom: 5,
  },
  buttonsContainer: {
    gap: 16,
  },
});
