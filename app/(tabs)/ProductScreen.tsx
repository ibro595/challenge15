import React, { Component } from "react";
import { View, FlatList } from "react-native";

import ProductComponent from "../../components/ProductComponent";

import products from "../../data/products.json";

class ProductScreen extends Component {
  constructor(props: any) {
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

  renderItem = ({ item }: any) => {
    return (
      <ProductComponent
        name={item.name}
        category={item.category}
        price={item.price}
        stock={item.stock}
        image={item.image}
        description={item.description}
      />
    );
  };

  render() {
    return (
      <View>
        <FlatList
          data={this.state.products}
          renderItem={this.renderItem}
          keyExtractor={(item: any) => item.id}
        />
      </View>
    );
  }
}

export default ProductScreen;