import React from "react";
import { Row, Col, Input } from "reactstrap";

// Components
import AddWordModal from "./components/AddWordModal"

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
            isDropDownTypeOpen: false
        }
        this.openAddWordModal = this.openAddWordModal.bind(this)
        this.getModalStatus = this.getModalStatus.bind(this)
    }

    openAddWordModal(e){
        e.preventDefault()
        this.setState((prev) =>({
            isAddWordOpen: !prev.isAddWordOpen
        }))
    }

    getModalStatus(){
        return this.state.isAddWordOpen
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
                            <a href="/add"><SVGPlus className="panel_button" onClick={this.openAddWordModal}/></a>
                            <a href="/notifications"><SVGNotification className="panel_button" /></a>
                            <a href="/settings"><SVGSettings className="panel_button" /></a>
                        </div>
                    </Col>
                </Row>
                {/* Modals */}
                <AddWordModal toggle={this.openAddWordModal} isOpen={this.getModalStatus}/>
            </div>
        )
    }
}

export default Header