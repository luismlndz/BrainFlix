import { Component } from 'react';
import './BrainFlix.scss';
import Header from "./components/Header/Header"
import Home from "./pages/Home/Home"
import Upload from "./pages/Upload/Upload"
import { BrowserRouter, Switch, Route } from 'react-router-dom';

export default class BrainFlix extends Component {

  render() {
    return (
      <BrowserRouter>
        <Header/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/upload" component={Upload}/>
        </Switch>
      </BrowserRouter>
    );
  }
}