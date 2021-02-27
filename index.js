const argv = require("yargs/yargs")(process.argv.slice(2)).argv

const { multiplicar } = require("./multiplicador/index");

console.log(argv._[0]);

const base = 4;

multiplicar(base);
