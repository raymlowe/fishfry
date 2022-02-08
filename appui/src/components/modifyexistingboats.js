import { React, useEffect, useState } from "react";
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

function ModifyExistingBoats ({ boatData, laneData, boatLaneData, setBoatLane}) {

    let boatOperations
    if (boatData.data != undefined && laneData != undefined && boatLaneData != undefined) {
        boatOperations = boatData.data.map((boat, index) => {
            //We assume a boat just always belong to a lane:
            //Get the selected lane ID
            let currentlySelectedLane;
            if(boatLaneData != ''){
                for (var i=0; i < boatLaneData.data.length; i++) {
                    let thisBoatId = boatLaneData.data[i].boat_id;
                    if(thisBoatId == boat.id){
                        //selected lane
                        currentlySelectedLane = boatLaneData.data[i].lane_id
                    }      
                }
            }

            return (
                <div className="boatOps" key={boat.id}>
                    <Row>
                        <Col>
                            <h4>Operations for boat: {boat.name}</h4>
                        </Col>
                    </Row>
                    <Row>
                        <BoatAction boatId={boat.id} laneData={laneData} selectedLaneId={currentlySelectedLane} setBoatLane={setBoatLane}/>
                        <BoatDelete boatId={boat.id} />
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
                            <p>(Boats ordered by name. Newly created boats are appended to list)</p>
                        </Col>
                    </Row>
                    {boatOperations}
                </Container>
            </div>
        </ModifyBoatsStyled>
    );
};

export default ModifyExistingBoats