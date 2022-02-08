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

.Selected{
    background-color:#bbbbbb;
}

.actionButton:hover {
    background-color: #fefee1;
    cursor: pointer;
}
`

function BoatAction({ boatId, laneData, selectedLaneId, setBoatLane }) {
    let boatAction;
    if (laneData.data != undefined) {
        boatAction = laneData.data.map((lane, index) => {
            const handleUpdate = event => {
                //we assume a boat must always be in a lane and remove relationship frist -> check for response
                boatService
                    .removeTourboatSwimlane(boatId)
                    .then(data => {
                        boatService.createTourboatSwimlane(boatId, lane.id)
                            //once the boatlane has been updated, refresh data
                            .then(retBoatLaneData => {
                                if (retBoatLaneData != undefined) {
                                    boatService.getBoatLanes()
                                        .then(refreshedBoatLane => {
                                            if (refreshedBoatLane != undefined) {
                                                setBoatLane(refreshedBoatLane);
                                            }
                                        })
                                }
                            })
                        alert("Tourboat status updated")
                    })
            }

            if (lane.id == selectedLaneId) {
                return (
                    <div key={lane.id}>
                        <div className="actionButton Selected" onClick={handleUpdate} key={lane.id}>
                            Set State: {lane.status}
                        </div>
                    </div>
                )
            } else {
                return (
                    <div key={lane.id}>
                        <div className="actionButton" onClick={handleUpdate} key={lane.id}>
                            Set State: {lane.status}
                        </div>
                    </div>
                )
            }
        })
    }

    return (
        <BoatActionStyled>
            {boatAction}
        </BoatActionStyled>
    );
};

export default BoatAction