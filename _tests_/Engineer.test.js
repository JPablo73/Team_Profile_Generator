const Engineer = require("../lib/Engineer.js");

describe("Engineer", () => {
  describe("Initialization", () => {
    it("Creates an instance of Engineer with the name, email, id, github", () => {
      const name = "Juan Pablo";
      const id = "01";
      const email = "bernal1307@gmail.com";
      const github = "JPablo73";

      const engineer = new Engineer(name, id, email, github);

      expect(engineer.name).toEqual("Juan Pablo");
      expect(engineer.id).toEqual("01");
      expect(engineer.email).toEqual("bernal1307@gmail.com");
      expect(engineer.github).toEqual("JPablo73");
    });
  });
  describe("Engineer methods", () => {
    it("getName() returns the name of the Engineer object", () => {
      const name = "Juan Pablo";
      const id = "01";
      const email = "bernal1307@gmail.com";
      const github = "JPablo73";

      const engineer = new Engineer(name, id, email, github);

      expect(engineer.getName()).toEqual("Juan Pablo");
    });
    it("getId() returns the id of the Engineer object", () => {
      const name = "Juan Pablo";
      const id = "01";
      const email = "bernal1307@gmail.com";
      const github = "JPablo73";

      const engineer = new Engineer(name, id, email, github);

      expect(engineer.getId()).toEqual("01");
    });
    it("getEmail() returns the email of the Engineer object", () => {
      const name = "Juan Pablo";
      const id = "01";
      const email = "bernal1307@gmail.com";
      const github = "JPablo73";

      const engineer = new Engineer(name, id, email, github);

      expect(engineer.getEmail()).toEqual("bernal1307@gmail.com");
    });
    it("getRole() returns the role of the Engineer object", () => {
      const name = "Juan Pablo";
      const id = "01";
      const email = "bernal1307@gmail.com";
      const github = "JPablo73";

      const engineer = new Engineer(name, id, email, github);

      expect(engineer.getRole()).toEqual("Engineer");
    });
    it("getGithub() returns the github account of the Engineer object", () => {
      const name = "Juan Pablo";
      const id = "01";
      const email = "bernal107@gmail.com";
      const github = "JPablo73";

      const engineer = new Engineer(name, id, email, github);

      expect(engineer.getGithub()).toEqual("JPablo73");
    });
  });
});
