const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '*';

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});

client.on('ready', () => {
  client.user.setGame('*bhelp','watching');
  console.log('---------------');
  console.log(' Bot Is Online')
  console.log('---------------')
});
	
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag} !`);
                client.user.setActivity("*bhelp",{type: 'WATCHING'});

});




client.on('message', message => {
    if (message.author.bot) return;
     if (message.content ==="*bhelpar") {
		 message.channel.send('**تم ارسالك في الخاص**');
            
	
		 


 message.author.sendMessage(`**طرق ارسال البروكاست
 1-بروكاست لجميع اعضاء السرفر | *bc<الرساله>
 2-بروكاست لاعضاء الاونلين فقط  | *bc1<الرساله>
 3-بروكاست بامبيد             | *bc3<الرساله>
 ==================================================================

link Bot : https://discordapp.com/api/oauth2/authorize?client_id=525663482817806357&permissions=0&scope=bot

Server Support : https://discord.gg/BzVpKJB

==================================================================
 **`);
 

    }
});

client.on("message", message => {

            if (message.content.startsWith(prefix + "bc1")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : عدد الاعضاء المستلمين`); 
 message.delete(); 
};     
});

client.on("message", message => {

            if (message.content.startsWith(prefix + "bc")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'all').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'all').size}\` : عدد الاعضاء المستلمين`); 
 message.delete(); 
};     

});

client.on('message', message => {
        if (message.author.id === client.user.id) return;
        if (message.guild) {
       let embed = new Discord.RichEmbed()
        let args = message.content.split(' ').slice(1).join(' ');
    if(message.content.split(' ')[0] == '*bc3') {
        if (!args[1]) {
    message.channel.send("**.bc <message>**");
    return;
    }
            message.guild.members.forEach(m => {
       if(!message.member.hasPermission('ADMINISTRATOR')) return;
                var bc = new Discord.RichEmbed()
                .setAuthor(message.author.username, message.author.avatarURL)
                .addField('** الـسيرفر**', `${message.guild.name}`,true)
                .addField(' **الـمرسل **', `${message.author.username}#${message.author.discriminator}`,true)
                .addField(' **الرسالة** ', args)
                .setThumbnail(message.guild.iconURL)
                .setColor('RANDOM')
                m.send(`${m}`,{embed: bc});
            });
            const AziRo = new Discord.RichEmbed()
            .setAuthor(message.author.username, message.author.avatarURL)   
            .setTitle('✔️ | جاري ارسال رسالتك ') 
            .addBlankField(true)
            .addField('👥 | عدد الاعضاء المرسل لهم ', message.guild.memberCount , true)        
            .addField('📋| الرسالة ', args)
            .setColor('RANDOM')  
            message.channel.sendEmbed(AziRo);          
        }
        } else {
            return;
        }
});

client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === "*bhelp") {
	    
                        message.channel.send('**Choose**: *bhelpar ➾ arabic | *bhelpen ➾ english');

    }
});

client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === "*bhelpen") {
		 message.channel.send('**The Message Was Sent On Private**');
            
	
		 


 message.author.sendMessage(`**Ways to send a Bodcast
1-Procast for all server members  |*bc<the message>
2-Procast for only Online members |*bc1<the message>
3-Brocade Pamped                  |*bc2<the message>

==================================================================

link Bot : https://discordapp.com/api/oauth2/authorize?client_id=525663482817806357&permissions=0&scope=bot

Server Support : https://discord.gg/BzVpKJB

==================================================================
**`);

    }
});

client.login(process.env.BOT_TOKEN);
