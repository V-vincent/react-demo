import React, { Component } from 'react';
import ListItem from './components/listItem';
// import ListItem from './components/listItemFunc';

// 数据
const listData = [{
  id: 1,
  name: "华为太空手表",
  price: 1200,
  stock: 20,
}, {
  id: 2,
  name: "华为P50",
  price: 5500,
  stock: 20,
}, {
  id: 3,
  name: "iphone",
  price: 5500,
  stock: 30,
}]

class App extends Component {
  handleDelete = (id) => {
    console.log("id: ", id);
  };
  renderList() {
    if (listData.length === 0) {
      return <div className="text-center">购物车是空的</div>
    }
    return listData.map((item) => {
      return <ListItem key={item.id} data={item} onDelete={this.handleDelete} />
    })
  }
  render() {
    return (
      <div className="container">
        <div className="title">Header</div>
        {/* {listData.length === 0 && <div className="text-center">购物车是空的</div>} */}
        {this.renderList()}
      </div>
      // Fragments的使用
      // <>
      //   <div className="container">
      //     <ListItem />
      //     <ListItem />
      //     <ListItem />
      //   </div>
      //   <div className="container">
      //     <ListItem />
      //     <ListItem />
      //     <ListItem />
      //   </div>
      // </>
      // React.createElement()方法第一个参数是一个字符串，所以不能由并列的层级
      // <div></div>
    );
  }
}

export default App;
