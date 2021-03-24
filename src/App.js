import React from 'react';
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

function App() {
  return (
    <div className="container">
      {listData.map(item => {
        return <ListItem key={item.id} data={item} />
      })}
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

export default App;
