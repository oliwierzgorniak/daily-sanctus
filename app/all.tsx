import { Colors } from "@/constants/theme";
import getImageId from "@/utils/getImageId";
import { FlashList } from "@shopify/flash-list";
import { Image } from "expo-image";
import { Link, RelativePathString } from "expo-router";
import { StyleSheet, View } from "react-native";
import saints from "../data/saints/content.json";

const preapredData =
  saints.length % 2 === 0
    ? [{ id: "filler-0" }, { id: "filler-1" }, ...saints, { id: "filler-2" }]
    : [
        { id: "filler-0" },
        { id: "filler-1" },
        ...saints,
        { id: "filler-2" },
        { id: "filler-3" },
      ];

export default function HomeScreen() {
  return (
    <FlashList
      data={preapredData}
      numColumns={2}
      keyExtractor={({ id }) => String(id)}
      renderItem={({ item }) => {
        if (typeof item.id === "string")
          return <View style={styles.filler}></View>;
        else
          return (
            <Link href={("../saints/" + item.id) as RelativePathString}>
              <View style={styles.imageContainer}>
                <Image style={styles.image} source={getImageId(item.id)} />
              </View>
            </Link>
          );
      }}
      style={styles.list}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
    backgroundColor: Colors.headerBackground,
    marginTop: -50,
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
  filler: {
    height: 70,
  },
});
