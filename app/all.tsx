import { Colors } from "@/constants/theme";
import getImageId from "@/functions/imageFetchers/getIconImage";
import { FlashList } from "@shopify/flash-list";
import { Image } from "expo-image";
import { Link, RelativePathString } from "expo-router";
import { ScrollView, StyleSheet, View } from "react-native";
import saints from "../data/saints.json";

export default function AllScreen() {
  return (
    <ScrollView style={styles.container}>
      <FlashList
        scrollEnabled={false}
        data={saints}
        numColumns={2}
        keyExtractor={({ id }) => String(id)}
        renderItem={({ item }) => (
          <Link href={("../saints/" + item.id) as RelativePathString}>
            <View style={styles.imageContainer}>
              <Image style={styles.image} source={getImageId(item.id)} />
            </View>
          </Link>
        )}
        style={styles.list}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.headerBackground,
    paddingTop: 15,
  },
  list: {
    flex: 1,
    backgroundColor: Colors.headerBackground,
    marginBottom: 60,
  },
  imageContainer: { alignSelf: "center", width: "100%", paddingHorizontal: 10 },
  image: {
    aspectRatio: 328 / 442,
    width: "100%",
    borderWidth: 2,
    borderColor: Colors.textRed,
    marginBottom: 20,
    alignSelf: "center",
  },
});
