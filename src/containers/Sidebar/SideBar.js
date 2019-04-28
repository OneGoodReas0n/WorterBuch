import React from "react";
import { Row, Col } from "reactstrap";
import { NavLink } from "react-router-dom"

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
            sections: routes,
            styles: styles,
            neededClassName: ""
        }

    }

    render() {
        return (
            <div className={styles.main}>
                <div>
                    <Row>
                        <Col className={styles.user_block}>
                            <div>
                                <Avatar className={styles.user_avatar} />
                                <span className={styles.user_name}>Illia Korobov</span>
                            </div>
                        </Col>
                    </Row>
                    {this.state.sections.map((e, index) => {
                        return (
                            <NavLink to={e.path} exact={e.exact} className="d-block route_link" activeClassName={e.activeClassName} key={index}>
                                <Section section={e} styles={this.state.styles} activeClass={this.state.neededClassName} />
                            </NavLink>
                        )
                    })}
                </div >
            </div >
        )
    }
}

export default Sidebar