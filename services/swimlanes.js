const db = require('./db');
const helper = require('../helper');
const config = require('../config');

/*
*DAO for getting all swimlanes
*returns a json representation of swimlanes
*/

async function getAllLanes() {
    const rows = await db.query(
        'SELECT * FROM swimlane'
    );
    const data = helper.emptyOrRows(rows);
    return {
        data
    }
}

module.exports = {
    getAllLanes
}