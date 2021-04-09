import React from 'react';
import { Link } from 'react-router-dom'

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
const NavBar = () => {
  console.log('nav is render');
  return (<nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="wrap container">
      <span className="title">NavBar</span>
      <ul className="nav-ul row-ul">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/list-page">ListPage</Link></li>
      </ul>
    </div>
  </nav >);
}

export default NavBar;
