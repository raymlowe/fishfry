const db = require('./db');
const helper = require('../helper');
const config = require('../config');

/*
*DAO for getting all boatlanes
*returns a json representation of boatlanes
*/
async function getAllBoatLanes() {
    const rows = await db.query(
        'SELECT * FROM boat_lane'
    );
    const data = helper.emptyOrRows(rows);
    return {
        data
    }
}

/*
DAO for mapping a boat to a lane
input: 
*stirng containing the boat ID
*string containing the lane ID
*returns a json representation of the boat lane object
*/
async function addBoatToLane(boatId, laneId) {
    const result = await db.query(
        'INSERT INTO boat_lane(boat_id, lane_id) VALUES ($1, $2) RETURNING *',
        [boatId, laneId]
    );
    const data = helper.emptyOrRows(result);
    return {
        data
    }
}

/*
DAO to remove lanes from a boat
input:
*String - id of the boat
*/
async function removeBoatFromLanes(boatId) {
    const result = await db.query(
        'DELETE FROM boat_lane where boat_id = ($1)',
        [boatId]
    );
    const data = helper.emptyOrRows(result);
    return {
        data
    }
}

module.exports = {
    getAllBoatLanes,
    addBoatToLane,
    removeBoatFromLanes
}