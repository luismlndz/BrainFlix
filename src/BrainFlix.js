import Header from "./components/Header/Header"
import Home from "./pages/Home/Home"
import Upload from "./pages/Upload/Upload"
import { BrowserRouter, Switch, Route } from 'react-router-dom';

export default function BrainFlix() {

  return (
    <BrowserRouter>
      <Header/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/upload" component={Upload}/>
        <Route path="/video/:id" render={(props) => {
          return(<Home {...props}/>)
        }}/>
      </Switch>
    </BrowserRouter>
  );
}