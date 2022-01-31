import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import styled from 'styled-components';

const BoatDeleteStyled = styled.div`
.removeBoatDiv {
    background-color:red;
    max-width: 100px;
}
`

export const BoatDelete = (props) => {
    console.log(props);
  
    return (
        <BoatDeleteStyled>
            <div className='removeBoatDiv'>
                <span>Delete Boat</span>
            </div>
            
        </BoatDeleteStyled>
    );
};

export default BoatDelete