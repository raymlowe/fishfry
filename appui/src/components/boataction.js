import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import styled from 'styled-components';
import { boatService } from '../services/boatService';

const BoatActionStyled = styled.div`
.wrapper {
    padding: 5px 20px;
}

.wrapper fieldset {
    margin: 20px 0;
}

.actionButton{
    padding: 10px;
    border: 1px #ffffff solid;
}

.actionButton:hover {
    background-color: #fefee1;
    cursor: pointer;
}
`

export const BoatAction = (props) => {
    let laneData = (props.laneData)
    let boatId = props.boatID
    let boatAction;
    if (laneData.data != undefined) {
        boatAction = laneData.data.map((lane, index) => {
            const handleUpdate = event => {
                //we assume a boat must always be in a lane and remove relationship frist -> check for response
                boatService
                    .removeTourboatSwimlane(boatId)
                    .then(data => {
                        if (data != undefined) {
                            boatService.createTourboatSwimlane(boatId, lane.id)
                            alert("Tourboat status updated")
                            window.location.reload();   //TODO: restructure to reload react component
                        }
                    })
            }
            return (
                <div key={lane.id}>
                    <div className="actionButton" onClick={handleUpdate} key={lane.id}>
                        Set State: {lane.status}
                    </div>
                </div>
            )
        })
    }

    return (
        <BoatActionStyled>
            {boatAction}
        </BoatActionStyled>
    );
};

export default BoatAction