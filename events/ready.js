const { ActivityType } = require("discord.js");
const client = require("../index");https://JUGNU-MUSIC.alixtr.repl.co

client.on("ready", async () => {
  console.log(`${client.user.username} Is Online`);
  client.user.setActivity({
    name: `x.help | /help`,
    type: ActivityType.Watching,
  });

  // loading database
  await require("../handlers/Database")(client);

  // loading dashboard
  require("../server");

  client.guilds.cache.forEach(async (guild) => {
    await client.updateembed(client, guild);
  });
});
