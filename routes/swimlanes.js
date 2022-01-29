const express = require('express');
const router = express.Router();
const swimlanes = require('../services/swimlanes');

/*
GET All Swimlanes:
This returns a JSON representation of all boat objects
sample api endpoint: GET: http://localhost:3000/swimlanes/
*/
router.get('/', async function (req, res, next) {
    try {
        res.json(await swimlanes.getAllLanes());
    } catch (err) {
        console.error(`Error while getting swimlanes `, err.message);
        next(err);
    }
});

module.exports = router;