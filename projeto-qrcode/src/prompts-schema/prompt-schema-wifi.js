import chalk from "chalk";

const promptSchemaWifi = [
  {
    name: "ssid",
    description: chalk.yellow("Digite o nome da rede Wi-Fi (SSID)"),
    required: true,
  },
  {
    name: "password",
    description: chalk.yellow("Digite a senha da rede"),
    hidden: true, // Esconde a senha ao digitar
    replace: "*",
    required: true,
  },
  {
    name: "encryption",
    description: chalk.yellow("Tipo de segurança (WPA/WEP/nopass)"),
    pattern: /^(WPA|WEP|nopass)$/i,
    message: "Deve ser WPA, WEP ou nopass",
    default: "WPA",
    required: true,
  },
  {
    name: "hidden",
    description: chalk.yellow("A rede é oculta? (true/false)"),
    type: "boolean",
    default: false,
  }
];

export default promptSchemaWifi;