import React, { useReducer, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import styled from 'styled-components';
import { boatService } from '../services/boatService';

const BoatAdminStyled = styled.div`

.wrapper{
    border: 1px #000000 solid;
    margin-top:30px;
    background-color: #dde9df;
    padding:10px;
}

.newBoatNameInput{
    width:100%;
    min-height:40px;
}

.newBoatNameSubmit{
    padding:10px;
    margin-top:10px;
    border-radius:5px;
}
`

const formReducer = (state, event) => {
    //spreader function allows us to make modifications
    //(expand insert) into the element
    return {
        ...state,
        [event.name]: event.value
    }
}

function NewboatForm({ boatData, setBoatData }) {
    //Hook to store the form data
    const [formData, setFormData] = useReducer(formReducer, {});

    const handleSubmit = event => {
        event.preventDefault();
        //should clear the text area here
        event.target.reset();

        //SUBMIT FORM CODE HERE
        const bodyPayload = JSON.stringify(formData);
        boatService.createTourboats(bodyPayload)
            .then(data => {
                if (data != undefined) {
                    let newBoatId = data.newPageId
                    boatService.assignTourboatInitialLane(newBoatId)
                    //update hook
                    let dataBoatName = data.boat.name;
                    let newElement = { "id": newBoatId, "name": dataBoatName }
                    boatData.data.push(newElement)
                    setBoatData({ "data": boatData.data });
                    alert("Boat has been added");
                }
            })
    }

    //On change we want to update the form data hook
    const handleChange = event => {
        setFormData({
            name: event.target.name,
            value: event.target.value,
        });
    }

    return (
        <BoatAdminStyled>
            <Container>
                <Row>
                    <Col>
                        <div className="wrapper">
                            <div className="section_heading">
                                <h3>Add a new boat:</h3>
                            </div>
                            <div className="section_form">
                                <form onSubmit={handleSubmit}>
                                    <fieldset className='newBoatNameField'>
                                        <label><p>Enter name of new boat:</p></label>
                                        <input className='newBoatNameInput' name="name" onChange={handleChange} />
                                    </fieldset>
                                    <button className='newBoatNameSubmit' type="submit">Submit</button>
                                </form>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </BoatAdminStyled>
    );
};

export default NewboatForm