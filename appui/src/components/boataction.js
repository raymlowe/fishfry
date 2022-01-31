import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';

const BoatActionStyled = styled.div`
.wrapper {
    padding: 5px 20px;
}

.wrapper fieldset {
    margin: 20px 0;
}
`

export const BoatAction = (props) => {
    console.log(props);
    // let boatData = (props.boatData)
    let laneData = (props.laneData)
    let boatId = props.boatID
    let boatAction;
    if (laneData.data != undefined) {
        boatAction = laneData.data.map((lane, index) => {
            const handleUpdate = event => {
                console.log("We Will Handle It: " + boatId + " for lane: " + lane.id)
            }
            return (
                <div key={lane.id}>
                    <Col>
                        <div className="actionButton" onClick={handleUpdate} key={lane.id}>
                            Set State: {lane.status}
                        </div>
                    </Col>
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