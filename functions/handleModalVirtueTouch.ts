import AsyncStorage from "@react-native-async-storage/async-storage";

const handleModalVirtueTouch = async (
  selected: boolean[],
  i: number,
  setSelected: React.Dispatch<React.SetStateAction<boolean[]>>,
  virtue: string
) => {
  const newSelected = [...selected];
  newSelected[i] = !newSelected[i];
  setSelected(newSelected);

  const virtuesStorageJson = await AsyncStorage.getItem("virtues");
  const virtuesStorage = virtuesStorageJson
    ? (JSON.parse(virtuesStorageJson) as string[])
    : [];
  const indexOfVirtue = virtuesStorage.findIndex((item) => item === virtue);
  const newVirtuesStorage =
    indexOfVirtue === -1
      ? [...virtuesStorage, virtue]
      : [
          ...virtuesStorage.slice(0, indexOfVirtue),
          ...virtuesStorage.slice(indexOfVirtue + 1),
        ];

  await AsyncStorage.setItem("virtues", JSON.stringify(newVirtuesStorage));
};

export default handleModalVirtueTouch;
