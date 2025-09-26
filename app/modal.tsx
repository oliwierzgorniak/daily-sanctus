import MyButton from "@/components/MyButton";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Button, StyleSheet, View } from "react-native";

export default function ModalScreen() {
  return (
    <View style={styles.container}>
      <Button
        title="Save virtues"
        onPress={async () => {
          AsyncStorage.setItem("virtues", '["diligence", "scholarship"]');
        }}
      />
      <MyButton href="../" text="Close" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
