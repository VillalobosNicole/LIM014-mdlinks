const miPromesa = new Promise((resolve, reject) => {
  // resolve('Exito');
  reject("Ocurrió un error");
});

miPromesa.then(
  (resultado) => {
    console.log(resultado);
  },
  (error) => {
    console.log(`Error : ${error}`);
  }
);
