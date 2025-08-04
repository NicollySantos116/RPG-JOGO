// Nível 1 - A jornada do(a) Herói(na) de Algorithmia
let Nome = "Merlyn";
let classe = "Maga";
let nivel = 20;
let vida = 100;
let ouro = 200;
let xp = 34;

let NOME_ARMA = "Estaca de Belmont";
let DANO_BASE = 85;
let NOME_ARMADURA = "Sangue Sombrio";
let DEFESA_BASE = 15;

xp += 50
ouro -= 40;
vida += 40;

let ataqueTotal = nivel + DANO_BASE;
let defesaTotal = DEFESA_BASE + (nivel/ 2);

let vidaSuficiente = vida > 70;
let ataqueForte =  ataqueTotal > 60;
let nivelAvancado = nivel >= 10;
let podeEnfrentarGuardiao = vidaSuficiente && (ataqueForte || nivelAvancado);

let restoXp = xp % 100;
let xpParaProximoNivel = 100 - restoXp;

console.log("🩸O Sangue do Último Crepúsculo:");
console.log("Nas sombras eternas da cidade Nocturna, onde a luz jamais toca.");
console.log(`${Nome}, da classe ${classe}, caminha solitária entre becos mergulhados em névoa.`);
console.log("Conhecida como Maga Vampira, ela se prepara para seu desafio mais sombrio.");
console.log(`Com o nível ${nivel}, sua magia alcançou um ápice que poucos ousaram testemunhar`);
console.log(`Empunha a lendária ${NOME_ARMA}, que amplifica seu ataque a níveis devastadores.`);
console.log(`Seu poder ofensivo totaliza ${ataqueTotal} pontos de puro dano sombrio.`);
console.log(`Protegida pela armadura ${NOME_ARMADURA}, sua defesa mística chega a ${defesaTotal} pontos.`);
console.log(`Com ${ouro} moedas de ouro amaldiçoado, Merlyn poderá adquirir artefatos proibidos.`);
console.log(`Atualmente possui ${xp} de XP. Faltam ${xpParaProximoNivel} pontos para subir de nível.`);
console.log("Esses itens serão vitais para negociar sua sobrevivência com forças das trevas.");
console.log("A missão: Derrotar o Guardião da Noite Eterna, entidade que consome a sanidade.");
console.log("Sua vida regenerada pulsa acima do esperado; sua alma arde com poder oculto.");
console.log("Em sua capa, circuitos místicos brilham em vermelho, igual sangue, como se alimentassem sua energia de rede oculta.");
console.log("A cada passo, o chão emite ruídos, como se fosse código sendo processado em tempo real.");
console.log("Ela não hesita, pois sabe que o destino de Nocturna repousa sobre os ombros.");
console.log("A batalha final está próxima... Merlyn respira fundo, e a escuridão aguarda sua resposta.");
console.log("");
console.log("️⚔️Status de Preparação:");
console.log(`💗 Vida Suficiente? ${vidaSuficiente}`);
console.log(`⚡ Ataque Forte? ${ataqueForte}`);
console.log(`🌟 Nível Avançado? ${nivelAvancado}`);
console.log(`☠️ Pode Enfrentar o Guardião da Noite Eterna? ${podeEnfrentarGuardiao}`);
console.log(`📊XP Atual:${xp} || Faltam  ${xpParaProximoNivel}  XP para próximo nível.`);

//Nivel 2 - A Batalha dos algoritimos
let nomePersonagem = "Merlyn";//Nome da heroína
let CLASSE = "Maga";//Classe da heroina
let vidaAtual = 100;//vida recuperada após os eventos
let vidaMaxima = 300;
let manaAtual = 105;
let manaMaxima = 200;
let NIVEL =  20;
let experiencia = 84;
let OURO = 160;

let FORCA = 200;
let defesa = 65;
let agilidade = 250;
let combatesVencidos = 1;

let localAtual = "Nocturna"
let missaoAtual = "Derrotar o Guardião da Noite Eterna, entidade que consome a sanidade."

console.log("💉A canção dos Imortais");
console.log("Na Cidade enfeitiçada de Nocturna, o tempo não flui... ele calcula.")
console.log(`Merlyn, a ${CLASSE}, avança pekas ruínas da Cúpula Central de Códigos, o coração sombrio de Algorithmia`);
console.log("O ar está carregado com loops infinitos e feitiços recursivos que distorcem a realidade.");
console.log(`Sua vida atual é ${vidaAtual}/${vidaMaxima}, e sua mana pulsa em ${manaAtual}/${manaMaxima}, como um compilador prestes a explodir.`);
console.log("Seu corpo carrega a memória do  combate anterior, mas sua mente está focada no próximo desafio: O Guardião da Noite Eterna.");
console.log("");
console.log("🏹 Estatíticas Atuais:");
console.log(`🧠 Força de Ataque: ${FORCA}`);
console.log(`🛡️Defesa Total : ${defesa}`);
console.log(`👟 Agilidade: ${agilidade}`);
console.log(`🏆 ${combatesVencidos}`);
console.log(`🎯 Missão Atual: ${missaoAtual}`);
console.log("");

console.log("🌑 Algo se agita nas sombras... Os dados estão lançados.");
console.log("Merlyn ergue a Estaca de Belmont, agora envolta em um brilho único, como se linhas de código mágico a envolvessem.");
console.log("Sua aramadura Samgue Sombrio canta em reposta, absorvendo a escuridão ao redor como uma função devorando argumentos");
console.log("");

console.log("🔮 Um aviso ecoa nos céus corrompidos de Nocturna:");
console.log("🗝️ Para vecer o Guardião, você deverá resolver o Algoritmo de Sangue, a equação que separa vivos e mortos.");
console.log("⚙️ O ambiente muda, agora, Merlyn está em uma arena de lógica pura.");
console.log("Os pilares da realidade vibra em 0 e 1. O Guardião surge: metade sombra, metade loop infinito.");
console.log("");