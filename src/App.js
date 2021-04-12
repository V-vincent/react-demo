import React, { PureComponent } from 'react';
import NavBar from './components/navbar'
import ListPage from "./components/list/listPage";
import Home from "./components/home";
import Query from "./components/query";
import NotFound from "./components/notFound";
import Product from "./components/product/product";
import ProductDetails from "./components/product/productDetails";
import { Route, Switch, Redirect } from "react-router-dom";

class App extends PureComponent {
  componentDidMount = () => {
    console.log('APP is componentDidMount');
  }
  render() {
    console.log('APP is render');
    return (
      <>
        <NavBar />
        <div className="container">
          <Switch >
            <Route path="/products/:id" component={ProductDetails} />
            <Redirect from="/mall" to="products" />
            <Route path="/products" render={(props) => <Product val="传递参数" {...props} />} />
            <Route path="/list-page" component={ListPage} />
            <Route path="/query/:id?/:name?" component={Query} />
            <Route path="/" exact component={Home} />
            <Route path="/not-found" component={NotFound} />
            <Redirect to="not-found" />
          </Switch>
        </div>
      </>
    );
  }
}

export default App;
