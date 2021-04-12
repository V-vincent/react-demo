import React, { Component } from "react";

class ProductDetails extends Component {
  handleReplace = () => {
    // Navigate to /products
    this.props.history.replace('/products');
  };
  handlePush = () => {
    this.props.history.push('/products');
  }
  render() {
    return (
      <div>
        <h1>Product Details - {this.props.match.params.id} </h1>
        <button onClick={this.handleReplace} className="btn btn-outline-success reset-btn" type="button">replaceHistory</button>
        <button onClick={this.handlePush} className="btn btn-outline-success reset-btn" type="button">pushHistory</button>
      </div>
    );
  }
}

export default ProductDetails;
