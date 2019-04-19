import React from 'react';

import { BrowserRouter } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Row, Col } from "reactstrap";
import Header from "./containers/Header/Header";
import Sidebar from "./containers/Sidebar/SideBar";
import Content from "./containers/Content/Content";
import "./App.css";
import "./Fonts.css";

class App extends React.Component {

  constructor() {
    super()
    this.state = {

    }
  }

  render() {
    return (
      <BrowserRouter>
        <div id="App">
          <Header />
          <Row id="MainPart" className="w-100">
            <Col md={2} id="SideBar_box">
              <Sidebar />
            </Col>
            <Col md={10} id="Content_box">
              <Content />
            </Col>
          </Row>
        </div>
      </BrowserRouter>
    )
  }

}

export default App;