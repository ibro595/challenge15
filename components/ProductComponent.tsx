import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

type ProductProps = {
  name: string;
  category: string;
  price: string;
  stock: string;
  image: string;
  description: string;
};

export default function ProductComponent({
  name,
  category,
  price,
  stock,
  image,
  description,
}: ProductProps) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.image} />

      <Text style={styles.name}>{name}</Text>
      <Text>{category}</Text>
      <Text>{description}</Text>
      <Text>Stock: {stock}</Text>

      <Text style={styles.price}>{price}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 15,
    marginBottom: 20,
    borderRadius: 10,
    alignItems: "center",
    elevation: 5,
  },

  image: {
    width: 150,
    height: 150,
    marginBottom: 10,
  },

  name: {
    fontSize: 22,
    fontWeight: "bold",
  },

  price: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 10,
  },
});