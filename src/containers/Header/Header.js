import React from "react";
import { Row, Col, Input, NavLink } from "reactstrap";
import styles from "./Header.module.css";
import "./Header.css"
import { ReactComponent as SVG_notification } from "./icons/notification.svg";
import { ReactComponent as SVG_plus } from "./icons/plus.svg";
import { ReactComponent as SVG_settings } from "./icons/settings.svg";

class Header extends React.Component {

    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        return (
            <div id="divMain">
                <Row id="container" className="d-flex align-items-center">
                    <Col md={2}>
                        <div id="logo_box">
                            <h4>Worterbuch</h4>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div id="search_box" className="d-flex align-items-center">
                            <Input placeholder="Search..." className={styles.input} />
                        </div>
                    </Col>
                    <Col md={6} className="d-flex justify-content-end">
                        <div id="buttons_panel">
                            <a href="/add"><SVG_plus className="panel_button" /></a>
                            <a href="/notifications"><SVG_notification className="panel_button" /></a>
                            <a href="/settings"><SVG_settings className="panel_button" /></a>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Header