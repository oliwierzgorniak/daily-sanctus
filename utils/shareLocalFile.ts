import { Asset } from "expo-asset";
import * as Sharing from "expo-sharing";
import getShareable from "./getShareable";

const shareLocalFile = async (saintId: number) => {
  const localFile = getShareable(saintId);

  try {
    // 2. Load the asset to get a proper Asset object
    const asset = Asset.fromModule(localFile);
    await asset.downloadAsync();

    // The asset.localUri is the local file URI in the cache directory
    const assetUri = asset.localUri;

    if (!assetUri) {
      throw new Error("Asset local URI is undefined after download.");
    }

    // 3. Check if sharing is available
    const isAvailable = await Sharing.isAvailableAsync();

    if (isAvailable) {
      // 4. Use shareAsync with the local URI
      await Sharing.shareAsync(assetUri, {
        mimeType: "image/jpeg", // Set the correct MIME type for the file
        dialogTitle: "Share quote",
      });
    } else {
      alert("Sharing is not available on this device.");
    }
  } catch (error) {
    console.error("Error sharing file:", error);
    // alert("Failed to share file: " + error.message);
  }
};

export default shareLocalFile;
