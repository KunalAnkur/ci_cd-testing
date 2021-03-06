const supertest = require("supertest");
// const server = supertest.agent("http://localhost:5000");
const app = require('../app');
const server = supertest(app)
const mongoose = require('mongoose');
require('dotenv').config();
beforeAll(async (done) => {
   await mongoose.connect(process.env.MONGODB_URL, {
     useNewUrlParser: true,
     useFindAndModify: false,
     useCreateIndex: true,
     useUnifiedTopology: true,
   });
   done()
})

describe("SAMPLE unit test", () => {
    it("should return home page", (done) => {
        server.get("/").expect("Context-type", /text/).expect(200).end((err,res) => done());
    })
    it("should return user info", async (done) => {
       const res = await server.post("/signup").send({
          name: "Zell",
          email: "testing@gmail.com",
        });

        console.log(res.data);

        done();
    })
 
      it("responds with json", function (done) {
        server
          .post("/users")
          .send({ name: "john" })
          .set("Accept", "application/json")
        //   .expect("Content-Type", /text/)
          .expect(201)
          .end(function (err, res) {
            //   console.log(res)
            if (err) return done(err);
            return done();
          });
      });
  
})

afterAll( async (done) => {
    await mongoose.connection.close()
    done()
})