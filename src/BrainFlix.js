import Header from "./components/Header/Header"
import Home from "./pages/Home/Home"
import Upload from "./pages/Upload/Upload"
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

export default function BrainFlix() {

  return (
    <BrowserRouter>
      <Header/>
      <Switch>
        <Redirect
          from="/"
          to="/video/84e96018-4022-434e-80bf-000ce4cd12b8"
          exact
          component={Home}
        />
        <Route path="/upload" component={Upload}/>
        <Route path="/video/:id" render={(props) => {
          return(<Home {...props}/>)
        }}/>
      </Switch>
    </BrowserRouter>
  );
}