const server = require('../../app');
const supertest = require('supertest');

const testBoatName = 'testboat'
let testBoatId

//Test creation of a new boat
//We need to ensure that the boat is created by default
describe("we will create a new tourboat", () => {
    describe("when passed a boat name JSON object", () => {
        test("should respond with a 200 status code and new boat ID", async () => {
            const response = await supertest(server).post("/tourboats").send({
                name: testBoatName,
            })
            testBoatId = response.body.newPageId
            expect(response.statusCode).toBe(200)
            expect(testBoatId).not.toBeNull()
        })
    })
})

//Setup : we expect the newly created boat to be docked at lane 1
describe("we will dock the new tourboat", () => {
    test("should respond with a 200 status code", async () => {
        const response = await supertest(server).post("/boatlanes/" + testBoatId + "/1")
        expect(response.statusCode).toBe(200)
    })
})

//Business logic: initially the boat should be docked at lane 1
describe("we expect the new boat to start docked", () => {
    test("initial lane should be 1", async () => {
        const response = await supertest(server).get("/boatlanes")
        let laneInitial;
        response.body.data.map((boatLane, index) => {
            if (boatLane.boat_id == testBoatId) {
                laneInitial = boatLane.lane_id;
            }
        })
        expect(laneInitial).toEqual("1");
    })
})

//Delete the boat / lane relationship
describe("remove the boat from the lane", () => {
    test("delete expect success", async () => {
        const response = await supertest(server).delete("/boatlanes/" + testBoatId)
        expect(response.statusCode).toBe(200);
    })
})

//Cleanup test boat expect success
describe("DELETE test tourboat", () => {
    test("should respond with a 200 status code", async () => {
        const response = await supertest(server).delete("/tourboats/" + testBoatId)
        expect(response.statusCode).toBe(200);
    })
})
