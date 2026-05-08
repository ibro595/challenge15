import React, { Component } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import ProductComponent from "../../components/ProductComponent";
import products from "../../data/products.json";

type Product = {
  id: string;
  name: string;
  category: string;
  price: string;
  stock: string;
  image: string;
  description: string;
};

type State = {
  products: Product[];
};

export default class ProductScreen extends Component<{}, State> {
  constructor(props: {}) {
    super(props);

    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    this.setState({
      products: products,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.products}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ProductComponent
              name={item.name}
              category={item.category}
              price={item.price}
              stock={item.stock}
              image={item.image}
              description={item.description}
            />
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f2f2f2",
  },
});