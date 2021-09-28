import './App.css';
import AddProduct from './components/AddProduct';
import ShowProducts from './components/ShowProducts';
import {BrowserRouter as Router,Route,Switch } from 'react-router-dom'

import Navbarmenu from './components/Navbarmenu';
import Footer from './components/Footer';
import ProductDetails from './components/ProductDetails';
import ProductUpdate from './components/ProductUpdate';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbarmenu/>
        <Switch>

          <Route exact path="/" component={ShowProducts}/>
          <Route exact path="/addProduct" component={AddProduct}/>
          <Route exact path="/:id/" component={ProductDetails}/>
          <Route exact path="/:id/update" component={ProductUpdate}/>
        </Switch>
        <Footer/>
      </Router>
      
    </div>
  );
}

export default App;
