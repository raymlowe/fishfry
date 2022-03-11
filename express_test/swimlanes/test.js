const server = require('../../server');
const supertest = require('supertest');

//Test get swimlane response
//We assume that the swimlanes are statically defined and should never change
test("should return 4 swimlanes", async () => {
    const response = await supertest(server).get("/swimlanes")
    let responseJson = response.body
    expect(responseJson.data.length == 4)
})