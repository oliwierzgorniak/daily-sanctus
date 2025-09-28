import MyButton from "@/components/LinkButton";
import { ThemedText } from "@/components/ThemedText";
import { Colors } from "@/constants/theme";
import getAllVirtues from "@/functions/getAllVirtues";
import getInitalSelectedArray from "@/functions/getInitalSelectedArray";
import handleModalVirtueTouch from "@/functions/handleModalVirtueTouch";
import setSelectedFromStorage from "@/functions/setSelectedFromStorage";
import { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

export default function ModalScreen() {
  const virtues = getAllVirtues();
  const [selected, setSelected] = useState<boolean[]>(
    getInitalSelectedArray(virtues)
  );

  setSelectedFromStorage(virtues, setSelected);

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <ThemedText style={styles.explanation}>
          Examine your vices and choose the opposite matching virtue
        </ThemedText>
        <View style={styles.pillContainer}>
          {virtues.map((virtue, i) => (
            <TouchableOpacity
              key={virtue}
              style={[styles.pill, selected[i] && styles.pillActive]}
              onPress={() =>
                handleModalVirtueTouch(selected, i, setSelected, virtue)
              }
            >
              <ThemedText
                style={
                  selected[i]
                    ? { ...styles.pillText, ...styles.pillTextActive }
                    : styles.pillText
                }
              >
                {virtue[0].toUpperCase() + virtue.substring(1)}
              </ThemedText>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <MyButton
        style={{ transform: "scale(0.8)", borderWidth: 0 }}
        href="../"
        text="Save"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 30,
    backgroundColor: Colors.headerBackground,
  },
  topContainer: {
    marginBottom: 15,
  },
  explanation: {
    textAlign: "center",
    color: Colors.black,
    fontFamily: "Lora_500Medium",
    fontSize: 22,
    marginBottom: 25,
    paddingHorizontal: 18,
  },
  pillContainer: {
    flexDirection: "row",
    width: "98%",
    flexWrap: "wrap",
    alignSelf: "center",
  },
  pill: {
    marginBottom: 10,
    marginRight: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 1.5,
    borderWidth: 1.5,
    borderColor: Colors.pillDefault,
  },
  pillActive: {
    borderColor: Colors.background,
    backgroundColor: Colors.background,
  },
  pillText: {
    color: Colors.black,
    fontFamily: "Lora_500Medium_Italic",
    fontSize: 19,
  },
  pillTextActive: {
    color: Colors.text,
  },
});
