import React, { Component } from 'react';
import logo from './logo.svg';
import { apiFetch } from './index'
import './App.css';
import 'font-awesome/css/font-awesome.min.css'

const array1 = [1, 2, 3, 4];
const arraySlider = [
  "http://lorempixel.com/400/200/sports/1/Dummy-Text/",
  "http://lorempixel.com/400/200/sports/",
  "http://lorempixel.com/400/200/"
]
const App = (props) => (
  <div className="App">
    <div className="App-header">
      <h2
        onClick={apiFetch}
        style={{color: props.color}}>
        Click para hacer la peticion
      </h2>
    </div>
    {
      props.data &&
      props.data.map(
        (item, index) => (
          <div style={{height: "100px", background: "grey"}}>
            <h2 style={{color: "white"}}>{item.title}</h2>
          </div>

        )
      )
    }
  </div>
);

export default App;
