import Componente from "./Componente";

describe("Given the Componente class", () => {
  describe("When it recives a ul, className and tagName li", () => {
    test("then it should render a li element whith a clasName inside the ul", () => {
      const ul = document.createElement("ul");
      const clasName = "test";
      const tagName = "li";

      const li = new Componente(ul, clasName, tagName);

      const resultado = ul.querySelector("li.test");
      console.log(resultado);
      expect(resultado).not.toBeNull();
    });
  });
});
