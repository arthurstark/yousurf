import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import FilterableVideoList from "./FilterableVideoList";
import WatchContainer from "./WatchContainer";

const App = () => (
    <Router>
        <div className='container'>
            <Route exact path="/" component={FilterableVideoList}/>
            <Route path="/watch" component={WatchContainer}/>
        </div>
    </Router>
);

export default App;
