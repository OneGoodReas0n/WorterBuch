import React from 'react';
import { createStore } from 'redux';
import { BrowserRouter, Switch, Route,Redirect } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Header from './containers/HeaderComponent';
import Content from './containers/ContentComponent';
import Footer from './containers/FooterComponent';
import './App.css'
import data from './data';

class App extends React.Component {

  constructor() {
    super()

    this.state = {
      contacts: data
    }
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Content contacts={this.state.contacts}/>
          <Footer />
        </div>
      </BrowserRouter>
    )
  }

}

export default App;