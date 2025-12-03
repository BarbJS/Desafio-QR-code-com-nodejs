import prompt from "prompt";
import chalk from "chalk"; // Adicionado para melhor UX

import promptSchemaMain from "./prompts-schema/prompt-schema-main.js";

import createQRCode from "./services/qr-code/createqrcode.js";
import createPassword from "./services/password/createpassword.js";
import createWifiQRCode from "./services/wifi/createwifi.js"; 

async function main() {
  console.log(chalk.bgBlue.bold(" SYSTEM STARTED "));
  
  prompt.get(promptSchemaMain, async (err, choose) => {
    if (err) console.log(chalk.red(err));

    if (choose.select == 1) await createQRCode();
    if (choose.select == 2) await createPassword();
    if (choose.select == 3) await createWifiQRCode(); // Funcionalidade Nova
  });

  prompt.start();
}

main();