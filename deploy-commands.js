const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
require("dotenv").config();
//const { clientId, guildId, token } = require('./config.json');
const token = process.env.TOKEN;
const clientId = process.env.CLIENTID;
const guildId = process.env.SERVERID;

const commands = [
    new SlashCommandBuilder().setName('ping').setDescription('Renvoie pong!'),
    new SlashCommandBuilder().setName('server').setDescription('Renvoie les infos du serveur!'),
    new SlashCommandBuilder().setName('user').setDescription('Renvoie les infos de l\'utilisateur!'),
    new SlashCommandBuilder().setName('time').setDescription('Renvoie les infos sur l\'heure'),
    new SlashCommandBuilder().setName('youtube').setDescription('Renvoie une video youtube sur les nfts'),
    new SlashCommandBuilder().setName('meteo').setDescription('Renvoie les infos sur la meteo'),
    new SlashCommandBuilder().setName('google').setDescription('Resultat de votre recherche : ')
        .addStringOption(option =>
            option.setName('recherche')
                .setDescription('Votre recherche')
                .setRequired(true)),
    new SlashCommandBuilder().setName('googleimg').setDescription('Renvoie une image de nft sur google image')  
        .addStringOption(option =>
            option.setName('recherche')
                .setDescription('Votre recherche')
                .setRequired(true)),
]

    .map(command => command.toJSON());

const rest = new REST({ version: '9' }).setToken(token);

rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
    .then(() => console.log('Les commandes sont bien enregistrées sur le serveur.'))
    .catch(console.error);