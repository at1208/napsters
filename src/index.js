import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Homepage from './components/homepage';
import Dynamic from './components/dynamic';
import { BrowserRouter , Route} from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
     <Route path="/" component={Homepage} exact />
     <Route path="/:url" component={Dynamic} />
  </BrowserRouter>,
  document.getElementById('root')
);
