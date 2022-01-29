const express = require('express');
const router = express.Router();
const tourboats = require('../services/tourboats');

/*
GET Tour Boat By ID:
This returns a JSON representation of a boat object for a given boat id
sample api endpoint: GET: http://localhost:3000/tourboats/[id]

input: 
String - ID of the tourboat to GET

return:
json object
*/
router.get("/:id", async function (req, res, next) {
    try {
        res.json(await tourboats.getById(req.params.id));
    } catch (err) {
        console.error(`Error while getting boats with ID `, err.message);
        next(err);
    }
});

/*
GET All Tour Boats:
This returns a JSON representation of all boat objects
sample api endpoint: GET: http://localhost:3000/tourboats

input:

return:
json object
*/
router.get('/', async function (req, res, next) {
    try {
        res.json(await tourboats.getAllBoats());
    } catch (err) {
        console.error(`Error while getting boats `, err.message);
        next(err);
    }
});

/*
POST (Save) Tour Boat:
This saves a new boat object
sample api endpoint: POST: http://localhost:3000/tourboats
The expected payload is a json object
ie: {"name": "Some Awesome Boat"}

input:

return:
json object success message

*/
router.post('/', async function (req, res, next) {
    try {
        res.json(await tourboats.create(req.body));
    } catch (err) {
        console.error(`Error while posting boats `, err.message);
        res.status(err.statusCode || 500).json({ 'message': err.message });
    }
});

/*
Delete tour boat by ID
sample api endpoint: DELETE: http://localhost:3000/tourboats/[id]

input: 
String - ID of the tourboat to remove

return:
json object success message

*/
router.delete('/:id', async function (req, res, next) {
    try {
        res.json(await tourboats.deleteById(req.params.id));
    } catch (err) {
        console.error(`Error while posting boats `, err.message);
        res.status(err.statusCode || 500).json({ 'message': err.message });
    }
});

module.exports = router;