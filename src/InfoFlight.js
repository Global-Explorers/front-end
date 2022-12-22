import React from "react";
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

class InfoFlight extends React.Component {

    render() {
        return (
            <>

                <Container className="pt-5">
                        <Row sm={3} md={4} lg={5} >

                            {this.props.flights.map((flight, i) => (
                    <Col >

                                <Card key={i}>
                                    <Card.Title>Flight Option</Card.Title>
                                    <Card.Body>
                                        <p>From: {flight.itineraries[0].segments[0].departure.iataCode}</p>
                                        <p>Gate: {flight.itineraries[0].segments[0].arrival.terminal}</p>
                                        <p>Departure: {flight.itineraries[0].segments[0].departure.at}</p>
                                        <p>Arrival: {flight.itineraries[0].segments[0].arrival.at}</p>
                                        <p>Destination: {flight.itineraries[0].segments[0].arrival.iataCode}</p>
                                        <p>Price: {flight.price.total}</p>
                                        <p>Cabin Type: {flight.travelerPricings[0].fareDetailsBySegment[0].cabin}</p>
                                        <p>Airline: {flight.validatingAirlineCodes}</p>
                                    </Card.Body>
                                </Card>

                    </Col>
                            ))}
                        </Row>
                </Container>
            </>
        )
    }


}

export default InfoFlight;