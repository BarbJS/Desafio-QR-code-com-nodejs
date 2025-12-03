import prompt from "prompt";
import promptSchemaWifi from "../../prompts-schema/prompt-schema-wifi.js";
import handle from "./handlewifi.js";

async function createWifiQRCode() {
  console.log(chalk.cyan("--- Gerador de QR Code para Wi-Fi ---"));
  prompt.get(promptSchemaWifi, handle);
  prompt.start();
}

export default createWifiQRCode;