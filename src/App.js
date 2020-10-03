import React from 'react';
import RandomImg from './randomImg.js'
import SearchPage from './search-img.js'
import ImageInfo from './image-info.js'

import './App.css';
import {Switch, Route} from "react-router-dom"

function App() {

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={RandomImg} />
        <Route  path="/search/:query" component={SearchPage} />
        <Route path="/:imageid" component={ImageInfo} />
      </Switch>
    </div>
  );
}

export default App;

