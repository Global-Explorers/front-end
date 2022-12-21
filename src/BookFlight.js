import React from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class BookFlight extends React.Component {
    constructor() {
        super();
        this.state = {
            flights: [],
            saveFlights: [],
            updateFlight: null,
            isModalShown: false,
            showUpdateModal: false,
            cityName: ''
        }
    }
    componentDidMount = () => {
        // fetch flight data
        this.flightData();
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
    citySearch = (e) => {
        this.setState({
          cityName: e.target.value
        })
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
// })


    flightData = async () => {
        try {
            console.log('getting flights')
            let flightData = await axios.get(`${process.env.REACT_APP_SERVER}/flight?city=${this.state.cityName}`);
            console.log(flightData)
            this.setState({
                // flights: flightData.data
            })
        } catch (err) {
            console.log('Error has occured', err);
        }
    }
    render() {
        return (
            <>
                <Form onSubmit={this.flightData}>
                    <Form.Label>Origin City</Form.Label>
                    <Form.Control onInput={this.citySearch} type="text" name="city" placeholder="Enter city" />
                    <Form.Label>Destination City</Form.Label>
                    <Form.Control onInput={this.citySearch} type="text" name="city" placeholder="Enter city" />
                    <Form.Label>Date</Form.Label>
                    <Form.Control onInput={this.citySearch} type="text" name="date" placeholder="Enter date" />
                    <Form.Label>Adults</Form.Label>
                    <Form.Control onInput={this.citySearch} type="text" name="adults" placeholder="Number of adults" />
                    <Button type="submit">Explore!</Button>
                </Form>
            </>
        )
    }
}


















export default BookFlight;