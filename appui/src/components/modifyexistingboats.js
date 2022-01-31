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
    padding: 5px 20px;
    background-color:#ffffff;
    .boatOps{
        padding: 10px 0;
        background-color: #bec7d5;
        margin-top:20px;
    }
}

.wrapper fieldset {
    margin: 20px 0;
}
`

export const ModifyExistingBoats = (props) => {
    //console.log(props);
    let boatData = (props.boatData)
    let laneData = (props.laneData)

    let boatOperations

    // if(boatData != []){
    //     console.log(boatData);
    // }

    // console.log("success")
    // console.log(boatData.data)
    if (boatData.data != undefined && laneData.data != undefined) {
        boatOperations = boatData.data.map((boat, index) => {
            return (
                <div className="boatOps" key={boat.id}>
                    <Row>
                        <Col>
                            <h3>Operations for boat: {boat.name}</h3>
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
                <h2>Modify Existing Boats</h2>
                <Container>
                    {boatOperations}
                </Container>
            </div>

        </ModifyBoatsStyled>
    );
};

export default ModifyExistingBoats