import { Stack } from "expo-router";

const Layout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen name="(tab)" options={{ headerShown: false }} />
      </Stack>
    </>
  );
};

export default Layout;
