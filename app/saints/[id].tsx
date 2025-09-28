import ActionButton from "@/components/ActionButton";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import addEvent from "@/functions/calendar/addEvent";
import getCalendarId from "@/functions/calendar/getCalendarId";
import getImageId from "@/functions/imageFetchers/getIconImage";
import shareLocalFile from "@/functions/shareLocalFile";
import { Image } from "expo-image";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useRef, useState } from "react";
import { Alert, Dimensions, StyleSheet, View } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
import saints from "../../data/saints.json";

const windowWidth = Dimensions.get("window").width;
const ICON_WIDTH = 328;
const ICON_HEIGHT = 442;
const headerHeight = (windowWidth * ICON_HEIGHT) / ICON_WIDTH;

export default function SaintScreen() {
  const searchParams = useLocalSearchParams();
  const saintId = +searchParams.id;
  const saint = saints[saintId];

  const viewRef = useRef(null);
  const [width, setWidth] = useState(0);

  const measureView = () => {
    if (viewRef.current)
      // @ts-ignore
      viewRef.current.measure((_x, _y, width) => {
        setWidth(width);
      });
  };

  useEffect(() => {
    measureView();
  }, []);

  return (
    <ParallaxScrollView
      headerHeight={headerHeight}
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
          <View style={styles.ytEmbedContainer} ref={viewRef}>
            <YoutubePlayer
              height={(width * 673) / 1196}
              videoId={saint["yt-embbed"]}
            />
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
              if (calendarId) {
                await addEvent(calendarId, {
                  name: saint.name,
                  legacy: saint.legacy,
                  remembrance: {
                    month: saint.remembrance.month,
                    day: saint.remembrance.day,
                  },
                });
                Alert.alert("Remembrance day added");
              } else {
                Alert.alert("Something went wrong");
              }
            }}
          />
          <ActionButton
            text="Share saint"
            onPress={() => {
              shareLocalFile(saintId);
            }}
          />
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
    marginBottom: 10,
  },
  buttonsContainer: {
    gap: 16,
  },
});
