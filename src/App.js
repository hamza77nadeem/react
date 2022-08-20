import logo from './logo.svg';
import './App.css';

import Header from './components/Header'
import Foot from './components/Foot'
import Home from './components/Home'
import Contact from './components/Contact'
import Buy from './components/buysalerent'
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import buysalerent from './components/buysalerent';
function App() {
  return (
 
    <BrowserRouter>
    
    <Header/>
    <Switch>
    <Route path='/' exact component={Home}/>
    <Route path='/Contact' component={Contact}/>
   <Route path='/Buy' component={buysalerent}/>
    </Switch>
   <Foot/>
    </BrowserRouter>
 
 
  );
}

export default App;
