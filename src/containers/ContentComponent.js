import React from 'react';
import { Button, Row, Col } from 'reactstrap';
import {Switch, Route, Redirect} from 'react-router-dom';
import Home from '../components/home';
import About from '../components/about';
import Contact from '../components/contacts'

export default class Content extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            contacts: props.contacts
        }
    }

    render() {
        return (
            <div>
                <Row className="r-m-5" style={{minHeight:500}}>
                    <Col md={{ size: 10, offset: 1 }} sm="12">
                        <Row style={{ marginBottom: "30" }}>
                            <Switch>
                                <Route path='/home' component={Home}></Route>
                                <Route exact path='/about' component={About}></Route>
                                <Route exact path='/contact' component={()=> <Contact contacts={this.state.contacts}/> }></Route>
                                <Redirect to="/home" />
                            </Switch>
                        </Row>
                    </Col>
                </Row>
            </div>
        )
    }

}

