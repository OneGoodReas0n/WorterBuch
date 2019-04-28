import React from "react";

import { Row, Col } from "reactstrap";
import { ReactComponent as IconHome } from "../icons/home_icon.svg"
import { ReactComponent as IconBook } from "../icons/book_icon_flat.svg"
import { ReactComponent as IconRepeat } from "../icons/repeat_icon.svg"
import { ReactComponent as IconExam } from "../icons/exam_icon.svg"
import { ReactComponent as IconStats } from "../icons/stats_icon.svg"

export default function section(props) {
    const section = props.section;
    const styles = props.styles;

    return (
        <div className="p-3">
            <Row className="route_section">
                <Col md={3} className="pl-0">
                    <div className={`${styles.sections_section_icon_bg}`}>
                        {section.name === "Home" ? <IconHome className={styles.sections_section_icon} /> :
                            section.name === "Vocabulary" ? <IconBook className={styles.sections_section_icon} /> :
                                section.name === "Repeatitorium" ? <IconRepeat className={styles.sections_section_icon} /> :
                                    section.name === "Excersices" ? <IconExam className={styles.sections_section_icon} /> :
                                        section.name === "Statistic" ? <IconStats className={styles.sections_section_icon} /> : ""}
                    </div>
                </Col>
                <Col className="d-flex align-items-center">
                    <span className={styles.sections_section_name}>{section.name}</span>
                </Col>
            </Row>
        </div>
    )
}