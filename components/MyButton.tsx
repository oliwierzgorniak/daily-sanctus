import { Colors } from "@/constants/theme";
import { Image } from "expo-image";
import { Link, RelativePathString } from "expo-router";
import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { ThemedText } from "./themed-text";

type MyButtonTypes = {
  href: RelativePathString;
  text: string;
  doesOccupyFullSpace: boolean;
  isSuggestNew?: boolean;
};

const MyButton = ({
  href,
  text,
  doesOccupyFullSpace = false,
  isSuggestNew,
}: MyButtonTypes) => {
  const arrowImg = require("../assets/images/arrow-button.png");
  const [currentHref, setCurrentHref] = useState<RelativePathString>(href);

  const changeHref = () => {
    if (isSuggestNew) {
      const saintId = Math.floor(Math.random() * 8);
      const newHref = ("./saints/" + saintId) as RelativePathString;
      setCurrentHref(newHref);
    }
  };
  useEffect(() => {
    changeHref();
  }, []);

  return (
    <Link onPress={changeHref} href={currentHref}>
      <View
        style={{
          ...styles.container,
          width: doesOccupyFullSpace ? "100%" : "auto",
        }}
      >
        <ThemedText style={styles.text}>{text}</ThemedText>
        <Image style={styles.image} source={arrowImg} />
      </View>
    </Link>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
    paddingVertical: 14,
    paddingHorizontal: 23,
    borderWidth: 1.5,
    borderColor: Colors.text,
    borderRadius: 1.5,
  },
  image: {
    width: 55,
    aspectRatio: 61 / 28,
  },
  text: {
    fontFamily: "Lora_500Medium",
    fontSize: 28,
  },
});

export default MyButton;
