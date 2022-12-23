import React from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import AllFlights from './AllFlights';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InfoFlight from './InfoFlight';

class BookFlight extends React.Component {
    constructor() {
        super();
        this.state = {
            flights: [],
            saveFlights: [],
            updateFlight: null,
            isModalShown: false,
            showUpdateModal: false,
            originLocationCode: '',
            destinationLocationCode: '',
            departureDate: '',
            adults: '',
            itineraries: '',
            clicks: 0
        }
    }
    componentDidMount = () => {
        // fetch flight data
        // this.flightData();
    }
    showModal = () => {
        this.setState({
            isModalShown: true,
        })
    }
    closeModal = () => {
        this.setState({
            isModalShown: false,
        })
    }
    UpdateOriginCity = (e) => {
        this.setState({
            originLocationCode: e.target.value
        })
    }
    UpdateDestinationCity = (e) => {
        this.setState({
            destinationLocationCode: e.target.value
        })
    }
    UpdateDeparture = (e) => {
        this.setState({
            departureDate: e.target.value
        })
    }
    NumberOfAdults = (e) => {
        this.setState({
            adults: e.target.value
        })
    }
    handleClick = () => {
        this.setState({ clicks: this.state.clicks + 1 });
    }

    //async function getAirportCodes(location) {
    // try {
    //     const response = await axios.get('https://api.amadeus.com/v1/reference-data/locations/airports', {
    //       params: {
    //         subType: 'AIRPORT',
    //         keyword: location
    //       },
    //       headers: {
    //         'Authorization': `Bearer ${API_KEY}`



    flightData = async (e) => {
        e.preventDefault()
        try {
            console.log('getting flights')
            let flightData = await axios.get(`${process.env.REACT_APP_SERVER}/flight?originLocationCode=${this.state.originLocationCode}&destinationLocationCode=${this.state.destinationLocationCode}&departureDate=${this.state.departureDate}&adults=${this.state.adults}`);
            console.log('testing')
            let shortenFlightArray = flightData.data.slice(0, 3)
            this.setState({
                flights: shortenFlightArray
            })
        } catch (err) {
            console.log('Error has occured', err);
        }
    }
    render() {
        console.log(this.state.flights);
        return (
            <>
            
                <Container>

                    <Form onSubmit={this.flightData}>
                        <Row>
                            <Col><Form.Label id='searchLable'>Origin City</Form.Label>  </Col>
                            <Col>  <Form.Control onInput={this.UpdateOriginCity} type="text" name="origin" placeholder="Enter origin code" /></Col>
                            <Col> <Form.Label id='searchLable'>Destination City</Form.Label>  </Col>
                            <Col>  <Form.Control onInput={this.UpdateDestinationCity} type="text" name="destination" placeholder="Enter destination code" /></Col>
                            <Col> <Form.Label id='searchLable'>Date</Form.Label>  </Col>
                            <Col> <Form.Control onInput={this.UpdateDeparture} type="text" name="date" placeholder="Enter date" /></Col>
                            <Col> <Form.Label id='searchLable'>Adults</Form.Label>  </Col>
                            <Col> <Form.Control onInput={this.NumberOfAdults} type="text" name="adults" placeholder="Number of adults" /></Col>
                            <Col>  <Button type="submit">Explore!</Button></Col>
                        </Row>
                    </Form>

                </Container>
                {/* <AllFlights flights={this.state.flights} /> */}
                <InfoFlight flights={this.state.flights}/>

            </>
        )
    }
}


















export default BookFlight;