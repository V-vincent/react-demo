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
// let count = 0;

// 快捷：cc
class ListItem extends Component {
  // props：父子组件通信
  constructor(props) {
    super(props);

    // this.handleDecrease = this.handleDecrease.bind(this)
    this.state = {
      count: 0,
    }

    // 在这里使用setState会报错
  }
  // countToZero() {
  //   count = count < 0 ? 0 : count;
  // }
  // 减少数量
  handleDecrease = (id) => {
    // count--;
    this.setState({
      count: this.state.count - 1,
    })
    // this.countToZero();
    // console.log('---', id, count);
  }
  // 添加数量
  handleIncrease = (data, ev) => {
    // console.log(data, count)
    // count++;
    console.log('step 1', this.state.count);
    // setState是异步的
    this.setState({
      count: this.state.count + 1,
    }, () => {
      console.log('step 3', this.state.count);
    })
    console.log('step 2', this.state.count);
  }
  render() {
    // const _cn = cn({
    //   'themed-grid-col-s': !count
    // })
    return (
      // class 是js的关键字，所以要用className
      <div className="row list-box">
        <div className="col-6 themed-grid-col">
          <span className={cls('title', 'list-title')}>
            {this.props.data.name}
          </span>
        </div>
        <div className={`col-2 themed-grid-col`}>￥{this.props.data.price}</div>
        <div className={`col-3 themed-grid-col${this.state.count ? '' : '-s'}`}>
          <button onClick={() => this.handleDecrease(this.props.data.id)} type="button" className="btn btn-primary">-</button>
          <span className={cls('digital')}>{this.state.count}</span>
          <button onClick={this.handleIncrease.bind(this, this.props.data)} type="button" className="btn btn-primary">+</button>
        </div>
        <div className="col-1 themed-grid-col">
          <button onClick={() => this.props.onDelete(this.props.data.id)} type="button" className="btn btn-danger btn-sm">删除</button>
        </div>
      </div>
    );
  }
}

export default ListItem;