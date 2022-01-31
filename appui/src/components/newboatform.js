import React, { useReducer } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';
import { boatService } from '../services/boatService';

const BoatAdminStyled = styled.div`

.new-boat-form{
    margin-top: 30px;
    background-color: #bed5c2;
    .wrapper {
        padding: 5px 20px;
        background-color: #dde9df;
    }
    .wrapper fieldset {
        margin: 20px 0;
    }
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

export const NewboatForm = (data) => {
    //Hook to store the form data
    const [formData, setFormData] = useReducer(formReducer, {});

    const handleSubmit = event => {
        event.preventDefault();
        //should clear the text area here
        event.target.reset();

        let saveNewBoatResponse
        //SUBMIT FORM CODE HERE
        const bodyPayload = JSON.stringify(formData);
        console.log(bodyPayload)
        boatService.createTourboats(bodyPayload)
        .then(data => {
            if (data != undefined) {
                console.log(data.newPageId);
                let newBoatId = data.newPageId
                boatService.assignTourboatInitialLane(newBoatId)
                alert("Boat has been added")
                window.location.reload();   //TODO: restructure to reload react component
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
            <Col>
                <div className="new-boat-form">
                    <h3>Deploy a new boat: Enter name below</h3>
                    <div className="wrapper">
                        <form onSubmit={handleSubmit}>
                            <fieldset>
                                <label>
                                    <p>Name</p>
                                    <input name="name" onChange={handleChange} />
                                </label>
                            </fieldset>
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </Col>
        </BoatAdminStyled>
    );
};

export default NewboatForm