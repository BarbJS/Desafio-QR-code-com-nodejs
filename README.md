# 📦 Gerador de QR codes para E-commerce - Tools Kit 

Este projeto é um conjunto de ferramentas de linha de comando (CLI) desenvolvido com **Node.js**. Ele foi criado como parte de um desafio de lógica de programação e arquitetura de projetos em JavaScript, focando na modularização e uso eficiente de recursos do ecossistema Node. Este repositório foi desenvolvido como parte do desafio de projeto do curso de Node.js da plataforma DIO (Digital Innovation One), proposto pelo professor Felipe Aguiar.

## 🎯 Objetivos do Desafio

O objetivo principal foi criar uma aplicação robusta utilizando JavaScript Moderno (ES Modules) que fosse capaz de:
1.  Gerar **QR Codes** para links de produtos ou páginas de e-commerce.
2.  Gerar **Senhas Fortes** aleatórias para segurança de sistemas.
3.  **(Extra)** Gerar **QR Codes de Wi-Fi** para facilitar o acesso de clientes em lojas físicas.

## 🚀 Funcionalidades

* **QR Code Generator:** Cria QR Codes renderizados diretamente no terminal. Suporta links e textos simples.
* **Password Generator:** Cria senhas baseadas em variáveis de ambiente, permitindo configurar o uso de letras maiúsculas, minúsculas, números e caracteres especiais.
* **Wi-Fi QR Code (Feature Extra):** Gera um código escaneável que conecta smartphones automaticamente à rede Wi-Fi configurada (SSID/WPA).

## 🛠️ Tecnologias Utilizadas

* **Node.js:** Runtime JavaScript.
* **Prompt:** Para entrada de dados interativa no terminal.
* **Chalk:** Para estilização e coloração de logs no terminal (UX).
* **QRCode-Terminal:** Para renderização dos códigos QR.
* **Dotenv (Nativo):** Uso de variáveis de ambiente com `process.env`.

## 📂 Estrutura de Arquivos

A arquitetura segue o padrão de separação de responsabilidades (Controller/Service/View via Prompt):
projeto-qrcode/ 
├── src/ 
│├── index.js # Ponto de entrada 
│├── prompts-schema/ # Esquemas de validação dos inputs 
││├── prompt-schema-main.js 
││├── prompt-schema-qrcode.js 
││└── prompt-schema-wifi.js 
│├── services/ # Lógica de negócio 
││├── password/ 
│││└── createpassword.js
│││└── handlepassword.js
│││└── utils/
││││└── permitted-characters.js
││├── qr-code/ 
│││└── createqrcode.js
│││└── handleqrcode.js
││└── wifi/ # (Nova funcionalidade)  
│││└── createwifi.js
│││└── handlewifi.js
├── .env # Configurações sensíveis e regras de senha 
└──  package.json # Dependências e scripts 

## ⚙️ Como Rodar o Projeto

### Pré-requisitos
* Node.js instalado (versão 20.6.0 ou superior recomendada para suporte nativo a `.env`).

### Passo a Passo

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/seu-usuario/projeto-qrcode.git](https://github.com/seu-usuario/projeto-qrcode.git)
    cd projeto-qrcode
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Configure o ambiente:**
    Certifique-se de que o arquivo `.env` existe na raiz com as configurações desejadas:
    ```env
    UPPERCASE_LETTERS=true
    LOWERCASE_LETTERS=true
    NUMBERS=true
    SPECIAL_CHARACTERS=true
    PASSWORD_LENGTH=12
    ```

4.  **Execute a aplicação:**
    Utilize o script configurado no `package.json` para carregar as variáveis de ambiente automaticamente:
    ```bash
    npm start
    ```

5.  **Interaja e aproveite:**
    Siga as instruções no terminal. Escolha:
    * `1` para criar um QR Code de link.
    * `2` para gerar uma senha segura.
    * `3` para criar um QR Code de Wi-Fi.
