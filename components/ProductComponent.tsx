import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

interface ProductProps {
  name: string;
  category: string;
  price: number;
  stock: number;
  image: string;
  description: string;
}

const ProductComponent: React.FC<ProductProps> = ({
  name,
  category,
  price,
  stock,
  image,
  description,
}) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.image} />

      <Text style={styles.name}>{name}</Text>

      <Text>Kategorija: {category}</Text>

      <Text>{description}</Text>

      <Text>Stanje: {stock}</Text>

      <Text>Cijena: {price} KM</Text>
    </View>
  );
};

export default ProductComponent;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    margin: 10,
    padding: 15,
    borderRadius: 10,
    elevation: 5,
  },

  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },

  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
  },
});