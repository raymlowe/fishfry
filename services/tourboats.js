const { v4: uuidv4 } = require("uuid");
const db = require('./db');
const helper = require('../helper');
const config = require('../config');

/*
DAO for returning a single boat by ID
*/
async function getById(boatId) {
  const rows = await db.query(
    'SELECT * FROM tourboat where ID = ($1)',
    [boatId]
  );
  const data = helper.emptyOrRows(rows);
  return {
    data
  }
}

/*
DAO for returning all boats
*/
async function getAllBoats() {
  const rows = await db.query(
    'SELECT * FROM tourboat ORDER BY name'
  );
  const data = helper.emptyOrRows(rows);
  return {
    data
  }
}

/*
*DAO for persisting a new boat object
*expected json payload: {"name": "Some Awesome Boat"}
*returns uuidv4 of newly generated boat
*/
async function create(boat) {
  const newPageId = uuidv4(); //autogenerate ID for boat
  const result = await db.query(
    'INSERT INTO tourboat(id, name) VALUES ($1, $2) RETURNING *',
    [newPageId, boat.name]
  );
  let message = 'Error in creating boat';

  if (result.length) {
    message = 'Boat created successfully';
  }
  return { newPageId };
}

/*
DAO for deleting a boat by ID
expected input is the ID of the boat to be deleted
*/
async function deleteById(boatId) {
  const rows = await db.query(
    'DELETE FROM tourboat where ID = ($1)',
    [boatId]
  );
  const data = helper.emptyOrRows(rows);
  return {
    data
  }
}

module.exports = {
  getAllBoats,
  getById,
  create,
  deleteById
}