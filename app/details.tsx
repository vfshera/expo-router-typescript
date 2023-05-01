import { View, Text } from "react-native";
import { useRouter } from "expo-router";

const Details = () => {
  const router = useRouter();
  return (
    <View>
      <Text style={{ color: "#11a1a1" }}>Details Screen</Text>
    </View>
  );
};

export default Details;
