import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import styled from 'styled-components';
import BoatAction from './boataction';
import BoatDelete from './boatdelete';

const ModifyBoatsStyled = styled.div`
.wrapper {
    margin-top:40px;
    padding: 10px;
    background-color:#ffffff;
    .boatOps{
        padding: 10px 0;
        background-color: #bec7d5;
        margin-top:20px;
    }

    h4{
        padding:10px;
    }
}
`

export const ModifyExistingBoats = (props) => {
    let boatData = (props.boatData)
    let laneData = (props.laneData)

    let boatOperations
    if (boatData.data != undefined && laneData.data != undefined) {
        boatOperations = boatData.data.map((boat, index) => {
            return (
                <div className="boatOps" key={boat.id}>
                    <Row>
                        <Col>
                            <h4>Operations for boat: {boat.name}</h4>
                        </Col>
                    </Row>
                    <Row>
                        <BoatAction boatID={boat.id} laneData={laneData}/>
                        <BoatDelete boatId={boat.id}/>
                    </Row>

                </div>
            )
        })
    }


    return (
        <ModifyBoatsStyled>
            <div className="wrapper">
            <Container>
            <Row>
                <Col>
                    <h3>Modify Existing Boat's States</h3>
                    <p>(Boats ordered by name)</p>
                </Col>
            </Row>
            {boatOperations}
            </Container>
            </div>
        </ModifyBoatsStyled>
    );
};

export default ModifyExistingBoats