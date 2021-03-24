// 类组件快捷：imrc
import React, { Component } from 'react';

// 商品属性
// const product = {
//   id: 1,
//   name: "华为太空手表",
//   price: 1200,
//   stock: 20,
// }
let count = 0;

// 快捷：cc
class ListItem extends Component {
  // props：父子组件通信
  constructor(props) {
    super(props);
  }
  manageCount() {
    return count + '个'
  }
  render() {
    // class 是js的关键字，所以要用className
    return (
      <div className="row list-box">
        <div className="col-8 themed-grid-col">{this.props.data.name}</div>
        <div className="col-2 themed-grid-col">￥{this.props.data.price}</div>
        <div className="col-2 themed-grid-col">{this.manageCount()}</div>
      </div>
    );
  }
}

export default ListItem;