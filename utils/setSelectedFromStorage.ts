import AsyncStorage from "@react-native-async-storage/async-storage";

const setSelectedFromStorage = async (
  virtuesArr: string[],
  setSelected: React.Dispatch<React.SetStateAction<boolean[]>>
) => {
  const virtuesStorageJSON = await AsyncStorage.getItem("virtues");
  if (virtuesStorageJSON !== null) {
    const virtuesStorage = JSON.parse(virtuesStorageJSON) as string[];
    const newSelected = virtuesArr.map(
      (virtue) => !!virtuesStorage.find((v) => v === virtue)
    );
    setSelected(newSelected);
  }
};

export default setSelectedFromStorage;
