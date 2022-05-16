import './App.css';
import React, { Component } from 'react'
// import Navbar from './Components/Navbar';
import News from './Components/News';

export default class App extends Component {
  render() {
    return (
      
      <>
      <h2 id="heading">News APP</h2>
      <div>
        <News />
      </div>
      </>
      
      
      
    )
  }
}
