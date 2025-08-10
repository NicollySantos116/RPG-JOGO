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

console.log("");
console.log("🩸O Sangue do Último Crepúsculo:");
console.log("Nas sombras eternas da cidade Nocturna, onde a luz jamais toca.");
console.log(`${Nome}, da classe ${classe}, caminha solitária entre becos mergulhados em névoa.`);
console.log("Conhecida como Maga Vampira, ela se prepara para seu desafio mais sombrio.");
console.log(`Com o nível ${nivel}, sua magia alcançou um ápice que poucos ousaram testemunhar.`);
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
let nomePersonagem = "Merlyn"; // Nome da heroína
let CLASSE = "Maga"; // Classe da heroina
let vidaAtual = 100; // vida recuperada após os eventos
let vidaMaxima = 300; // Vida Máxima
let manaAtual = 105; // Mana atual
let manaMaxima = 200; // Mana Máxima 
let NIVEL =  20; // Nível
let experiencia = 84; // XP acumulada
let OURO = 160; // Ouro Restante

let FORCA = 200; // Força total (poder de ataque)
let defesa = 65; // Defesa total 
let agilidade = 250; // Agilidade total
let combatesVencidos = 1 ;// Número de vitórias até agora

let localAtual = "Nocturna"; // Local da missão atual
let missaoAtual = "Derrotar o Guardião da Noite Eterna, entidade que consome a sanidade."

// Continuação da narrativa
console.log("");
console.log(" 💉A canção dos Imortais ");
console.log("Na Cidade enfeitiçada de Nocturna, o tempo não flui... ele calcula.")
console.log(`${nomePersonagem}, a ${CLASSE}, avança pelas ruínas da Cúpula Central de Códigos, o coração sombrio de Algorithmia`);
console.log("O ar está carregado com loops infinitos e feitiços recursivos que distorcem a realidade.");
console.log(`Sua vida atual é ${vidaAtual}/${vidaMaxima}, e sua mana pulsa em ${manaAtual}/${manaMaxima}, como um compilador prestes a explodir.`);
console.log("Seu corpo carrega a memória do  combate anterior, mas sua mente está focada no próximo desafio: O Guardião da Noite Eterna.");

// Exibir atributos da personagem
console.log("");
console.log("🏹 Estatísticas Atuais:");
console.log(`🧠 Força de Ataque: ${FORCA}`); // Mostra força 
console.log(`🛡️Defesa Total : ${defesa}`); // Mostra defesa
console.log(`👟 Agilidade: ${agilidade}`); // Mostra agilidade
console.log(`🏆 Combates vencidos: ${combatesVencidos}`); // Quantidade de Combates vencidos
console.log(`🎯 Missão Atual: ${missaoAtual}`); //Exibe a Missão em andamento

// Clima de tensão e preparação para o combate 
console.log("");
console.log("🌑 Algo se agita nas sombras... Os dados estão lançados.");
console.log("Merlyn ergue a Estaca de Belmont, agora envolta em um brilho único, como se linhas de código mágico a envolvessem.");
console.log("Sua armadura Sangue Sombrio canta em resposta, absorvendo a escuridão ao redor como uma função devorando argumentos");
console.log("");

// A arena é ativada e o inimigo surge
console.log("🔮 Um aviso ecoa nos céus corrompidos de Nocturna:");
console.log("🗝️ Para vencer o Guardião, você deverá resolver o Algoritmo de Sangue, a equação que separa vivos e mortos.");
console.log("⚙️ O ambiente muda, agora, Merlyn está em uma arena de lógica pura.");
console.log("Os pilares da realidade vibram em 0 e 1. O Guardião surge: metade sombra, metade loop infinito.");

console.log("");
console.log("🔥 A Batalha dos Algoritmos Começa!");

// Simulação de dano e defesa
let danoGuardiao = 20; // Dano que o inimigo causa 
let danoRecebido = danoGuardiao - defesa; // Reduz dano com base

vidaAtual -= danoRecebido; // Atualiza vida após ataque inimigo
if(vidaAtual < 0) vidaAtual = 0; // Evitar vida negativa

console.log(`💥 O Guardião ataca com  ${danoGuardiao} de dano sombrio!`);
console.log(`🩸 Merlyn resiste, mas sofre: ${danoRecebido} de dano.`);
console.log(`❤️ Vida restante: ${vidaAtual}/${vidaMaxima}`);
console.log("");

// Verificação simples - estado físico da heroína 
if (vidaAtual >= 80) {
    console.log("🦇 Merlyn tem sangue de sobra correndo nas veias, sua vitalidade está no auge. A criatura das trevas está pronta pro combate.");
} else {
console.log("🩸 A vitalidade de Merlyn vacila, mas sua fúria é constante. Mesmo enfraquecida, ela enfrentará  a morte com os dentes à mostra.");
}

console.log("");

// Condicionais Encadeadas - Estratégias avançada de combate
console.log("🌀 Estratégia de Combate :");

// Se tem muita mana e vida, usa magia suprema
if(manaAtual >= 80 && vidaAtual > 100){
console.log("🔮 Merlyn canaliza magia suprema e invoca o Tomo da Lua Sangrenta! ");
let danoEspecial = FORCA + agilidade + 50;
console.log(`💢 O Guardião recebe ${danoEspecial} de dano místico total!`);
manaAtual -= 80; // Consome  mana 
} else if (agilidade > 200) { //Se tiver agilidade alta, usa ataque rápido
    console.log("⚡ Com velocidade sobrenatural, Merlyn ativa o Loop Fantasma!");
    let danoRapido = FORCA + (agilidade * 0.75);
    console.log(`🏹 O Guardião sofre ${danoRapido}  de dano veloz e preciso.`);
    manaAtual -= 30;
} else { // Caso contrário, ataque físico
    console.log("🛡️ Sem recursos mágicos suficientes, Merlyn opta por um ataque físico direto.");
    let danoBasico = FORCA / 2;
    console.log(`⚔️ Dano causado : ${danoBasico}`);
}

console.log("");

//  Aviso sobre o ambiente
if (localAtual === "Nocturna"){
    console.log("🌫️ A névoa densa dificulta a visão, atenção redobrada!");
}

// Estado do ouro
if(OURO >= 200){
    console.log(`💰 Com o ouro abundante, ${nomePersonagem} adquire poções de cura extras!`);
    vidaAtual += 30; // Consegue vida extra
} else {
    console.log("💸 Ouro escasso! Ela precisa economizar para o próximo desafio.")
}

// Análise de nível e experiência
if(NIVEL < 15){
    console.log("🟦 Merlyn ainda está desenvolvendo suas habilidades básicas.");
} else if(NIVEL >= 15 && experiencia < 50){
    console.log("🟩 Embora seja experiente, a magia de Merlyn ainda pode evoluir bastante.");
} else if(NIVEL >= 15 && experiencia >= 50){
    console.log("🟧 A mestria da magia está próxima, o poder quase incontrolável.");
} else{
    console.log("🟥 Um mistério envolve o verdadeiro potencial de Merlyn...");
}

// Resultado final da batalha e Reação da Personagem
if (vidaAtual > 0) {
    console.log("🔁 Merlyn contra-ataca com um feitiço de recursão infinita!");
    let danoFinal = FORCA + (agilidade / 2); // Dano total do golpe final

    console.log(`🌪️ Ela causa ${danoFinal} de dano mágico ao Guardião!`);
    console.log("🧬 O código do Guardião começa a se corromper, seus bytes  gritam em  dor digital.");
   
    // Atualização de progresso da personagem
    combatesVencidos++; // Incrementa vitórias 
    experiencia += 60; // Ganha XP
    OURO += 100; // Ganha ouro

    console.log("");
    console.log("✅ Vitória!");
    console.log(`🏆 Combates Vencidos : ${combatesVencidos}`); // Mostrar os combates vencidos
    console.log(`✨ Experiência Atual: ${experiencia}`); // Mostrar a experiência
    console.log(`💰Ouro Atual: ${OURO}`); // Mostrar moedas de ouro

    let restoExperiencia = experiencia % 100; // XP restante para o próximo nível
    let xpParaSubir = 100 - restoExperiencia;

    console.log(`📉 Faltam ${xpParaSubir} de XP para o próximo nível.`);
} else { // Caso a personagem tenha perdido a batalha
console.log(`☠️ ${nomePersonagem} caiu em combate, A cidade de Nocturna mergulha em um silêncio sepulcral...`);
console.log("💀 Mas a magia verdadeira jamais morre. Há sempre um novo ciclo.");
}

//🦇 O Banquete Final da Noite Sem Fim
// Continuação do RPG de Merlyn - Nível 3: O Castelo dos Arrays

let Personagem = "Merlyn";
console.log("");
console.log("🦇 O Banquete Final da Noite Sem Fim");
console.log(`Após vencer as provações anteriores, ${Personagem} chega diante do portão, onde o ar se torna denso e pesado, carregado de mistérios não revelados.`);
console.log("Lá dentro, corredores infinitos guardam inimigos, tesouros e segredos ancestrais que sussuram através das paredes feitas de pedra e sombra.");
console.log("Cada passo ecoa como um código antigo, e a magia pulsante do castelo parece responder à sua presença, testando sua coragem e astúcia.");
console.log("O silêncio é cortado apenas pelo som distante de asas e o tilintar de correntes, um aviso sombrio do que está por vir.");
console.log("Mas Merlyn não hesita, pois sabe que apenas ao desvendar os enigmas  ocultos poderá alcançar o poder que busca para derrotar o Guardião da Noite Eterna.")
console.log("");

// Inventário inicial
let inventario = ["Estaca de Belmont", "Poção de Sangue","Sangue Sombrio"];
// Adicionando item encontrado no Castelo
inventario.push("Rosa Negra de Ébano");

// Lista de inimigos do Castelo
let inimigos = [

"Gárgula Sanguinária de Nocturna",

"Cavaleiro Vampiro de Eclipse",

"Dama Pálida do Crepúsculo",

"Morcegos da Penumbra"

];

// Lista de Aliados do Castelo
let aliados = [ 
    "Dayse, a Arqueira",

     "Max, o Guerreiro"
    
    ];


// Salas do Castelo
let salas = [

"Salão dos Espelhos Partidos",

"Biblioteca Proibida",

"Salão do Banquete",

"Câmara do trono"

];

// Tesouros que Merlyn pode encontrar
let tesouros = [

    "Anel Carmesim",

    "Tomo Proibido",

    "Chave Dourada",

    "Cálice de Sangue Eterno"

];

// Possíveis frases de vitória
let frasesVitoria= [

    "crava a estaca e ouve o último grito ecoar pela eternidade.",

    "invoca chamas rubras que consomem seu inimigo até virar cinzas.",

    "sorri friamente enquanto a sombra do adversário se dissolve.",

    "liberta uma rajada de magia ancestral que despedaça a criatura.",

    "entoa um feitiço proibido que sela a lama do inimigo para sempre."

];

console.log("");
//Antes de entrar no castelo, Merlyn decide usar uma poção para se fortalecer
console.log("🧪 Merlyn usa uma Poção do inventário para se fortalecer... ");

// Remove o último item do inventário (simulando que usou a poção)
let itemUsado = inventario.pop();
console.log(`🌟 Item usado: ${itemUsado}`);
console.log(`🧳 Inventário restante:  ${inventario.join(", ")}`); 

// Mostra os aliados de Merlyn
console.log("🪖 Aliados que acompanham Merlyn: ");
for (let aliado of aliados) {
    console.log(`${aliado}`);
}
console.log("");

// Percorrendo as salas
for (let i = 0; i< salas.length; i++){
    console.log(`🏰 Merlyn entra na sala: ${salas[i]}`);

    // Encontra o inimigo da sala
    console.log(`⚔️ Inimigos à vista: ${inimigos[i]}`);

    // Escolhe aleatoriamente frase de vitória 
    let fraseAleatoria = frasesVitoria[Math.floor(Math.random() * frasesVitoria.length)];
    console.log(`🩸 Merlyn usa ${inventario[0]} e  ${fraseAleatoria}`);

    // Simula  a batalha
    console.log(`Merlyn usa ${inventario[0]} e derrota ${inimigos[i]}`);

    // Chance de encontrar o tesouro (execeto na última sala)
    if(i < salas.length - 1 ){
        let tesouroEncontrado = tesouros[i % tesouros.length];
        console.log(`💎 Tesouro encontrado: ${tesouroEncontrado}`);
        inventario.push(tesouroEncontrado);
    }

}

// Inventário final
console.log("📜 Inventário final de Merlyn ");
console.log(inventario);