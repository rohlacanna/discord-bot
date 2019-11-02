//Carregando a biblioteca discord
const Discord = require("discord.js");
//Conexão ao cliente
const client = new Discord.Client();
//Carregar arquivo config.json
const config = require("./config.json");

//Evento ready que vai iniciar assim que o bot estiver online
client.on("ready", () => {
  console.log(
    `Bot foi iniciado, com ${client.users.size} usuários, em ${client.channels.size} canais, em ${client.guilds.size} servidores.`
  );
  client.user.setGame("twitch.tv/romulohe4rt");
});

client.on("raw", async dados => {
  if (
    dados.t !== "MESSAGE_REACTION_ADD" &&
    dados.t !== "MESSAGE_REACTION_REMOVE"
  )
    return;
  if (dados.d.message_id != "639939737163005952") return;

  let servidor = client.guilds.get("612098321925931009");
  let membro = servidor.members.get(dados.d.user_id);

  let PMU = servidor.roles.get("634163169086013440"),
    PRU = servidor.roles.get("634163312992714762"),
    ROTA = servidor.roles.get("634163250296127492"),
    RECRUTA = servidor.roles.get("634161978402668546"),
    SOLDADO = servidor.roles.get("634161612013436965"),
    CABO = servidor.roles.get("634161541012389918"),
    SARGENTO = servidor.roles.get("634161204792655874"),
    TENENTE = servidor.roles.get("634160978296176651"),
    CAPITAO = servidor.roles.get("634160881097244692"),
    MAJOR = servidor.roles.get("634160840500707364"),
    TENENTECORONEL = servidor.roles.get("639988737148846080"),
    CORONEL = servidor.roles.get("634160489399844866");

  if (dados.t === "MESSAGE_REACTION_ADD") {
    if (dados.d.emoji.name === "🎖") {
      if (membro.roles.has(PMU)) return;
      membro.addRole(PMU);
    } else if (dados.d.emoji.name === "🚔") {
      if (membro.roles.has(PRU)) return;
      membro.addRole(PRU);
    } else if (dados.d.emoji.name === "🔫") {
      if (membro.roles.has(ROTA)) return;
      membro.addRole(ROTA);
    } else if (dados.d.emoji.name === "👋") {
      if (membro.roles.has(RECRUTA)) return;
      membro.addRole(RECRUTA);
    } else if (dados.d.emoji.name === "🙏") {
      if (membro.roles.has(SOLDADO)) return;
      membro.addRole(SOLDADO);
    } else if (dados.d.emoji.name === "🙌") {
      if (membro.roles.has(CABO)) return;
      membro.addRole(CABO);
    } else if (dados.d.emoji.name === "✌") {
      if (membro.roles.has(SARGENTO)) return;
      membro.addRole(SARGENTO);
    } else if (dados.d.emoji.name === "👌") {
      if (membro.roles.has(TENENTE)) return;
      membro.addRole(TENENTE);
    } else if (dados.d.emoji.name === "👍") {
      if (membro.roles.has(CAPITAO)) return;
      membro.addRole(CAPITAO);
    } else if (dados.d.emoji.name === "🤑") {
      if (membro.roles.has(MAJOR)) return;
      membro.addRole(MAJOR);
    } else if (dados.d.emoji.name === "🍅") {
      if (membro.roles.has(TENENTECORONEL)) return;
      membro.addRole(TENENTECORONEL);
    } else if (dados.d.emoji.name === "♨") {
      if (membro.roles.has(CORONEL)) return;
      membro.addRole(CORONEL);
    }
  }
  if (dados.t === "MESSAGE_REACTION_REMOVE") {
    if (dados.d.emoji.name === "🎖") {
      if (membro.roles.has(PMU)) return;
      membro.removeRole(PMU);
    } else if (dados.d.emoji.name === "🚔") {
      if (membro.roles.has(PRU)) return;
      membro.removeRole(PRU);
    } else if (dados.d.emoji.name === "🔫") {
      if (membro.roles.has(ROTA)) return;
      membro.removeRole(ROTA);
    } else if (dados.d.emoji.name === "👋") {
      if (membro.roles.has(RECRUTA)) return;
      membro.removeRole(RECRUTA);
    } else if (dados.d.emoji.name === "🙏") {
      if (membro.roles.has(SOLDADO)) return;
      membro.removeRole(SOLDADO);
    } else if (dados.d.emoji.name === "🙌") {
      if (membro.roles.has(CABO)) return;
      membro.removeRole(CABO);
    } else if (dados.d.emoji.name === "✌") {
      if (membro.roles.has(SARGENTO)) return;
      membro.removeRole(SARGENTO);
    } else if (dados.d.emoji.name === "👌") {
      if (membro.roles.has(TENENTE)) return;
      membro.removeRole(TENENTE);
    } else if (dados.d.emoji.name === "👍") {
      if (membro.roles.has(CAPITAO)) return;
      membro.removeRole(CAPITAO);
    } else if (dados.d.emoji.name === "🤑") {
      if (membro.roles.has(MAJOR)) return;
      membro.removeRole(MAJOR);
    } else if (dados.d.emoji.name === "🍅") {
      if (membro.roles.has(TENENTECORONEL)) return;
      membro.removeRole(TENENTECORONEL);
    } else if (dados.d.emoji.name === "♨") {
      if (membro.roles.has(CORONEL)) return;
      membro.removeRole(CORONEL);
    }
  }
});

//Criando evento message
client.on("message", async message => {
  //PARA QUE O BOT NÃO RESPONDA A OUTROS BOTS
  if (message.author.bot) return;

  if (message.content.toLowerCase() === "boa noite") {
    message.react("💤");
    message.channel.send("noite!");
  }
  if (message.content.toLowerCase() === "bom dia") {
    message.react("🌅");
    message.channel.send("dia!");
  }
  if (message.content.toLowerCase() === "boa tarde") {
    message.react("🌞");
    message.channel.send("tarde!");
  }
  //PROPOSTA PARA ENVIAR COMANDOS POR DM
  if (message.channel.type === "dm") return;

  //SEPARANDO ATRAVES DE ARGUMENTOS O NOME DO COMANDO E OS PARAMETROS DO COMANDO
  const args = message.content
    .slice(config.prefix.length)
    .trim()
    .split(/ +/g);
  const comando = args.shift().toLowerCase();

  //CRIANDO COMANDOS
  //COMANDO PING
  if (comando === "ping") {
    const m = await message.channel.send("Ping?");
    m.edit(
      `Pong! A Latência é ${m.createdTimestamp -
        message.createdTimestamp}ms. A Latencia da API é ${Math.round(
        client.ping
      )}ms`
    );
  }
});

client.login(config.token);
