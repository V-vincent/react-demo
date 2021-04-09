import React from "react";
import ItemA from './hoc/itemA'
import ItemB from './hoc/itemB'
import ItemC from './rp/ItemC'

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <ul className="item-ul row-ul">
        <li><ItemA id="1" /></li>
        <li><ItemB /></li>
        <li><ItemC /></li>
      </ul>
    </>);
};

export default Home;
