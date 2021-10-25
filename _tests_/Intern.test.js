const Intern = require("../lib/Intern.js");

describe("Intern", () => {
  describe("Initialization", () => {
    it("Creates an instance of Intern with the name, email, id, school", () => {
      const name = "Juan Pablo";
      const id = "01";
      const email = "bernal1307@gmail.com";
      const school = "UCR Extension";

      const intern = new Intern(name, id, email, school);

      expect(intern.name).toEqual("Juan Pablo");
      expect(intern.id).toEqual("01");
      expect(intern.email).toEqual("bernal1307@gmail.com");
      expect(intern.school).toEqual("UCR Extension");
    });
  });
  describe("Intern methods", () => {
    it("getName() returns the name of the Intern object", () => {
      const name = "Juan Pablo";
      const id = "01";
      const email = "bernal1307@gmail.com";
      const school = "UCR Extension";

      const intern = new Intern(name, id, email, school);

      expect(intern.getName()).toEqual("Juan Pablo");
    });
    it("getId() returns the id of the Intern object", () => {
      const name = "Juan Pablo";
      const id = "01";
      const email = "bernal1307@gmail.com";
      const school = "UCR Extension";

      const intern = new Intern(name, id, email, school);

      expect(intern.getId()).toEqual("0001");
    });
    it("getEmail() returns the email of the Intern object", () => {
      const name = "Juan Pablo";
      const id = "01";
      const email = "bernal1307@gmail.com";
      const school = "UCR Extension";

      const intern = new Intern(name, id, email, school);

      expect(intern.getEmail()).toEqual("bernal1307@gmail.com");
    });
    it("getRole() returns the role of the Intern object", () => {
      const name = "Juan Pablo";
      const id = "01";
      const email = "bernal1307@gmail.com";
      const school = "UCR Extension";

      const intern = new Intern(name, id, email, school);

      expect(intern.getRole()).toEqual("Intern");
    });
  });
});
