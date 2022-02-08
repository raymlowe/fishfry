//services for boat page

async function getTourboats() {

    let boatData;
    const options = {
        method: 'GET'
    };

    try {
        //get boat data
        const resBoat = await fetch("/tourboats", options);
        boatData = await resBoat.json();
        return boatData;
    } catch (error) {
        console.log("Error in boatService getAllBoats: getting tour boats: ", error);
        throw error;
    }
}

async function getSwimLanes() {

    let laneData;
    const options = {
        method: 'GET'
    };

    try {
        //get boat data
        const resBoat = await fetch("/swimlanes", options);
        laneData = await resBoat.json();
        return laneData;
    } catch (error) {
        console.log("Error in boatService getSwimLanes: ", error);
        throw error;
    }
}

async function getBoatLanes(){
    let boatLaneData;
    const options = {
        method: 'GET'
    };
    try{
        const resBoatLane = await fetch("/boatlanes", options);
        boatLaneData = await resBoatLane.json();
        return boatLaneData;
    }catch (error) {
        console.log("Error in boatService getBoatLanes: ", error);
        throw error;
    }
}

/*
input type: JSON.stringify
createTourboats expects a JSON.stringifyed representation of the form data
*/
async function createTourboats(payload) {

    let boatData;
    const options = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: payload
    };

    try {
        //get boat data
        const resBoat = await fetch("/tourboats", options);
        boatData = await resBoat.json();
        return boatData;
    } catch (error) {
        console.log("Error in boatService createTourboats: ", error);
        throw error;
    }
}

async function createTourboatSwimlane(boatId, laneId) {

    let createRelationshipResponse;
    const options = {
        method: 'POST'
    };
    try {
        const resBoat = await fetch("/boatlanes/" + boatId + "/" + laneId, options);
        createRelationshipResponse = await resBoat.json();
        return createRelationshipResponse;
    } catch (error) {
        console.log("Error in boatService removeTourboatSwimlane: ", error);
        throw error;
    }
}

async function assignTourboatInitialLane(boatId) {
    let createRelationshipResponse;
    const options = {
        method: 'POST'
    };
    try {
        const resBoat = await fetch("/boatlanes/" + boatId + "/1", options);
        createRelationshipResponse = await resBoat.json();
        return createRelationshipResponse;
    } catch (error) {
        console.log("Error in boatService removeTourboatSwimlane: ", error);
        throw error;
    }
}

async function removeTourboatSwimlane(boatId) {

    let deleteRelationshipResponse;
    const options = {
        method: 'DELETE'
    };
    try {
        const resBoat = await fetch("/boatlanes/" + boatId, options);
        deleteRelationshipResponse = await resBoat.json();
        return deleteRelationshipResponse;
    } catch (error) {
        console.log("Error in boatService removeTourboatSwimlane: ", error);
        throw error;
    }
}

async function removeTourboat(boatId) {

    let deleteTourboat;
    const options = {
        method: 'DELETE'
    };
    try {
        const resBoat = await fetch("/tourboats/" + boatId, options);
        deleteTourboat = await resBoat.json();
        return deleteTourboat;
    } catch (error) {
        console.log("Error in boatService removeTourboat: ", error);
        throw error;
    }
}

export const boatService = {
    getTourboats,
    getSwimLanes,
    removeTourboatSwimlane,
    removeTourboat,
    createTourboatSwimlane,
    createTourboats,
    assignTourboatInitialLane,
    getBoatLanes
};