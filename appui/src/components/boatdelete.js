import 'bootstrap/dist/css/bootstrap.css';
import styled from 'styled-components';
import { boatService } from '../services/boatService';

const BoatDeleteStyled = styled.div`
.removeBoatDiv {
    background-color:red;
    padding: 10px;
    border: 1px #000000 solid;
}
.removeBoatDiv:hover {
    background-color:#ed8787;
    padding: 10px;
    border: 1px #000000 solid;
    cursor:pointer;
}
`

export const BoatDelete = (props) => {
    //hooks
    const boatId = props.boatId;

    const handleUpdate = event => {
        console.log("We Will Handle It: " + boatId)
        //we assume a boat must always be in a lane and remove relationship frist -> check for response
        boatService
            .removeTourboatSwimlane(boatId)
            .then(data => {
                if (data != undefined) {
                    boatService.removeTourboat(boatId)
                    alert("Tourboat Removed")
                    window.location.reload();   //TODO: restructure to reload react component
                }
            })
    }
    return (
        <BoatDeleteStyled>
            <div className='removeBoatDiv' onClick={handleUpdate}>
                <span>Delete Boat</span>
            </div>
        </BoatDeleteStyled>
    );
};

export default BoatDelete