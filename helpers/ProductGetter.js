const fs = require("fs");

class ProductGetter {
  async getAll() {
    try {
      const listObjs = await fs.promises.readFile(
        "./productos.txt",
        "utf-8",
        2
      );
      if (listObjs === "") {
        return console.log("La lista de productos está vacía");
      } else {
        const listParce = JSON.parse(listObjs);
        return listParce;
      }
    } catch (err) {
      console.log(`Ocurrió el error: ${err}`);
    }
  }
  async getRamdonProduct() {
    const listObjs = await this.getAll();
    const maxlength = listObjs.length;
    let ramdomPos = Math.floor(Math.random() * (maxlength + 1));
    return listObjs[ramdomPos];
  }
}

module.exports = ProductGetter;
