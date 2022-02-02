import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import styled from 'styled-components';

const BoatDashboardStyled = styled.div`
  .lanes-container{
    border-top: 1px #000000 solid;
  }
  .swimLane{
    background-color: #bec7d5;
    margin-left:2px;
    margin-right:2px;
    padding: 5px;
    margin-top:10px;
  }
`

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
    <BoatDashboardStyled>
      <div className="lanes-container">
        <Container>
          <Row>
            {listOfBoats}
          </Row>
        </Container>
      </div>
    </BoatDashboardStyled>
  );
};

export default Dashboard