import { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import Logo from "../../components/logo";
import api from "../../services/api/api";

import { Ionicons } from "@expo/vector-icons";
import { FoodList } from "../../components/food-list";

const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [foods, setFoods] = useState([]);

  const handleSearch = () => {
    console.log(inputValue);
  };

  useEffect(() => {
    const handleFetchAp = async () => {
      const response = await api.get("/foods");
      setFoods(response.data);
    };

    handleFetchAp();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Logo />
      <Text style={styles.title}>Encontre a receite</Text>
      <Text style={styles.title}>que combina com você</Text>

      <View style={styles.form}>
        <TextInput
          placeholder="Digite o nome da comida..."
          style={styles.input}
          value={inputValue}
          onChangeText={(text) => setInputValue(text)}
        />
        <TouchableOpacity onPress={handleSearch}>
          <Ionicons name="search" size={28} color={"#4CBE6C"} />
        </TouchableOpacity>
      </View>

      <FlatList
        data={foods}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <FoodList
            cover={item.cover}
            name={item.name}
            time={item.time}
            totalIngredients={item.total_ingredients}
            data={item}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F9FF",
    paddingTop: 36,
    paddingStart: 14,
    paddingEnd: 14,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#0e0e0e",
  },
  form: {
    backgroundColor: "#FFFF",
    width: "100%",
    borderRadius: 8,
    marginTop: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#ECECEC",
    paddingLeft: 8,
    paddingRight: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  input: {
    width: "90%",
    maxHeight: "90%",
    height: 54,
  },
});

export default Home;
