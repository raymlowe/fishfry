const express = require('express');
const router = express.Router();
const boatlanes = require('../services/boatlanes');

/*
GET All Boat Lane relatinships:
This returns a JSON representation of all boat objects
sample api endpoint: GET: http://localhost:3000/boatlanes
*/
router.get('/', async function (req, res, next) {
    try {
        res.json(await boatlanes.getAllBoatLanes());
    } catch (err) {
        console.error(`Error while getting boatlanes `, err.message);
        next(err);
    }
});

/*
POST add boat to lane:
This returns a JSON representation of all boat objects
sample api endpoint: POST: http://localhost:3000/boatlanes/[boatId]/[laneId]
*/
router.post('/:boatId/:laneId', async function (req, res, next) {
    try {
        res.json(await boatlanes.addBoatToLane(req.params.boatId, req.params.laneId));
    } catch (err) {
        console.error(`Error while getting boatlanes `, err.message);
        next(err);
    }
});

/*
DELETE a boat from all lanes
sample api endpoint: DELETE: http://localhost:3000/boatlanes/[boatId]
*/
router.delete('/:boatId', async function (req, res, next){
    try{
        res.json(await boatlanes.removeBoatFromLanes(req.params.boatId));
    }catch (err) {
        console.error(`Error while getting boatlanes `, err.message);
        next(err);
    }
});

module.exports = router;