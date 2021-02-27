const fs = require("fs");
const { logica } = require("./logica");

const multiplicar = (base) => {
  // console.log(`=============`);
  // console.log(`Tabla del ${base}`);
  // console.log(`=============`);

  const resultado = logica(base);

  // console.log(resultado);

  fs.writeFile(`tablas/tablas-del${base}}`, resultado, (err) => {
    if (err) throw err;
    // console.log(`El archivo tabla del - ${base} fue creado}!`);
  });
};
module.exports = {
  multiplicar,
};
