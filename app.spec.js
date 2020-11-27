process.env.NODE_ENV = "test";
const chai = require("chai");
const { expect } = require("chai");
const chaiSorted = require("chai-sorted");
chai.use(chaiSorted);
const request = require("supertest");
const app = require("./app");
const connection = require("./db/connection");

describe("/api", () => {
  beforeEach(() => connection.seed.run());
  after(() => connection.destroy());
  describe("/products", () => {
    it("GET / 200 and returns with an array of products", () => {
      return request(app)
        .get("/api/products")
        .expect(200)
        .then(response => {
          expect(response.body.products).to.be.an("array");
          expect(response.body.products[0]).to.contain.keys(
            "id",
            "name",
            "price",
            "type"
          );
        });
    });
    it('GET / 200 and returns with an array ofproduct objects sorted in descending order by type', () => {
      return request(app)
        .get("/api/products?sort_by=type&order=desc")
        .expect(200)
        .then(response => {
          expect(response.body.products).to.be.sortedBy("type", {
            descending: true
          });
        });
    });
  })
})