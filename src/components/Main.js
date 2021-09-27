import { useState, useEffect } from 'react'
import { Container, Row, Col, Button, Card } from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Data from '../data.json'
import Maps from './Maps'

const Main = () => {

    console.log(Data)
    return (
        <Col className="d-flex .flex-column align-items-center justify-content-center my-5 py-5">
            <Row className="d-flex .flex-column align-items-center justify-content-center my-5 py-5">
                <h1 className="text-center my-5 py-lg-5">Invitation to Our Wedding</h1>
                <h2 className="text-center my-lg-1">{Data.name.[0]} & {Data.name.[1]}</h2>
                <Row className="my-lg-4 d-flex align-items-center justify-content-center">
                    <Col className="border-end p-lg-4" md={1}>
                        <h2 class="text-center">{Data.day}</h2>
                    </Col>
                    <Col className="border-end py-lg-5 pr-lg-1 pl-lg-4" md={1}>
                        <h2 class="text-center">{Data.month}</h2>
                    </Col>
                    <Col className="border-end p-lg-5" md={1}>
                        <h2 class="text-center" >{Data.year}</h2>
                    </Col>
                </Row>
                <Col>
                    <h2 class="text-center">{Data.time}</h2>
                </Col>

            </Row>
        </Col>
    )
}

export default Main
