import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

function rendering(response) {
  ReactDOM.render(<App color="blue" data={response}/>, document.getElementById('root'));
}

export function apiFetch() {
  fetch('http://jsonplaceholder.typicode.com/posts/')
  .then(function(response) {
    return response.json()
  })
  .then(function(json) {
    rendering(json)
  })
}
rendering()
