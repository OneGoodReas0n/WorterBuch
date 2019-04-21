import React from 'react';

// PACKAGES
import { Row, Col } from "reactstrap";

// CSS
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import "./App.css";
import "./Fonts.css";
import "./Colors.css";

// PAGES
import Header from "./containers/Header/Header";
import Sidebar from "./containers/Sidebar/SideBar";
import Content from "./containers/Content/Content"

class App extends React.Component {

  constructor() {
    super()
    this.state = {

    }
  }

  render() {
    return (
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
    )
  }

}

export default App;