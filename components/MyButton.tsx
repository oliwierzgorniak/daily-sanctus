import { Colors } from "@/constants/theme";
import { Image } from "expo-image";
import { Link, RelativePathString } from "expo-router";
import { StyleSheet, View } from "react-native";
import { ThemedText } from "./themed-text";

interface iMyButton {
  href: RelativePathString;
  text: string;
}

const MyButton = ({ href, text }: iMyButton) => {
  const arrowImg = require("../assets/images/arrow-button.png");

  return (
    <Link href={href}>
      <View style={styles.container}>
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
