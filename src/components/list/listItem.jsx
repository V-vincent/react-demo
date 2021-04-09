// 类组件快捷：imrc
import React, { PureComponent } from 'react';
import style from './listItem.module.css';
import classnames from 'classnames/bind';
// import cn from 'classnames';
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
class ListItem extends PureComponent {
  // props：父子组件通信
  constructor(props) {
    super(props);

    // this.handleDecrease = this.handleDecrease.bind(this)
    this.state = {
      count: this.props.data.value,
    }
    console.log('item is constructor');
    // 在这里使用setState会报错
  }
  componentDidUpdate(nextProps) {
    if (nextProps.data.value !== this.props.data.value) {
      console.log('item is updated')
    }
  }
  componentWillUnmount() {
    console.log('Item is Delete')
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
    // console.log('step 1', this.state.count);
    // setState是异步的
    this.setState({
      count: 3, // this.state.count + 1,
    }, () => {
      // console.log('step 3', this.state.count);
    })
    // console.log('step 2', this.state.count);
  }
  // 优化减少触发虚拟DOM的更新
  // shouldComponentUpdate(nextProps, nextState) {
  //   // console.log('state', this.state, nextState)
  //   // if (this.state.count === nextState.count) return false;
  //   if (this.props.data.id === nextProps.data.id) return false;
  //   return true;
  // }
  render() {
    console.log('item is render');
    // console.log('item is rendering')
    // const _cn = cn({
    //   'themed-grid-col-s': !count
    // })
    return (
      // class 是js的关键字，所以要用className
      <div className="row list-box">
        <div className="col-5 themed-grid-col">
          <span className={cls('title', 'list-title')}>
            {this.props.data.name}
          </span>
        </div>
        <div className={`col-2 themed-grid-col`}>￥{this.props.data.price}</div>
        <div className={`col-2 themed-grid-col${this.props.data.value ? '' : '-s'}`}>
          <button onClick={() => this.props.onMinus(this.props.data.id)} type="button" className="btn btn-primary">-</button>
          <span className={cls('digital')}>{this.props.data.value}</span>
          <button onClick={() => this.props.onPlus(this.props.data.id)} type="button" className="btn btn-primary">+</button>
        </div>
        <div className="col-2 themed-grid-col"> ¥ {this.props.data.price * this.props.data.value} </div>
        <div className="col-1 themed-grid-col">
          <button onClick={() => this.props.onDelete(this.props.data.id)} type="button" className="btn btn-danger btn-sm">删除</button>
        </div>
      </div>
    );
  }
}

export default ListItem;