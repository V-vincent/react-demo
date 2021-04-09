import React, { PureComponent } from 'react';
import ListItem from "./listItem";

class ListPage extends PureComponent {
  constructor() {
    super();
    this.state = {
      listData: [{
        id: 1,
        name: "华为太空手表",
        price: 1200,
        value: 1,
      }, {
        id: 2,
        name: "华为P50",
        price: 5500,
        value: 3,
      }, {
        id: 3,
        name: "iphone",
        price: 5500,
        value: 2,
      }]
    }
    console.log('APP is constructor')
  }
  handleDecrease = (id) => {
    let listData = this.state.listData.map(item => {
      if (item.id === id) {
        let _item = { ...item };
        _item.value--;
        if (_item.value < 0) _item.value = 0;
        return _item;
      } else {
        return item;
      }
    })
    this.setState({
      listData
    });
  }
  // 添加数量
  handleIncrease = (id) => {
    let listData = this.state.listData.map(item => {
      if (item.id === id) {
        let _item = { ...item };
        _item.value++;
        return _item;
      } else {
        return item;
      }
    })
    this.setState({
      listData
    });
  }
  handleDelete = (id) => {
    let listData = this.state.listData.filter(item => {
      return item.id !== id;
    })
    this.setState({
      listData
    });
  };
  handleReset = () => {
    let listData = this.state.listData.map(item => {
      let _item = { ...item };
      _item.value = 0;
      return _item;
    })
    this.setState({
      listData
    })
  }
  renderList() {
    if (this.state.listData.length === 0)
      return <div className="text-center">购物车是空的</div>;

    return this.state.listData.map(item => {
      return (
        <ListItem
          onMinus={this.handleDecrease}
          onPlus={this.handleIncrease}
          onDelete={this.handleDelete}
          key={item.id}
          data={item}
        />
      );
    });
  }

  render() {
    console.log('page is render');
    return (
      <>
        <div style={{ margin: 10 }}>
          商品数量：<span className="badge badge-pill badge-primary ml-2 mr-2">{this.state.listData.length}</span>
          <button onClick={this.handleReset} className="btn btn-outline-success reset-btn" type="button">重置</button>
        </div>
        {this.renderList()}
      </>
    );
  }
}

export default ListPage;