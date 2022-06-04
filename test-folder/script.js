const botlytics = require("botlytics");
const Discord = require('discord.js');
const dotenv = require('dotenv');
const client = new Discord.Client({intents: ["GUILD_MESSAGES", "GUILD_INTEGRATIONS", "DIRECT_MESSAGES", "GUILD_BANS", "GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGE_TYPING"]});

// On Ready
client.once('ready', () => {
    console.log('Ready!');
    botlytics.configure(Discord, client);

    const commands = [
        {
            name: 'test',
            description: 'test',
        },
        {
            name: 'stats',
            description: 'Get the data botlytics collected',
        }
    ]

   // client.guilds.cache.get("871298830103089162")?.commands.set(commands);

   // client.application.commands.set(commands);

});


client.login(dotenv.config().parsed.BOT_TOKEN);