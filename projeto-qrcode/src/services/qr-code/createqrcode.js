import prompt from "prompt";
import promptSchemaQRCode from "../../prompts-schema/prompt-schema-qrcode.js";
import handle from "./handleqrcode.js";

async function createQRCode() {
  prompt.get(promptSchemaQRCode, handle);
  prompt.start();
}

export default createQRCode;
