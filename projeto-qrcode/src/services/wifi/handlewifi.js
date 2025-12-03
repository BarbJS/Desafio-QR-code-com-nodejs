import qr from "qrcode-terminal";
import chalk from "chalk";

async function handle(err, result) {
  if (err) {
    console.log(chalk.red("Erro na aplicação"));
    return;
  }

  // Formatação padrão para QR Code de WiFi: WIFI:T:WPA;S:MyNetwork;P:mypass;;
  const wifiString = `WIFI:T:${result.encryption};S:${result.ssid};P:${result.password};H:${result.hidden};;`;

  qr.generate(wifiString, { small: true }, (qrcode) => {
    console.log(chalk.green("\nQR Code do Wi-Fi gerado com sucesso:\n"));
    console.log(qrcode);
  });
}

export default handle;