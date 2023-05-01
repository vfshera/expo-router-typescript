import { View } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";

const Home = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Stack.Screen options={{ title: "Home" }} />
      <Link
        href="/details"
        style={{
          backgroundColor: "#11a1a1",
          paddingHorizontal: 15,
          paddingVertical: 5,
          borderRadius: 15,
          color: "white",
        }}
      >
        Go to Details
      </Link>
    </View>
  );
};

export default Home;
