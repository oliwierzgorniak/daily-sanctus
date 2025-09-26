import {
  Lora_400Regular,
  Lora_500Medium_Italic,
  useFonts,
} from "@expo-google-fonts/lora";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

export default function RootLayout() {
  // !TODO handle font loading?
  const [loaded, error] = useFonts({
    Lora_400Regular,
    Lora_500Medium_Italic,
  });

  return (
    <>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen
          name="saints/[id]"
          options={{
            headerShown: true,
            headerTitle: "",
            headerTintColor: "#800020",
            headerStyle: {
              backgroundColor: "#CBA93A",
            },
          }}
        />
        <Stack.Screen
          name="modal"
          options={{ presentation: "modal", title: "Modal" }}
        />
      </Stack>
      <StatusBar backgroundColor="#481311" />
    </>
  );
}
