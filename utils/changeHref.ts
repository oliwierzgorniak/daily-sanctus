import AsyncStorage from "@react-native-async-storage/async-storage";
import { RelativePathString } from "expo-router";
import getRandomSaintId from "./getRandomSaintId";
import getSaintBasedOnVirtues from "./getSaintBasedOnVirtues";

const changeHref = async (
  isSuggestNew: boolean | undefined,
  setCurrentHref: React.Dispatch<React.SetStateAction<RelativePathString>>
) => {
  if (isSuggestNew) {
    try {
      const virtuesJson = await AsyncStorage.getItem("virtues");
      if (virtuesJson === null) {
        const saintId = getRandomSaintId();
        const newHref = ("./saints/" + saintId) as RelativePathString;
        setCurrentHref(newHref);
      } else {
        const virtues = JSON.parse(virtuesJson) as string[];

        const saintId = await getSaintBasedOnVirtues(virtues);
        const newHref = ("./saints/" + saintId) as RelativePathString;
        setCurrentHref(newHref);
      }
    } catch (e) {
      // !TODO handle error
      console.error(e);
    }
  }
};

export default changeHref;
