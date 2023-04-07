import { StyleSheet, View, Text } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";

import { Entypo } from "@expo/vector-icons";
import { Pressable } from "react-native";

const Detail = () => {
  const route = useRoute();
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: route.params?.data
        ? route.params?.data.name
        : "Detalhes da receita",
      headerRight: () => (
        <Pressable onPress={() => console.log("testando")}>
          <Entypo name="heart" size={28} color="#FF4141" />
        </Pressable>
      ),
    });
  }, [route, navigation]);

  return (
    <View style={styles.container}>
      <Text>Página Detail</Text>
      <Text>{route.params.data.name} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
});

export default Detail;
