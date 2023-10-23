<a id="english-readme"></a>
README (ENGLISH)

# Discord QR Code Generator Bot

[Versión en Español](#readme-en-español)

## Introduction

QR codes have become ubiquitous in many countries in recent years. With the help of bots, QR codes can be easily generated. Through this project, you will learn to use Discord bots to convert command arguments into outputs like QR codes, without the need to search for a QR code generation website. During this project, I gained valuable experience in implementing DiscordJS and utilizing the goqr.me API.

## Usage

1. Clone the repository to your local machine using the command: `git clone https://github.com/Code-Zeal/Discord-bot-QR-code-generator`.
2. Install the required dependencies using one of the following commands based on your preferred package manager:
   - For npm: `npm install`
   - For bun: `bun install`
   - For Yarn: `yarn install`
   - For pnpm: `pnpm install`
3. Configure the `config.json` file with your Discord bot token and any other necessary parameters.
4. Run the `deploy-commands.js` script to deploy the slash commands to your Discord server.
5. Finally, execute the `index.js` file to start the Discord QR Code Generator Bot.

## Requirements

The user will send a command in the Discord chat with an argument. The argument, converted into a QR code, will be sent back to the user.

## Additional Challenge

- Add a slash command that triggers the bot to generate a QR code.
- Allow users to customize the color and/or size of the QR code.

## Suggested Implementation

- This project can be completed using TypeScript for smoother handling.
- You can leverage Google's free API for QR code generation.

---

## Guides:

[Discordjs.guide](https://discordjs.guide/)
For me this is the best guide to get started with discord bots.

<a id="readme-en-español"></a>

README (ESPAÑOL)

# Bot Generador de Códigos QR para Discord

[English version](#english-readme)

## Introducción

Los códigos QR se han vuelto omnipresentes en muchos países en los últimos años. Con la ayuda de bots, los códigos QR pueden generarse fácilmente. A través de este proyecto, aprenderás a utilizar bots de Discord para convertir argumentos de comandos en salidas como códigos QR, sin necesidad de buscar un sitio web de generación de códigos QR. Durante este proyecto, adquirí muchos conocimientos valiosos y desarrollé nuevas habilidades. Aprendí a integrar DiscordJS y la API de goqr.me, lo que me permitió comprender mejor el funcionamiento de la generación de códigos QR y la interacción con bots en Discord.

## Uso

1. Clona el repositorio en tu máquina local usando el comando: `git clone https://github.com/Code-Zeal/Discord-bot-QR-code-generator`.
2. Instala las dependencias necesarias utilizando uno de los siguientes comandos según tu administrador de paquetes preferido:
   - Para npm: `npm install`
   - Para bun: `bun install`
   - Para Yarn: `yarn install`
   - Para pnpm: `pnpm install`
3. Configura el archivo `config.json` con el token de tu bot de Discord y cualquier otro parámetro necesario.
4. Ejecuta el script `deploy-commands.js` para desplegar los comandos de barra inclinada en tu servidor de Discord.
5. Finalmente, ejecuta el archivo `index.js` para iniciar el Bot Generador de Códigos QR para Discord.

## Requisitos

El usuario enviará un comando en el chat de Discord con un argumento. El argumento, convertido en un código QR, se enviará posteriormente de vuelta al usuario.

## Desafío Adicional

- Agrega un comando de barra inclinada que active al bot para generar un código QR.
- Permite al usuario cambiar el color y/o tamaño del código QR.

## Implementación Sugerida

- Este proyecto puede completarse utilizando TypeScript para un mejor manejo.
- Puedes utilizar la API gratuita de Google para la generación de códigos QR.

## Guia

[Discordjs.guide](https://discordjs.guide/)
Para mi es la mejor guía para empezar con bots de discord.
