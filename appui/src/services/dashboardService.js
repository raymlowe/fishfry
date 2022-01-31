// GET request to /api/page-types/
async function getDashboard() {

    let boatData;
    let swimLaneData;
    let boatLaneData;

    const options = {
        method: 'GET'
    };

    try {
        //get boat data
        const resBoat = await fetch("/tourboats", options);
        boatData = await resBoat.json();

        //get swim lanes
        const resLane = await fetch("/swimlanes", options);
        swimLaneData = await resLane.json();
        // get boat-lane data
        const resBoatLane = await fetch("/boatlanes", options);
        boatLaneData = await resBoatLane.json();

        //console.log(swimLaneData)
        if (swimLaneData != undefined && boatData != undefined && boatLaneData != undefined) {

            var array = [];
            let returnData = swimLaneData.data.map((swimLaneChild, index) => {
                //make an array of the boat ids assigned to this swimlane
                let associatedBoats = [];
                const swimLaneId = swimLaneChild.id;
                boatLaneData.data.map((boatLaneChild, index) => {
                    if(boatLaneChild.lane_id == swimLaneId){
                        associatedBoats.push(boatLaneChild.boat_id)
                    }
                })

                //get all associated boat JSON object and attached them to the lane
                let nameArray = [];
                for(var i=0; i <associatedBoats.length; i++){
                    let boatId = associatedBoats[i]
                    let boatJson = boatData.data;
                    for (var j=0; j<boatJson.length; j++) {
                        if(boatJson[j].id == boatId) {
                            nameArray.push(boatJson[j].name)
                        }
                    }
                }
                //Add boat names to this swim lane
                swimLaneChild = {...swimLaneChild, boatName: JSON.stringify(nameArray)}
                array.push(swimLaneChild);
            })
            return array;
        }
    } catch (error) {
        console.log("Error in homeService getDashboard: getting tour boats: ", error);
        throw error;
    }
}

export const dashboardService = {
    getDashboard
};