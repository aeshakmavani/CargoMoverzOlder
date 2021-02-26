
// import logo from './logo.svg';
import './App.css';
import Home from './frontend/home';
import Header from './frontend/header';
import Footer from './frontend/footer';
import Register from './frontend/register';
 import {Route, BrowserRouter as Router, Switch, Link, BrowserRouter} from 'react-router-dom';

function App() {
  return (
    // <Router>
    <BrowserRouter>     
     <div className="App">
       <Router>
          <switch>
            <Route path="/" exact component={Home} />
            <Route path="/register" component={Register} />
          </switch>
       </Router>
         
      </div>
  
    </BrowserRouter>
 
    
  );
}

export default App;
