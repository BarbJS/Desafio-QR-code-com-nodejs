import chalk from "chalk";

const promptSchemaMain = [
  {
    name: "select",
    description: chalk.yellow(
      "Escolha a ferramenta (1- QR Code LINK, 2- PASSWORD, 3- QR Code WIFI)"
    ),
    pattern: /^[1-3]+$/,
    message: "Escolha apenas entre 1, 2 ou 3",
    required: true,
  },
];

export default promptSchemaMain;