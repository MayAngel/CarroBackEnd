import mongoose from "mongoose";

mongoose
  .connect(
    "mongodb+srv://dbUser:rFxDIjQTPM9s7x5v@cluster0.acfqw.mongodb.net/CarroBackEnd?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )

  .then(() => {
    console.log("Aplicação conectada ao banco de dados");
  })
  .catch((erro) => {
    console.log(`Erro ao conectar com o banco de dados: ${erro}`);
  });

export { mongoose };
