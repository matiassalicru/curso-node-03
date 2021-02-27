const logica = (base) => {
  let resultado = "";

  for (let i = 0; i < 10; i++) {
    resultado += `${base} * ${i} = ${base * i}\n`;

    // console.log(resultado);
  }

  return resultado;
};

module.exports = {
  logica,
};
