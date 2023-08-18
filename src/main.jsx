import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {hydrate,render} from "react-dom"


const Apps = (
  
    <App />
  
);

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(Apps, rootElement);
} else {
  render(Apps, rootElement);
}