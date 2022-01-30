import React, { useReducer} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';

const BoatAdminStyled = styled.div`
.wrapper {
    padding: 5px 20px;
}

.wrapper fieldset {
    margin: 20px 0;
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
        //SUBMIT FORM CODE HERE
        (async () => {
            const rawResponse = await fetch('/tourboats', {
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(formData)
            });
            const content = await rawResponse.json();
            console.log("Compoeted POST")
            console.log(content);
          })();
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
                    <h3>Enter New Boat Here</h3>
                    <div className="wrapper">
                        <form onSubmit={handleSubmit}>
                            <fieldset>
                                <label>
                                    <p>Name</p>
                                    <input name="name" onChange={handleChange}/>
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