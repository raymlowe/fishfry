import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

export const Dashboard = (data) => {

  let listOfBoats = data.lanes.map((swimLane, index) => {
    const laneName = swimLane.status;
    let boatNames = JSON.parse(swimLane.boatName)
    return (
      <Col key={laneName}>
        <div className="swimLane" >
          <h2 >{laneName}</h2>
          <ul>
            {boatNames.map(boatName => (
              <li key={boatName}>
                {boatName}
              </li>
            ))}
          </ul>
        </div>
      </Col>
    )
  });

  return (
    <div className="stock-container">
      <Container>
        <Row>
          {listOfBoats}
        </Row>
      </Container>
    </div>
  );
};

export default Dashboard