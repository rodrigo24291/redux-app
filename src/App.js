import React from 'react';
import { Header } from './component/Header';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import {Nuevoproducto} from './component/Nuevoproducto';
import {Editarproducto} from './component/Editarproducto';
import {Producto} from './component/Productos';
import{Provider} from 'react-redux'
import store from './store';
function App() {
  return (
    <Router>
    <Provider store={store}>
<Header/>
<div className="container">
<Switch>
  <Route exact path="/" component={Producto} />
  <Route exact path="/producto" component={Nuevoproducto} />
  <Route exact path="/producto/editar/:id" component={Editarproducto} />
  
</Switch>
</div>
</Provider>
    </Router>
  );
}

export default App;
