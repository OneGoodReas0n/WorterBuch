import React from "react";

import { Row, Col } from "reactstrap";
import { ReactComponent as Avatar } from "./icons/Rectangle.svg";
import data from "./sections/data";
import styles from "./Sidebar.module.css";
import Section from "./sections/Section";

class Sidebar extends React.Component {

    constructor() {
        super()
        this.state = {
            sections : data,
            styles : styles,
        }
    }

    render() {
        return (
            <div className={styles.main}>
                <div className={styles.container}>
                    <Row>
                        <Col>
                            <div>
                                <Avatar className={styles.user_avatar} />
                                <span className={styles.user_name}>Illia Korobov</span>
                            </div>
                        </Col>
                    </Row>
                    {this.state.sections.map((e)=>(
                        <Section section = {e.name} styles = {this.state.styles} key={e.name} />
                    ))}
                </div >
            </div >
        )
    }
}

export default Sidebar