import { Colors } from "@/constants/theme";
import changeHref from "@/utils/changeHref";
import { Image } from "expo-image";
import { Link, RelativePathString } from "expo-router";
import { useEffect, useState } from "react";
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import { ThemedText } from "./ThemedText";

type LinkButtonTypes = {
  href: RelativePathString;
  text: string;
  doesOccupyFullSpace?: boolean;
  isSuggestNew?: boolean;
  style?: StyleProp<ViewStyle>;
};

const LinkButton = ({
  href,
  text,
  doesOccupyFullSpace = false,
  isSuggestNew,
  style,
}: LinkButtonTypes) => {
  const arrowImg = require("../assets/images/arrow-button.png");
  const [currentHref, setCurrentHref] = useState<RelativePathString>(href);

  useEffect(() => {
    changeHref(isSuggestNew, setCurrentHref);
  }, []);

  return (
    <Link
      onPress={() => changeHref(isSuggestNew, setCurrentHref)}
      href={currentHref}
    >
      <View
        style={[
          styles.container,
          { width: doesOccupyFullSpace ? "100%" : "auto" },
          style,
        ]}
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

export default LinkButton;
