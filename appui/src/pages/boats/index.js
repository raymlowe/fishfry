import { useEffect, useState } from "react";
import { boatService } from "../../services/boatService";
import NewboatForm from "../../components/newboatform";
import ModifyExistingBoats from "../../components/modifyexistingboats";
import styled from 'styled-components';

const BoatStyled = styled.div`
  h2{
    font-weight:bold;
  }
  h3{
    font-weight:bold;
  }
  div.pageBanner{
    padding-left:20px;
  }
`

function Boats() {

  const [isError, setIsError] = useState(null);
  const [tourBoatData, setTourBoatData] = useState([]);
  const [swimLaneData, setSwimLaneData] = useState([]);

  useEffect(() => {
    boatService
      .getTourboats()
      .then(data => {
        if (data != undefined) {
          setTourBoatData(data);
        }
      })
      .catch((error) => {
        console.log("error in home index on getTourboats: ", error);
        setIsError(true);
      });
  }, []);

  useEffect(() => {
    boatService
      .getSwimLanes()
      .then(data => {
        if (data != undefined) {
          setSwimLaneData(data);
        }
      })
      .catch((error) => {
        console.log("error in home index on getTourboats: ", error);
        setIsError(true);
      });
  }, []);

  return (
    <BoatStyled>
    <div>
      <div className='pageBanner'>
        <h2>Fishfry Tours</h2>
        <h3>Boat Administration Screen</h3>
      </div>
      <NewboatForm boatData={tourBoatData} setBoatData={setTourBoatData}/>
      <ModifyExistingBoats boatData={tourBoatData} laneData={swimLaneData}/>
    </div>
    </BoatStyled>
  );
}

export default Boats