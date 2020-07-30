import React from 'react';
import ReactDOM from 'react-dom';
import './reset.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './pages/homepage';
import CadastroVideo from './pages/cadastro/video'
import CadastroCategoria from './pages/cadastro/categoria';

const notFound = () => (<div> Página 404 <br/> Not found!</div>)

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact/>
      <Route path="/cadastro/video" component={CadastroVideo}/>
      <Route path="/cadastro/categoria" component={CadastroCategoria}/>
      <Route component={notFound}/>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
