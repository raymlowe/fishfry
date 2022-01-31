// GET request to /api/page-types/
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

    let boatData;
    const options = {
        method: 'GET'
    };

    try {
        //get boat data
        const resBoat = await fetch("/swimlanes", options);
        boatData = await resBoat.json();
        return boatData;
    } catch (error) {
        console.log("Error in boatService getSwimLanes: ", error);
        throw error;
    }
}

export const boatService = {
    getTourboats,
    getSwimLanes
};