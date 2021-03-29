import React, { PureComponent } from 'react';
// import ListItem from './components/listItem';
import NavBar from './components/navbar'
import ListPage from "./components/listPage";
// import ListItem from './components/listItemFunc';

class App extends PureComponent {
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
  // componentWillMount = () => {
  //   console.log('APP is componentWillMount');
  // }
  componentDidMount = () => {
    console.log('APP is componentDidMount');
  }
  render() {
    console.log('APP is render');
    return (
      <>
        <NavBar
          onReset={this.handleReset}
          itemNum={this.state.listData.length}
        />
        <div className="container">
          <ListPage
            listData={this.state.listData}
            onMinus={this.handleDecrease}
            onPlus={this.handleIncrease}
            onDelete={this.handleDelete}
          />
        </div>
      </>
    );
  }
}

export default App;
