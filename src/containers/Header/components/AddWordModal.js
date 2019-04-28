import React from "react"
import {
    Modal, ModalHeader, ModalBody, ModalFooter, Button, Form, FormGroup, Input, Label, Row, Col,
} from "reactstrap"

// Data
import data from "./WordTypes";

//CSS
import styles from "./Modal.module.css"

//SVG
import { ReactComponent as SVGPlus } from "../icons/plus.svg";

export default class AddWordModal extends React.Component {

    constructor(modal) {
        super()
        function getDate() {
            const date = new Date()
            return `${date.getFullYear()}-${String(date.getMonth() + 1).length === 1 ? String("0" + Number(date.getMonth() + 1))
                : Number(date.getMonth() + 1)}-${date.getDate()}`
        }

        this.state = {
            isOpen: modal.isOpen,
            toggle: modal.toggle,
            types: data,
            isSourceFromOpen: false,
            isGroupFormOpen: false,
            word: {
                original: '',
                translate: '',
                type: '',
                date: getDate(),
                // source: {},
                // group: {},
            }
        }
        this.toggleDropType = this.toggleDropType.bind(this)
        this.onChange = this.onChange.bind(this)
        this.check = this.check.bind(this)
        this.saveWordInDb = this.saveWordInDb.bind(this)
    }

    toggleDropType() {
        this.setState((prev) => ({
            isDropTypeOpen: !prev.isDropTypeOpen
        }))
    }

    onChange(e) {
        const target = e.target
        const value = target.value;
        const name = target.name
        this.setState((prev) => ({
            ...prev,
            word: {
                ...prev.word,
                [name]: value
            }
        }))
    }

    check(e) {
        e.preventDefault()
        console.log(`Original: ${this.state.word.original}`)
        console.log(`Translate: ${this.state.word.translate}`)
        console.log(`Type: ${this.state.word.type}`)
        console.log(`Date: ${this.state.word.date}`)
    }

    toggleForm(e) {
        e.preventDefault()
        const name = e.target.href
        name === "addSource" ? this.setState((prev) => ({ isSourceFromOpen: !prev.isSourceFromOpen })) :
            this.setState((prev) => ({ isGroupFormOpen: !prev.isGroupFormOpen }))
    }

    saveWordInDb() {
        const data = this.state.word
        // fetch('https://localhost:8888/api').then((response)=>(console.log(response.text)))
        fetch('https://localhost:8888/api/words', {
            method: 'POST',
            headers: {
                "Content-type": "application/json;"
            },
            body: JSON.stringify({
                original: data.original,
                translate: data.translate,
                type: data.type,
                date: data.date
            })
        }).then((response) =>(
            console.log(response) 
        )).catch((error) =>
            console.log(error)
        )
    }

    render() {
        return (
            <Modal isOpen={this.state.isOpen()} toggle={this.state.toggle} className={styles.main}>
                <ModalHeader toggle={this.state.toggle} className="MainTextStyle">Create new word</ModalHeader>
                <ModalBody>
                    <Form>
                        <Row form>
                            <Col md={3}>
                                <FormGroup>
                                    <Label for="original_text" className="SecondaryTextStyle">Original</Label>
                                    <Input placeholder="Original text" id="original_text" name="original"
                                        value={this.state.word.original} onChange={this.onChange} />
                                </FormGroup>
                            </Col>
                            <Col md={3}>
                                <FormGroup>
                                    <Label for="translate_text" className="SecondaryTextStyle">Translate</Label>
                                    <Input placeholder="Translate text" id="translate_text" name="translate"
                                        value={this.state.word.translate} onChange={this.onChange} />
                                </FormGroup>
                            </Col>
                            <Col md={3}>
                                <FormGroup>
                                    <Label for="type_select" className="SecondaryTextStyle">Type</Label>
                                    <select className={styles.typeBox} id="type_select" name="type" value={this.state.word.type} onChange={this.onChange}>
                                        <option disabled value="">Select type</option>
                                        {this.state.types.map((e) => (
                                            <option key={e.id} value={e.id}>{e.name}</option>
                                        ))}
                                    </select>
                                </FormGroup>
                            </Col>
                            <Col md={3}>
                                <FormGroup>
                                    <Label for="date_select" className="SecondaryTextStyle">Date</Label>
                                    <Input type="date" id="date_select" value={this.state.word.date} name="date" onChange={this.onChange} />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row form hidden>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="source_select" className="SecondaryTextStyle">Source</Label>
                                    <Row className="align-items-center">
                                        <Col md={6}>
                                            <select className={`${styles.typeBox}`} id="source_select" name="source" value={this.state.word.source} onChange={this.onChange}>
                                                <option value="" selected disabled>Select source</option>
                                                {/* {this.state.types.map((e) => (
                                            <option key={e.id} value={e.id}>{e.name}</option>
                                        ))} */}
                                            </select>
                                        </Col>
                                        <Col className="p-0 float-left">
                                            <a href="/addSource" onClick={this.toggleForm}><SVGPlus className="form_button" /></a>
                                        </Col>
                                    </Row>
                                    <Row hidden>
                                        <Col>
                                            <Input placeholder="Source name" />
                                        </Col>
                                        <Col>
                                            <Input placeholder="Source description" />
                                        </Col>
                                    </Row>
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup>
                                    <Label for="group_select" className="SecondaryTextStyle">Group</Label>
                                    <Row className="align-items-center">
                                        <Col className="pr-2">
                                            <select className={styles.typeBox} id="group_select" name="source" value={this.state.word.group} onChange={this.onChange}>
                                                <option value="" selected disabled>Select group</option>
                                                {/* {this.state.types.map((e) => (
                                            <option key={e.id} value={e.id}>{e.name}</option>
                                        ))} */}
                                            </select>
                                        </Col>
                                        <Col className="p-0">
                                            <a href="/addGroup" onClick={this.toggleForm}><SVGPlus className="form_button" /></a>
                                        </Col>
                                    </Row>
                                    <Row hidden>
                                        <Col>
                                            <Input placeholder="Source name" />
                                        </Col>
                                        <Col>
                                            <Input placeholder="Source description" />
                                        </Col>
                                    </Row>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Button onClick={this.check}>Check</Button>
                    </Form>
                </ModalBody>
                <ModalFooter className="justify-content-between">
                    <Button color="secondary" className="flex-left" onClick={this.toggle}>Cancel</Button>
                    <Button color="primary" onClick={this.saveWordInDb}>Save</Button>
                </ModalFooter>
            </Modal>
        )
    }
}