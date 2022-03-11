const server = require('../../server');
const supertest = require('supertest');
const { json } = require('express/lib/response');

const testBoatName = 'testboat'

//Test creation of a new boat
describe("we will create a new tourboat", () => {
    describe("when passed a boat name JSON object", () => {
        test("should respond with a 200 status code", async () => {
            const response = await supertest(server).post("/tourboats").send({
                name: testBoatName,
            })
            expect(response.statusCode).toBe(200)
        })
    })
})

//Test get tourboat's header response
test("should specify json as the content type in the http header", async () => {
    const response = await supertest(server).get("/tourboats")
    expect(response.headers['content-type']).toEqual(expect.stringContaining('json'))
})

//Check to see if the test boat exists
test("should to ensure existance of testt boat", async () => {
    let tourboatFound = false;
    const response = await supertest(server).get("/tourboats")
    response.body.data.map((boat, index) => {
        if(boat.name == testBoatName){
            tourboatFound = true;
        }
    })
    expect(tourboatFound).toEqual(true);
})

//Test removal of newly inserted boat
describe("DELETE /tourboats", () => {
    test("should respond with a 200 status code", async () => {
        //Get all boats
        const response = await supertest(server).get("/tourboats")
        let obj = JSON.parse(response.text);
        let boatsArray = obj.data;

        //Remove test boats
        for (var i = 0; i < boatsArray.length; i++) {
            var boat = boatsArray[i];
            if (boat.name == testBoatName){
                await supertest(server).delete("/tourboats/"+boat.id)
            }
        }

        //Check that test boats are removed
        const newResponse = await supertest(server).get("/tourboats")
        let newObj = JSON.parse(newResponse.text);
        let newBoatsArray = newObj.data;
        let foundTestBoat = false;

        for (var i = 0; i < newBoatsArray.length; i++) {
            var boat = newBoatsArray[i];
            if (boat.name == testBoatName){
                foundTestBoat = true;
            }
        }
        expect(foundTestBoat).toBe(false)
    })
})