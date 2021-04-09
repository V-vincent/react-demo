// 函数组件快捷键：sfc
import React from 'react';

let count = 0;
const ListItem = (props) => {
  return (
    <div className="row list-box">
      <div className="col-8 themed-grid-col">{props.data.name}</div>
      <div className="col-2 themed-grid-col">￥{props.data.price}</div>
      <div className="col-2 themed-grid-col">{count}</div>
    </div>
  );
}

export default ListItem;