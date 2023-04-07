import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

export function FoodList({ name, cover, time, totalIngredients, id, data }) {
  const navigate = useNavigation();

  const handleNavigate = () => {
    console.log(navigate.navigate("detail", { data: data }));
  };

  return (
    <TouchableOpacity
      activeOpacity={1}
      style={styles.container}
      onPress={handleNavigate}
    >
      <Image source={{ uri: cover }} style={styles.cover} />
      <View style={styles.info}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.description}>
          {totalIngredients} ingredientes | {time} min
        </Text>
      </View>
      <LinearGradient
        style={styles.gradient}
        colors={["transparent", "rgba(0,0,0,0.70)", "rgba(0,0,0,0.95)"]}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 14,
  },
  cover: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
  info: {
    position: "absolute",
    bottom: 14,
    left: 14,
    zIndex: 99,
  },
  name: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
  description: {
    color: "#ffff",
  },
  gradient: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: "55%",
    borderRadius: 10,
    zIndex: 1,
    backgroundColor: "transparent",
  },
});
