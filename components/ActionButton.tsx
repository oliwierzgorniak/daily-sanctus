import { Colors } from "@/constants/theme";
import { Image } from "expo-image";
import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import { ThemedText } from "./themed-text";

type ActionButtonTypes = {
  text: string;
  style?: StyleProp<ViewStyle>;
  onPress: () => void;
};

const ActionButton = ({ text, style, onPress }: ActionButtonTypes) => {
  const arrowImg = require("../assets/images/arrow-button.png");

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.container, style]}>
        <ThemedText style={styles.text}>{text}</ThemedText>
        <Image style={styles.image} source={arrowImg} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.yellowDarker,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
    paddingVertical: 14,
    paddingHorizontal: 23,
    borderWidth: 1.5,
    borderColor: Colors.text,
    borderRadius: 1.5,
    width: "70%",
    alignSelf: "center",
  },
  image: {
    width: 55,
    aspectRatio: 61 / 28,
    transform: "scale(0.9)",
  },
  text: {
    fontFamily: "Lora_600SemiBold",
    fontSize: 20,
  },
});

export default ActionButton;
