const Manager = require("../lib/Manager.js");

describe("Manager", () => {
  describe("Initialization", () => {
    it("Creates an instance of Manager with the name, email, id, and office", () => {
      const name = "Juan Pablo";
      const id = "01";
      const email = "bernal1307@gmail.com";
      const office = "1";

      const manager = new Manager(name, id, email, office);

      expect(manager.name).toEqual("Juan Pablo");
      expect(manager.id).toEqual("01");
      expect(manager.email).toEqual("bernal1307@gmail.com");
      expect(manager.office).toEqual("1");
    });
  });
  describe("Manager methods", () => {
    it("getName() returns the name of the Manager object", () => {
      const name = "Juan Pablo";
      const id = "01";
      const email = "bernal1307@gmail.com";
      const office = "1";

      const manager = new Manager(name, id, email, office);

      expect(manager.getName()).toEqual("Juan Pablo");
    });
    it("getId() returns the id of the Manager object", () => {
      const name = "Juan Pablo";
      const id = "01";
      const email = "bernal1307@gmail.com";
      const office = "1";

      const manager = new Manager(name, id, email, office);

      expect(manager.getId()).toEqual("01");
    });
    it("getEmail() returns the email of the Manager object", () => {
      const name = "Juan Pablo";
      const id = "01";
      const email = "bernal1307@gmail.com";
      const office = "1";

      const manager = new Manager(name, id, email, office);

      expect(manager.getEmail()).toEqual("bernal1307@gmail.com");
    });
    it("getRole() returns the role of the Manager object", () => {
      const name = "Juan Pablo";
      const id = "01";
      const email = "bernal1307@gmail.com";
      const office = "1";

      const manager = new Manager(name, id, email, office);

      expect(manager.getRole()).toEqual("Manager");
    });
  });
});
