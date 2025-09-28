import { Colors } from "@/constants/theme";
import {
  Lora_400Regular,
  Lora_400Regular_Italic,
  Lora_500Medium,
  Lora_500Medium_Italic,
  Lora_600SemiBold,
  Lora_700Bold,
  useFonts,
} from "@expo-google-fonts/lora";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useCallback, useEffect, useState } from "react";
import { View } from "react-native";
import "react-native-reanimated";

const sharedOptionsHeader = {
  headerTintColor: Colors.textRed,
  headerStyle: {
    backgroundColor: Colors.headerBackground,
  },
};

export default function RootLayout() {
  const [fontsLoaded, error] = useFonts({
    Lora_700Bold,
    Lora_500Medium,
    Lora_400Regular,
    Lora_400Regular_Italic,
    Lora_600SemiBold,
    Lora_500Medium_Italic,
  });

  const [skipLoading, setSkipLoading] = useState(false);
  useEffect(() => {
    setTimeout(() => setSkipLoading(true), 4000);
  });
  //gemini.google.com/app/7b863b0ba1ef8980
  // This function is called once the fonts

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || error) {
      setSkipLoading(true);
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]); // Re-run when these values change

  if (!skipLoading && !fontsLoaded && !error) {
    return null;
  }

  return (
    <View onLayout={onLayoutRootView} style={{ flex: 1 }}>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            headerShown: false,
            title: "Home",
          }}
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
          options={{
            presentation: "modal",
            title: "Choose virtues",
            headerTintColor: Colors.headerBackground,
            headerTitleStyle: {
              fontFamily: "Lora_700Bold",
              fontSize: 21,
            },
            headerStyle: {
              backgroundColor: Colors.background,
            },
          }}
        />
      </Stack>
      <StatusBar style="light" />
    </View>
  );
}
