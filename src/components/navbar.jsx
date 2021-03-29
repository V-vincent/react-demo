import React from 'react';

// class NavBar extends PureComponent {
//   render() { 
//     return ( 
//       <nav className="navbar navbar-expand-lg navbar-light bg-light">
//         <div className="wrap">
//           <span className="title">Nav</span>
//           <span className="badge badge-pill badge-primary ml-2 mr-2">{this.props.itemNum}</span>
//           <button onClick={this.props.onReset} className="btn btn-outline-success my-2 my-sm-0 fr" type="button">重置</button>
//         </div>
//       </nav>
//     );
//   }
// }
// export default NavBar;

// 无状态组件，没有render方法，直接return返回
const NavBar = ({ itemNum, onReset }) => {
  return (<nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="wrap">
      <span className="title">NavBar</span>
      <span className="badge badge-pill badge-primary ml-2 mr-2">{itemNum}</span>
      <button onClick={onReset} className="btn btn-outline-success my-2 my-sm-0 fr" type="button">重置</button>
    </div>
  </nav>);
}

export default NavBar;
