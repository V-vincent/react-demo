import React from 'react';
import ListItem from './components/listItem'

function App() {

  return (
    // Fragments的使用
    <>
      <div className="container">
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
      </div>
      <div className="container">
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
      </div>
    </>
    // React.createElement()方法第一个参数是一个字符串，所以不能由并列的层级
    // <div></div>
  );
}

export default App;
