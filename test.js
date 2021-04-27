const supertest = require("supertest");
const server = supertest.agent("http://localhost:5000");

describe("SAMPLE unit test", () => {
    it("should return home page", (done) => {
        server.get("/").expect("Context-type", /text/).expect(200).end((err,res) => done());
    })
})