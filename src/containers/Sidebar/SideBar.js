import React from "react";
import { Row, Col } from "reactstrap";
import {Link} from "react-router-dom"

// SVGs
import { ReactComponent as Avatar } from "./icons/avatar.svg";

// Data
import routes from "../../routes";

// CSS
import styles from "./Sidebar.module.css";

// Components
import Section from "./sections/Section";

class Sidebar extends React.Component {

    constructor() {
        super()
        this.state = {
            sections : routes,
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
                        <Link to={e.path}>
                            <Section section = {e.name} styles = {this.state.styles} key={e.name} />
                        </Link>
                    ))}
                </div >
            </div >
        )
    }
}

export default Sidebar