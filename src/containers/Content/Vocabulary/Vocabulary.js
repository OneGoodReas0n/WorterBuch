import React from "react";
import { Row, Col } from "reactstrap"
import { NavLink } from "react-router-dom"

// CSS
import styles from "./Vocabulary.module.css"

export default function home(props) {

    const routes = props.routes
    return (
        <div className="main">
            <Row>
                <Col className="content_box gradientB_B pt-3 pb-3">
                    <div className={`${styles.title_text} text-center`}>
                        <span>Vocabulary</span>
                    </div>
                    <div className={`pt-3 pl-4 pb-2`}>
                        <span className={styles.filter_title_text}>Filters</span>
                        <div className="pt-3">
                            {routes.find((e) => e.name==="Vocabulary").recources.map((e, index) => (
                                <NavLink to={e.path} key={index} exact={e.exact} className={`${styles.filter_components_link} mr-3`} activeClassName={`${e.className} filter_component_activ`}>
                                    <span className={`${e.className} ${styles.filter_components_text}`}>{e.name}</span>
                                </NavLink>
                            ))}
                        </div>
                    </div>
                </Col>
            </Row>
            <Row className="mt-3">
                <Col className="content_box gradientB_B pt-3 pb-3">
                    <div className="alphabet_table"></div>
                </Col>
            </Row>
        </div>
    )
}

