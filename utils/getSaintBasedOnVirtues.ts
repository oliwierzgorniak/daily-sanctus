import AsyncStorage from "@react-native-async-storage/async-storage";
import saints from "../data/saints/content.json";
import getRandomSaintAndSaveFromArr from "./getRandomSaintAndSaveFromArr";
import getRandomSaintId from "./getRandomSaintId";

const getSaintBasedOnVirtues = async (virtues: string[]) => {
  // await AsyncStorage.clear();

  const alreadySeenSaintsJSON = await AsyncStorage.getItem("alreadySeenSaints");
  const alreadySeenSaints = alreadySeenSaintsJSON
    ? (JSON.parse(alreadySeenSaintsJSON) as number[])
    : [];

  const allQualifiedSaints = saints.filter((saint) => {
    for (const virtue of virtues) {
      if (saint.virtues.includes(virtue)) return true;
    }
    return false;
  });
  const allQualifiedSaintsIds = allQualifiedSaints.map(({ id }) => id);

  const saintsNotSeen = allQualifiedSaintsIds.filter(
    (id) => !alreadySeenSaints.includes(id)
  );

  if (saintsNotSeen.length !== 0) {
    return getRandomSaintAndSaveFromArr(saintsNotSeen, alreadySeenSaints);
  } else {
    const saintsNotSeenFromAll = saints.filter(
      ({ id }) => !alreadySeenSaints.includes(id)
    );
    const saintsNotSeenFromAllIds = saintsNotSeenFromAll.map(({ id }) => id);

    if (saintsNotSeenFromAllIds.length !== 0) {
      return getRandomSaintAndSaveFromArr(
        saintsNotSeenFromAllIds,
        alreadySeenSaints
      );
    } else {
      return getRandomSaintId();
    }
  }
};

export default getSaintBasedOnVirtues;
