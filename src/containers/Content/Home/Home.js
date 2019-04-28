import React from "react";
import { Row, Col } from "reactstrap"

// CSS
import styles from "./Home.module.css"

// Components
import Task from "./components/Task";
import tasks from "./data/tasks";

export default function home() {

    const date = new Date();

    const func = function (i) {
        switch (i) {
            case 0:
                return "Jan";
            case 1:
                return "Feb";
            case 2:
                return "März";
            case 3:
                return "Apr";
            case 4:
                return "Mai";
            case 5:
                return "Juni";
            case 6:
                return "Juli";
            case 7:
                return "Aug";
            case 8:
                return "Sep";
            case 9:
                return "Okt";
            case 10:
                return "Nov";
            case 11:
                return "Dec";
            default:
                return "null";
        }
    }

    return (
        <div className="main">
            <Row>
                <Col md={8}>
                    <Col className="content_box gradientB_W_B">
                        <Row className="pt-1 pb-1">
                            <Col md={2} className="d-flex justify-content-center text-center">
                                <Row className={`${styles.progress_bar_date_text} justify-content-center`} >
                                    <Col md={12}>
                                        <p className="mb-0">{date.getDate()}</p>
                                    </Col>
                                    <Col>
                                        <p>{func(date.getMonth())}</p>
                                    </Col>
                                </Row>
                            </Col>
                            <Col>
                                <Row  >
                                    <Col md={12} className={`${styles.progress_bar_title} text-center`}>
                                        <p className="mb-0">Deiner Fortschritt für heute</p>
                                    </Col>
                                    <Col>
                                        <div className={`${styles.progress_bar_item} text-center`}>
                                            <div className={styles.progress_bar_item_completed}>
                                            </div>
                                            <p className={styles.progress_bar_item_percent}>33%</p>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                    <Col className="content_box gradientB_B mt-4">
                        <Row>
                            <Col className="text-center pt-4 pb-2">
                                <span className={styles.task_table_title_text}>Die Ziele des Tags</span>
                            </Col>
                        </Row>
                    </Col>
                </Col>
                <Col>
                    <Col className="content_box gradientB_B">
                        <Row>
                            <Col className="text-center pt-4 pb-2">
                                <span className={styles.task_table_title_text}>Die Ziele des Tags</span>
                            </Col>
                        </Row>
                        <div className="pt-2 pb-4">
                            {tasks.map((e) => (
                                <Task text={e.name} key={e.name} />
                            ))}
                        </div>
                    </Col>
                </Col>
            </Row>
        </div>
    )
}

