const { SlashCommandBuilder } = require("discord.js");
const { createQr } = require("./controllers/createQR");
const { EmbedBuilder } = require("discord.js");
module.exports = {
  cooldown: 5,
  data: new SlashCommandBuilder()
    .setName("generarqr")
    .setDescription("crea un código QR")
    .addStringOption((option) =>
      option
        .setName("texto")
        .setDescription("Texto del código QR")
        .setRequired(true)
    )
    .addStringOption((option) =>
      option
        .setName("color")
        .setDescription("Color del código QR")
        .setRequired(true)
        .addChoices(
          { name: "Rojo", value: "red" },
          { name: "Verde", value: "green" },
          { name: "Azul", value: "blue" }
        )
    )
    .addStringOption((option) =>
      option
        .setName("colorfondo")
        .setDescription("Color de fondo del código QR")
        .setRequired(true)
        .addChoices(
          { name: "Negro", value: "black" },
          { name: "Blanco", value: "white" },
          { name: "Gris", value: "gray" }
        )
    ),
  async execute(interaction) {
    const texto = interaction.options.getString("texto");
    const color = interaction.options.getString("color");
    const colorfondo = interaction.options.getString("colorfondo");
    const imagecook = await createQr(texto, color, colorfondo);
    const embed = new EmbedBuilder()
      .setColor(0x0099ff)
      .setTitle("Generador de QR con goqr.me")
      .setURL("https://goqr.me/api/")
      .setAuthor({
        name: "Marcelo Garcia",
        iconURL:
          "https://getonbrd-prod.s3.amazonaws.com/uploads/webpros/avatars/c92f16d7156dde3521df472e2c17692f/pngwing.jpg",
        url: "https://www.linkedin.com/in/code-zeal/",
      })
      .setDescription(
        "Generador de código QR desarrollado por Marcelo Garcia, idea sacada de codementor.io"
      )
      .setThumbnail(imagecook)
      .addFields({ name: "\u200B", value: "\u200B" })
      .setImage(imagecook)
      .setTimestamp()
      .setFooter({
        text: `CÓDIGO QR CON TEXTO: ${texto}`,
        iconURL: imagecook,
      });
    await interaction.reply({ embeds: [embed] });
  },
};
