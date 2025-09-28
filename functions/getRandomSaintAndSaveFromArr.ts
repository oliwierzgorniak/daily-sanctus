import AsyncStorage from "@react-native-async-storage/async-storage";

const getRandomSaintAndSaveFromArr = async (
  arr: number[],
  alreadySeenSaints: number[]
) => {
  const randomIndex = Math.floor(Math.random() * arr.length);
  const saintToShow = arr[randomIndex];
  await AsyncStorage.setItem(
    "alreadySeenSaints",
    JSON.stringify([...alreadySeenSaints, saintToShow])
  );
  return saintToShow;
};

export default getRandomSaintAndSaveFromArr;
