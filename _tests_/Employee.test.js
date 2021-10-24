const Employee = require("../lib/Employee.js");

describe("Employee", () => {
  describe("Initialization", () => {
    it("Creates an Employee instance with the name, email, id", () => {
      const name = "Juan Pablo";
      const id = "01";
      const email = "bernal1307@gmail.com";

      const employee = new Employee(name, id, email);

      expect(employee.name).toEqual("Juan Pablo");
      expect(employee.id).toEqual("01");
      expect(employee.email).toEqual("bernal1307@gmail.com");
    });
  });
  describe("Employee methods", () => {
    it("getName() returns the name of the Employee object", () => {
      const name = "Juan Pablo";
      const id = "01";
      const email = "bernal1307@gmail.com";

      const employee = new Employee(name, id, email);

      expect(employee.getName()).toEqual("Juan Pablo");
    });
    it("getId() returns the id of the Employee object", () => {
      const name = "Juan Pablo";
      const id = "01";
      const email = "bernal1307@gmail.com";

      const employee = new Employee(name, id, email);

      expect(employee.getId()).toEqual("01");
    });
    it("getEmail() returns the email of the Employee object", () => {
      const name = "Juan Pablo";
      const id = "01";
      const email = "bernal1307@gmail.com";

      const employee = new Employee(name, id, email);

      expect(employee.getEmail()).toEqual("bernal1307@gmail.com");
    });
    it("getRole() returns the role of the Employee object", () => {
      const name = "Juan Pablo";
      const id = "01";
      const email = "bernal1307@gmail.com";

      const employee = new Employee(name, id, email);

      expect(employee.getRole()).toEqual("Employee");
    });
  });
});
