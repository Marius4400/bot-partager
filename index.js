const { Client, Intents } = require("discord.js");
require("dotenv").config();

const botToken = process.env.TOKEN;


// Créer une instance de mon bot
const client = new Client({
    intents: [Intents.FLAGS.GUILDS]
});

 // Une fois que mon bot est "ready" (en ligne)
client.once("ready", () => {
    console.log("Okay. Mon bot est en ligne!");
});

 // Permet de lier notre bot à notre serveur
client.login(botToken);