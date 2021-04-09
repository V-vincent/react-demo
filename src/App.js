import React, { PureComponent } from 'react';
import NavBar from './components/navbar'
import ListPage from "./components/list/listPage";
import Home from "./components/home";
import { Route, Switch } from "react-router-dom";

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
            <Route path="/list-page" component={ListPage} />
            <Route path="/" exact component={Home} />
          </Switch>
        </div>
      </>
    );
  }
}

export default App;
