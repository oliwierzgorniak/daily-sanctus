import AsyncStorage from "@react-native-async-storage/async-storage";
import { RelativePathString } from "expo-router";
import { Alert } from "react-native";
import getRandomSaintId from "./getRandomSaintId";
import getSaintBasedOnVirtues from "./getSaintBasedOnVirtues";

const changeHref = async (
  isSuggestNew: boolean | undefined,
  setCurrentHref: React.Dispatch<React.SetStateAction<RelativePathString>>
) => {
  if (isSuggestNew) {
    try {
      const virtuesJson = await AsyncStorage.getItem("virtues");
      let saintId: number;
      if (virtuesJson === null) {
        saintId = getRandomSaintId();
      } else {
        const virtues = JSON.parse(virtuesJson) as string[];
        saintId = await getSaintBasedOnVirtues(virtues);
      }

      const newHref = ("./saints/" + saintId) as RelativePathString;
      setCurrentHref(newHref);
    } catch (e) {
      Alert.alert("There was an error while trying to suggest a saint");
      console.error(e);
    }
  }
};

export default changeHref;
