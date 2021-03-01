
// import logo from './logo.svg';
import './App.css';
import Home from './frontend/home';
import Header from './frontend/header';
import Footer from './frontend/footer';
import Register from './frontend/register';
import Account from './frontend/account';
import Contact from './frontend/contact';
import Login from './frontend/login';
import ProductList from './frontend/productlist';
import ProductDetails from './frontend/productdetails';

import {Route, BrowserRouter as Router, Switch, Link, BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>     
     <div className="App">
       <Router>
          <switch>
            <Route path="/" exact component={Home} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/account" component={Account} />
            <Route path="/productdetail" component={ProductDetails} />
            <Route path="/productlist" component={ProductList} />
            <Route path="/contact" component={Contact} />
          </switch>
       </Router>
      </div>  
    </BrowserRouter>   
  );
}

export default App;