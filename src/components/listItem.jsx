// 类组件快捷：imrc
import React, { Component } from 'react';
import style from './listItem.module.css';
import classnames from 'classnames/bind';
import cn from 'classnames';
const cls = classnames.bind(style);

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
    const _cn = cn({
      'themed-grid-col-s': !count
    })
    return (
      // class 是js的关键字，所以要用className
      <div className="row list-box">
        <div className="col-8 themed-grid-col">
          <span className={cls('title', 'list-title')}>
            {this.props.data.name}
          </span>
        </div>
        <div className={`col-2 themed-grid-col ` + _cn}>￥{this.props.data.price}</div>
        <div className={`col-2 themed-grid-col${count ? '' : '-s'}`}>{this.manageCount()}</div>
      </div>
    );
  }
}

export default ListItem;