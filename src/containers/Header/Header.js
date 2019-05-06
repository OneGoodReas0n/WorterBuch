import React from "react";
import { Row, Col, Input, Alert } from "reactstrap";

// Components
import AddWordModal from "./components/AddWordModal"
import Test from "../../components/Test"

// CSS
import styles from "./Header.module.css";
import "./Header.css"

// SVGs
import { ReactComponent as SVGNotification } from "./icons/notification.svg";
import { ReactComponent as SVGPlus } from "./icons/plus.svg";
import { ReactComponent as SVGSettings } from "./icons/settings.svg";

class Header extends React.Component {

    constructor() {
        super()
        this.state = {
            isAddWordOpen: false,
            isAlertSuccessShow: false
        }
        this.openAddWordModal = this.openAddWordModal.bind(this)
        this.showAlert = this.showAlert.bind(this)
    }

    openAddWordModal() {
        this.setState((prev) => ({
            isAddWordOpen: !prev.isAddWordOpen
        }))
    }

    showAlert() {
        this.setState((prev) => ({
            isAlertSuccessShow: !prev.isAlertSuccessShow
        }))
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
                            <div className="pointer-cursor" onClick={this.openAddWordModal}><SVGPlus className="panel_button" /></div>
                            <div className="pointer-cursor" ><SVGNotification className="panel_button" /></div>
                            <div className="pointer-cursor" ><SVGSettings className="panel_button" /></div>
                        </div>
                    </Col>
                </Row>
                {/* Modals */}
                <AddWordModal toggle={this.openAddWordModal} isOpen={this.state.isAddWordOpen} successToggle={this.showAlert}/>
                <Alert className="alert_style" color="success" isOpen={this.state.isAlertSuccessShow}>
                    <p>Word has been added!</p>
                </Alert>
                {/* <Test /> */}
            </div>
        )
    }
}

export default Header