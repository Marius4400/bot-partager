const { Client, Intents, Message, CommandInteraction, CommandInteractionOptionResolver } = require("discord.js");
require("dotenv").config();

const botToken = process.env.TOKEN;

//node-fetch api meteo
const fetch = require('node-fetch');


// Créer une instance de mon bot
const client = new Client({
    intents: [Intents.FLAGS.GUILDS]
});

//heure
const now = new Date();
const heure = now.getHours();
const minute = now.getMinutes();
const seconde = now.getSeconds();

//url-recherche : https://www.google.com/search?q=

 // Une fois que mon bot est "ready" (en ligne)
 client.once('ready', () => { 
    //() => est egal a anonyme function : function()
    console.log('Le bot est en ligne ma gueule!');
});

client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;

    const { commandName, options } = interaction;

    if (commandName === 'ping') {
        await interaction.reply('Pong!');
    } else if (commandName === 'server') {
        await interaction.reply(`Nom du serveur: ${interaction.guild.name}\nNombre de membre sur ce serveur: ${interaction.guild.memberCount}`);
    } else if (commandName === 'user') {
        await interaction.reply(`Bonjour ${interaction.member}\nVotre rôle est : ${interaction.GuildMemberRoleManager}`);
    } else if (commandName === 'time') {
        if(heure < 18) {
            await interaction.reply (`Bonjour ${interaction.member}\nIl est : ${heure} h ${minute} et ${seconde} secondes\nBonne journée `)
         } else {await interaction.reply (`Bonjour ${interaction.member}\nIl est : ${heure} h ${minute} et ${seconde} secondes\nBonne soirée`)
        }
    } else if (commandName === 'google'){
        const search = options.getString("recherche")
        const recherche = `https://www.google.com/search?q=${search}`
        await interaction.reply(`Bonjour ${interaction.member}\nVoici le résultat de la recherche : ${recherche} `)

    } else if (commandName === 'google img'){
        await interaction.reply (`Bonjour ${interaction.member}\nVoici le resultat de la recherche : `)

    } else if (commandName === 'youtube'){
        await interaction.reply (`Bonjour ${interaction.member}\nVoici le resultat de la recherche : `)

    } else if (commandName === 'meteo'){
        const ville = options.getString("ville")
        await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ville}&appid=f86afd5a2dc01fbea51d5bbf57de0ded`)
        .then(response => response.json());
    }
});
//code postal pz : 7600
// key api f86afd5a2dc01fbea51d5bbf57de0ded
//api.openweathermap.org/data/2.5/weather?q=Mons&appid=f86afd5a2dc01fbea51d5bbf57de0ded

 // Permet de lier notre bot à notre serveur
client.login(botToken);