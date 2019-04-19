import React from "react";

import { Row, Col } from "reactstrap";
import styles from "./Content.module.css";
import tasks from "./tasks";
import Task from "./components/Task";

class Content extends React.Component {

    constructor() {
        super()
        let date = new Date();
        this.state = {
            tasks: tasks,
            date: date,
        }
        this.getNameOfMonth = this.getNameOfMonth.bind(this)
    }

    getNameOfMonth(i) {
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

    render() {
        return (
            <div className={styles.main}>
                <Row>
                    <Col md={8}>
                        <Col className={`${styles.progress_bar} ${styles.content_box}`}>
                            <Row>
                                <Col md={2} className={styles.progress_bar_date}>
                                    <Row className={`${styles.progress_bar_date_text} justify-content-center`} >
                                        <Col md={12}>
                                            <p className="mb-0">{this.state.date.getDate()}</p>
                                        </Col>
                                        <Col>
                                            <p>{this.getNameOfMonth(this.state.date.getMonth())}</p>
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
                        <Col className={`${styles.main_content} ${styles.content_box}`}>
                        </Col>
                    </Col>
                    <Col>
                        <Col className={`${styles.task_table} ${styles.content_box}`}>
                            <Row>
                                <Col className="text-center mt-4">
                                    <span className={styles.task_table_title_text}>Die Ziele des tages</span>
                                </Col>
                            </Row>
                            {this.state.tasks.map((e) => (
                                <Task text={e.name} key={e.name} />
                            ))}
                        </Col>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Content