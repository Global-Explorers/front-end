import React from 'react';

class AllFlights extends React.Component {
    render() {
        return (
            <>
                {this.props.flights.map((flight, i) => (
                    <div key={i}>
                       <p>From: {flight.itineraries[0].segments[0].departure.iataCode}</p>
                       <p>Gate: {flight.itineraries[0].segments[0].arrival.terminal}</p>
                       <p>Departure: {flight.itineraries[0].segments[0].departure.at}</p>
                       <p>Arrival: {flight.itineraries[0].segments[0].arrival.at}</p>
                       <p>Destination: {flight.itineraries[0].segments[0].arrival.iataCode}</p>
                      <p>Price: {flight.price.total}</p>
                      <p>Cabin Type: {flight.travelerPricings[0].fareDetailsBySegment[0].cabin}</p>

                    </div>
                ))}
            </>
        )
    }
}
export default AllFlights;