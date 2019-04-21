import React from "react";

import { Row, Col } from "reactstrap";
import styles from "./Task.module.css"
export default function Task(props) {

    const task_text = props.text;

    return (
        <Row className={styles.task_block}>
            <Col md={1}>
                <div className={styles.Rectangle}></div>
            </Col>
            <Col className="p-0">
                <div><span className={styles.task_table_task_text}>{task_text}</span></div>
            </Col>
        </Row>
    )
}