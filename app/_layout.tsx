import { Stack } from "expo-router";

const Index = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      <Stack.Screen name="+not-found" />
      <Stack.Screen name="dashboard" options={{ headerShown: false }} />
    </Stack>
  );
};

export default Index;
