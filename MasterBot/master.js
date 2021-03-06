require('dotenv').config();
const MasterBot = new require('discord.js').Client();

async function MasterLogin() {
    await MasterBot.login(process.env.DISCORDTOKEN);
    console.log(`[DISC] Logged in as ${process.env.DISCORDNAME}`);
    return MasterBot;
}

// Example handler shows
var Handlers = {

};

// Distribute messages to the appropriate handlers
MasterBot.on('message', msg => {
    (Handlers[msg.channel.id] || {onMessage: () => null}).onMessage(msg);
});

// Activate intervals on all handlers
Object.keys(Handlers).map({ Interval } => setInterval(Interval(MasterBot), 5000));
