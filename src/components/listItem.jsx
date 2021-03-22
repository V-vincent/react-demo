// 快捷：imrc
import React, { Component } from 'react';

// 商品属性
const product = {
  id: 1,
  name: "华为太空手表",
  price: 1200,
  stock: 20,
}
let count = 0;

// 快捷：cc
class ListItem extends Component {
  manageCount(){
    return count + '个'
  }
  render() {
    // class 是js的关键字，所以要用className
    return (
      <div className="row mb-3">
        <div className="col-6 themed-grid-col">{product.name}</div>
        <div className="col-1 themed-grid-col">￥{product.price}</div>
        <div className="col-2 themed-grid-col">{this.manageCount()}</div>
      </div>
    );
  }
}

export default ListItem;