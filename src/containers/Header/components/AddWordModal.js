import React from "react"
import {
    Modal, ModalHeader, ModalBody, ModalFooter, Button, Form, FormGroup, Input, Label, Row, Col,
} from "reactstrap"

// Data
import types from "./WordTypes";

//CSS
import styles from "./Modal.module.css"

//SVG
import { ReactComponent as SVGPlus } from "../icons/open_form.svg";

export default class AddWordModal extends React.Component {

    constructor(props) {
        super(props)
        function getDate() {
            const date = new Date()
            return `${date.getFullYear()}-${String(date.getMonth() + 1).length === 1 ? String("0" + Number(date.getMonth() + 1))
                : Number(date.getMonth() + 1)}-${String(date.getDate()).length === 1 ? String("0" + Number(date.getDate())) : date.getDate()}`
        }

        this.state = {
            types: types,
            getDateFunc: getDate,
            isThemeFormVisible: false,
            isSourceFormVisible: false,
            isThemesLoaded: false,
            isSourcesLoaded: false,
            word: {
                original: '',
                translate: '',
                type: '',
                date: getDate(),
                theme: '',
                source: ''
            },
            theme: {
                theme_title: '',
                theme_description: '',
            },
            source: {
                source_title: '',
                source_description: '',
            },
            themes: [],
            sources: [],
        }
        this.onChange = this.onChange.bind(this)

        this.resetForm = this.resetForm.bind(this)
        this.toggleAdditionForm = this.toggleAdditionForm.bind(this)

        this.saveWordInDb = this.saveWordInDb.bind(this)
        this.saveThemeInDb = this.saveThemeInDb.bind(this)
        this.saveSourceInDb = this.saveSourceInDb.bind(this)

        this.setSourcesFromApi = this.setSourcesFromApi.bind(this)
        this.setThemesFromApi = this.setThemesFromApi.bind(this)
    }

    // Change data in WORD inputs 
    onChange(e) {
        const target = e.target
        const value = target.value;
        const name = target.name
        String(name).startsWith("theme_") ?
            this.setState((prev) => ({
                ...prev,
                theme: {
                    ...prev.theme,
                    [name]: value
                }
            })) : String(name).startsWith("source_") ?
                this.setState((prev) => ({
                    ...prev,
                    source: {
                        ...prev.source,
                        [name]: value
                    }
                })) :
                this.setState((prev) => ({
                    ...prev,
                    word: {
                        ...prev.word,
                        [name]: value
                    }
                }))
    }

    // WORD Form reset after success send
    resetForm() {
        this.setState((prev) => ({
            ...prev,
            word: {
                ...prev.word,
                original: "",
                translate: "",
                theme: '',
                source: ''
            }
        }))
    }

    // Toggle for Theme and Source inputs for adding
    toggleAdditionForm(e) {
        const name = e.target.name
        name === "theme_add" ?
            this.setState((prev) => ({ isThemeFormVisible: !prev.isThemeFormVisible })) :
            this.setState((prev) => ({ isSourceFormVisible: !prev.isSourceFormVisible }))
    }

    // Save WORD request to a Server
    saveWordInDb() {
        const data = this.state.word
        fetch('http://localhost:8888/api/words', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                original: data.original,
                translate: data.translate,
                type: data.type,
                date: data.date,
                theme: data.theme,
                source: data.source
            })
        }).then((response) => {
            if (response.ok) {
                this.props.toggle()
                this.resetForm()
                this.props.successToggle()
                setTimeout(this.props.successToggle, 2500)
            }
        }
        ).catch((error) =>
            console.log(error)
        )
    }

    // Save THEME request to a Server
    saveThemeInDb(e) {
        const data = this.state.theme
        fetch('http://localhost:8888/api/themes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: data.theme_title,
                description: data.theme_description
            })
        }).then((response) => {
            if (response.ok) {
                this.setState((prev) => ({
                    ...prev,
                    isThemeFormVisible:false,
                    theme: {
                        ...prev.theme,
                        theme_title: '',
                        theme_description: ''
                    }
                }))
            }
        }
        ).catch((error) =>
            console.log(error)
        )
        this.setThemesFromApi()
    }

    saveSourceInDb(e) {
        const data = this.state.source
        fetch('http://localhost:8888/api/sources', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: data.source_title,
                description: data.source_description
            })
        }).then((response) => {
            if (response.ok) {
                this.setState((prev) => ({
                    ...prev,
                    isSourceFormVisible:false,
                    source: {
                        ...prev.source,
                        source_title: '',
                        source_description: ''
                    }
                }))
            }
        }
        ).catch((error) =>
            console.log(error)
        )
        this.setSourcesFromApi()
    }

    setThemesFromApi() {
        fetch("http://localhost:8888/api/themes")
            .then((response => response.json()))
            .then(json => (
                this.setState((prev) => ({
                    themes: json,
                    isThemesLoaded: true
                }))
            ))
            .catch((response) => (
                console.log(response)
            ))
    }

    setSourcesFromApi() {
        fetch("http://localhost:8888/api/sources")
            .then((response => response.json()))
            .then(json => (
                this.setState((prev) => ({
                    sources: json,
                    isSourcesLoaded: true
                }))
            ))
            .catch((response) => (
                console.log(response)
            ))
    }

    // getOneFromApi(e) {
    //     let data = {};
    //     fetch(e._links.self.href)
    //         .then(response => response.json())
    //         .then(json => (
    //             data = json))
    //         .catch(error => (console.log(error)))
    //     return data;
    // }

    componentDidMount() {
        console.log("Did Mount")
        this.setSourcesFromApi()
        this.setThemesFromApi()
    }

    render() {
        return (
            <div>
                <Modal isOpen={this.props.isOpen} toggle={this.props.toggle} className={styles.main}>
                    <ModalHeader toggle={this.props.toggle} className="MainTextStyle">Create new word</ModalHeader>
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
                                        <select className={styles.typeBox} id="type_select" name="type" onChange={this.onChange} value={this.state.word.type}>
                                            <option value="" disabled>Select type</option>
                                            {this.state.types.map((e) => (
                                                <option key={e.id} value={e.id}>{e.name}</option>
                                            ))}
                                        </select>
                                    </FormGroup>
                                </Col>
                                <Col md={3}>
                                    <FormGroup>
                                        <Label for="date_select" className="SecondaryTextStyle">Date</Label>
                                        <Input type="date" id="date_select" name="date" onChange={this.onChange} value={this.state.word.date} />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="theme_select" className="SecondaryTextStyle">Theme</Label>
                                        <Row>
                                            <Col md={7} className="pr-2">
                                                <select className={styles.typeBox} id="theme_select" name="theme" onChange={this.onChange} value={this.state.word.theme}>
                                                    <option value="" disabled>Select theme</option>
                                                    {this.state.isThemesLoaded === true && this.state.themes.length > 0 ? this.state.themes.map((e) => (
                                                        <option key={e.id} value={e.id}>{e.name}</option>
                                                    )) : ""}
                                                </select>
                                            </Col>
                                            <Col md={2} className="pl-0">
                                                <Button className="form_button" name="theme_add" onClick={this.toggleAdditionForm}>
                                                    <SVGPlus className="svg_form_style" />
                                                </Button>
                                            </Col>

                                        </Row>
                                        {this.state.isThemeFormVisible ?
                                            <FormGroup>
                                                <Row className="mt-3">
                                                    <Col md={6} className="pr-2">
                                                        <Input placeholder="Name" name="theme_title"
                                                            value={this.state.theme.theme_title} onChange={this.onChange} />
                                                    </Col>
                                                    <Col md={6} className="pl-2">
                                                        <Input placeholder="Description" name="theme_description"
                                                            value={this.state.theme.theme_description} onChange={this.onChange} />
                                                    </Col>
                                                </Row>
                                                <Row className="mt-3">
                                                    <Col className="justify-content-end d-flex">
                                                        <Button color="primary" onClick={this.saveThemeInDb}>Add</Button>
                                                    </Col>
                                                </Row>
                                            </FormGroup>
                                            : ""}
                                    </FormGroup>
                                </Col>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="source_select" className="SecondaryTextStyle">Source</Label>
                                        <Row>
                                            <Col md={7} className="pr-2">
                                                <select className={styles.typeBox} id="source_select" name="source" onChange={this.onChange} value={this.state.word.source}>
                                                    <option value="" disabled>Select source</option>
                                                    {this.state.isSourcesLoaded === true && this.state.sources.length > 0 ? this.state.sources.map((e) => (
                                                        <option key={e.id} value={e.id}>{e.name}</option>
                                                    )) : ""}
                                                </select>
                                            </Col>
                                            <Col md={2} className="pl-0">
                                                <Button className="form_button" name="source_add" onClick={this.toggleAdditionForm}>
                                                    <SVGPlus className="svg_form_style" />
                                                </Button>
                                            </Col>
                                        </Row>
                                        {this.state.isSourceFormVisible ?
                                            <FormGroup >
                                                <Row className="mt-3">
                                                    <Col md={6} className="pr-2">
                                                        <Input placeholder="Name" name="source_title"
                                                            value={this.state.source.source_title} onChange={this.onChange} />
                                                    </Col>
                                                    <Col md={6} className="pl-2">
                                                        <Input placeholder="Description" name="source_description"
                                                            value={this.state.source.source_description} onChange={this.onChange} />
                                                    </Col>
                                                </Row>
                                                <Row className="mt-3">
                                                    <Col className="justify-content-end d-flex">
                                                        <Button color="primary" onClick={this.saveSourceInDb}>Add</Button>
                                                    </Col>
                                                </Row>
                                            </FormGroup> : ""
                                        }

                                    </FormGroup>
                                </Col>
                            </Row>
                            {/* <Button onClick={this.check}>Check</Button> */}
                        </Form>
                    </ModalBody>
                    <ModalFooter className="justify-content-between">
                        <Button color="secondary" className="flex-left" onClick={this.props.toggle}>Cancel</Button>
                        <Button color="primary" onClick={this.saveWordInDb}>Save</Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
}