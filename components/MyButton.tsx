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
        <ThemedText>{text}</ThemedText>
        <Image style={styles.image} source={arrowImg} />
      </View>
    </Link>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    flexDirection: "row",
  },
  image: {
    width: 70,
    aspectRatio: 61 / 28,
  },
});

export default MyButton;
