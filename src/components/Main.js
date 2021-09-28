// import { useState, useEffect } from 'react'
import { Container, Row, Col, Button, Card } from 'react-bootstrap'
import { Link } from "react-router-dom";
import Data from '../data.json'

const Main = () => {

    console.log(Data)
    return (
        <Container>
            <Row className="d-flex flex-column align-items-center justify-content-center my-5">
                <h1 className="text-center my-5">Invitation to Our Wedding</h1>
                <h2 className="text-center my-3">{Data.name[0]}<br/>&<br/>{Data.name[1]}</h2>
                <Row className="my-4 d-flex align-items-center justify-content-center">
                    <Col className="border-end py-2" sm={2}>
                        <h3 className="text-center">{Data.day}</h3>
                    </Col>
                    <Col className="border-end py-2" sm={2}>
                        <h3 className="text-center">{Data.month}</h3>
                    </Col>
                    <Col className="py-2" sm={2}>
                        <h3 className="text-center">{Data.year}</h3>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h2 className="text-center my-4">{Data.time}</h2>
                    </Col>
                </Row>
                <Row>
                    <Col className="d-flex align-items-center justify-content-center">
                        <Link className="text-center" to="/maps">Get Location</Link>
                    </Col>
                </Row>
            </Row>
        </Container>
    )
}

export default Main
