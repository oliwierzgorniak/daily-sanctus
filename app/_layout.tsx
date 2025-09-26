import { Colors } from "@/constants/theme";
import {
  Lora_400Regular,
  Lora_500Medium,
  Lora_500Medium_Italic,
  Lora_700Bold,
  useFonts,
} from "@expo-google-fonts/lora";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

const sharedOptionsHeader = {
  headerTintColor: Colors.textRed,
  headerStyle: {
    backgroundColor: Colors.headerBackground,
  },
};

export default function RootLayout() {
  // !TODO handle font loading?
  const [loaded, error] = useFonts({
    Lora_700Bold,
    Lora_500Medium,
    Lora_400Regular,
    Lora_500Medium_Italic,
  });

  return (
    <>
      <Stack>
        <Stack.Screen
          name="index"
          options={{ headerShown: false, title: "Home" }}
        />
        <Stack.Screen
          name="all"
          options={{
            ...sharedOptionsHeader,
            headerTitle: "All saints",
          }}
        />
        <Stack.Screen
          name="saints/[id]"
          options={{
            ...sharedOptionsHeader,
            headerTitle: "",
          }}
        />
        <Stack.Screen
          name="modal"
          options={{ presentation: "modal", title: "Modal" }}
        />
      </Stack>
      <StatusBar style="dark" />
    </>
  );
}
