const server = require('../../app');
const supertest = require('supertest');
const { json } = require('express/lib/response');

const testBoatName = 'testboat'


//Test get swimlane response
test("should specify json as the content type in the http header", async () => {
    const response = await supertest(server).get("/swimlanes")
    let responseJson = response.body
    expect(responseJson.data.length == 4)
})