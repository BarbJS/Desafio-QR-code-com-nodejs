import chalk from "chalk";
import handle from "./handlepassword.js";

async function createPassword() {
  console.log(chalk.green("password"));
  const password = await handle();
  console.log(password);
}

export default createPassword;
