import { Colors } from "@/constants/theme";
import type { PropsWithChildren, ReactElement } from "react";
import { StyleSheet, View } from "react-native";
import Animated, {
  interpolate,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollOffset,
} from "react-native-reanimated";

type Props = PropsWithChildren<{
  headerImage: ReactElement;
  headerHeight: number;
}>;

export default function ParallaxScrollView({
  children,
  headerImage,
  headerHeight,
}: Props) {
  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const scrollOffset = useScrollOffset(scrollRef);
  const headerAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            scrollOffset.value,
            [-headerHeight, 0, headerHeight],
            [-headerHeight / 2, 0, headerHeight * 0.75]
          ),
        },
        {
          scale: interpolate(
            scrollOffset.value,
            [-headerHeight, 0, headerHeight],
            [2, 1, 1]
          ),
        },
      ],
    };
  });

  return (
    <Animated.ScrollView
      ref={scrollRef}
      style={{ backgroundColor: Colors.background, flex: 1 }}
      scrollEventThrottle={16}
    >
      <Animated.View
        style={[styles.header, headerAnimatedStyle, { height: headerHeight }]}
      >
        {headerImage}
      </Animated.View>
      <View style={styles.content}>{children}</View>
    </Animated.ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    overflow: "hidden",
  },
  content: {
    backgroundColor: Colors.background,
    flex: 1,
    paddingVertical: 17,
    paddingHorizontal: 25,
    overflow: "hidden",
  },
});
