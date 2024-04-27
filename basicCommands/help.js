const { EmbedBuilder, ActionRowBuilder, ButtonBuilder } = require('discord.js');
const { ButtonStyle } = require('discord.js');
const db = require("../mongodb");
module.exports = {
  name: 'help',
  aliases: ['hlp', 'h'],
  description: 'Shows a list of available commands',
  execute(message, args) {
    const botUser = message.client.user;
    const botPing = Date.now() - message.createdTimestamp;
    const serverCount = message.client.guilds.cache.size;
    const embed = new EmbedBuilder()
      .setColor('#2b71ec')
      .setAuthor({
        name: 'Im here to Help!',
        iconURL: 'https://cdn.discordapp.com/attachments/1175487983915376662/1175667506791325706/communication.png?ex=656c10b0&is=65599bb0&hm=e378f1b355a2401bcab504b08a0766001d6b7c090c91ce0a7a7a87c868feb955&', 
        url: 'https://discord.gg/ErmwR7xn'
    })
     
      .setDescription(`__**STATS :**__\n\n> **📊 Bot in servers:** ${serverCount}\n> **🟢 Bot Ping:** ${botPing}ms\n> **👑 Made By [u n i](https://www.instagram.com/thai_ng.photos/)**\n\n__**COMMANDS :**__ `)
      .addFields(
        // Basic commands category
        //{
          //name: '▶️  Basic',
          //value: '`avatar`, `owner`, `support`, `invite`, `userinfo`',
          //inline: true,
        //},
        // Music commands category
        {
          name: '▶️  Music',
          value: '`play`, `stop`, `history`,`volume`,`pause`,`resume`,`247`',
          inline: true,
        },
        //fun category
        //{
          //name: '▶️  Fun',
          //value: ' `ascii`, `joke`, `meme`, `roll`',
          //inline: true,
        //},
        //image category
        //{
          //name: '▶️  Image',
          //value: '`cat`, `dog`',
          //inline: true,
        //},
        //anime category
        //{
          //name: '▶️  Anime',
          //value: '`<prefix>animecommands for more info`',
          //inline: true,
        //},
        // Utility commands category
        //{
          //name: '▶️  Utility',
          //value: '`kick`, `ban`, `serverinfo`,`userinfo`, `clear`',
          //inline: true,
        //}
      )
      .setThumbnail(botUser.avatarURL({ dynamic: true, format: 'png', size: 1024 }))
      .setImage(`https://scontent.cdninstagram.com/v/t51.2885-19/431280214_1787401838403494_6412576113538425908_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent.cdninstagram.com&_nc_cat=102&_nc_ohc=zBlshG274EEQ7kNvgE95Yzj&edm=APs17CUBAAAA&ccb=7-5&oh=00_AfDlVTKOWushDI1yQ1PxeTdOyxu7HU5SLMRZt8GlWgsgMw&oe=6632A841&_nc_sid=10d13b`);

    const button1 = new ButtonBuilder()
      .setLabel('Instagram')
      .setURL('https://www.instagram.com/thai_ng.photos/')
      .setStyle(ButtonStyle.Link);

    const button2 = new ButtonBuilder()
      .setLabel('Discord')
      .setURL('https://discord.gg/ErmwR7xn')
      .setStyle(ButtonStyle.Link);

    const button3 = new ButtonBuilder()
      .setLabel('Code')
      .setURL('https://github.com/ThaiNguyen2402/MusicBot')
      .setStyle(ButtonStyle.Link);
      
    const row = new ActionRowBuilder()
      .addComponents(button1, button2, button3);
    
    message.reply({ embeds: [embed], components: [row] });
  },
};
