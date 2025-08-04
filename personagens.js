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