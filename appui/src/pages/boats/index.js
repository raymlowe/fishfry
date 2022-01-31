import { useEffect, useState } from "react";
import { boatService } from "../../services/boatService";
import NewboatForm from "../../components/newboatform";
import ModifyExistingBoats from "../../components/modifyexistingboats";

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
    <div>
      <h2>Manage Boats Here</h2>
      <NewboatForm />
      <ModifyExistingBoats boatData={tourBoatData} laneData={swimLaneData} />
    </div>
  );
}

export default Boats