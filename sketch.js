//variáveis da bolinha
let XBolinha = 400;
let YBolinha = 225;
let diametro = 25;
let raio = diametro / 2 ;

//velocidade da bolinha
let velocidadeXBolinha = 11;
let velocidadeYBolinha = 11;
let raqueteComprimento = 20;
let raqueteAltura = 150;   

//variaveis da raquete
let xRaquete = 15;
let yRaquete = 150;

//variáveis do oponente
let xRaqueteOponente = 770;
let yRaqueteOponente = 150; 
let velocidadeYOponente;

let colidiu = false;

//placar do jogo
let meusPontos = 0;
let pontosOponentes = 0;

//sons do jogo
let raquetada;
let ponto;
let trilha;

function preload(){
 trilha = loadSound("trilha.mp3");
 ponto = loadSound("ponto.mp3");
 raquetada = loadSound("raquetada.mp3");
 
}

function setup() {
 createCanvas(800, 450);
 trilha.loop();
}
function draw() {
 background(0);
 mostraBolinha();
 movimentaBolinha();
 verificaColisaoBorda();
 mostraRaquete(xRaquete, yRaquete);
 movimentaMinhaRaquete();
 //verificaColisaoRaquete();
 verificaColisaoRaquete(xRaquete, yRaquete);
 mostraRaquete(xRaqueteOponente, yRaqueteOponente);
 movimentaRaqueteOponente();
 verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente);
 incluiPlacar();
 marcaPontos();
 
}
function mostraBolinha(){
 circle(XBolinha, YBolinha, diametro);
}
function movimentaBolinha(){
 XBolinha += velocidadeXBolinha;
 YBolinha += velocidadeYBolinha;
}
function verificaColisaoBorda(){
 if (XBolinha + raio > width ||
    XBolinha - raio < 0){   
   velocidadeXBolinha *= -1; 
}
 if (YBolinha + raio > height ||
    YBolinha - raio < 0){
   velocidadeYBolinha *= -1;   
}
}
function mostraRaquete(x,y){
rect(x, y, raqueteComprimento, raqueteAltura);
}

function movimentaMinhaRaquete(){
 if (keyIsDown(UP_ARROW)){
   yRaquete -= 10;
}
if (keyIsDown(DOWN_ARROW)){
   yRaquete += 10;
}
}
function verificaColisaoRaquete() {
   if (XBolinha - raio < xRaquete + raqueteComprimento && YBolinha - raio < yRaquete + raqueteAltura && YBolinha + raio > yRaquete) {
       velocidadeXBolinha *= -1;
     raquetada.play();
   }
} 
function verificaColisaoRaquete(x, y){
 colidiu = collideRectCircle(x, y, raqueteComprimento, raqueteAltura, XBolinha, YBolinha, raio);
 if (colidiu){
   velocidadeXBolinha *= -1;
         raquetada.play();
}
}


function movimentaRaqueteOponente(){
 if (keyIsDown(87)){
   yRaqueteOponente -= 10;
}
if (keyIsDown(83)){
   yRaqueteOponente += 10;
}
 
 
}

function incluiPlacar(){
 stroke(255);
 textAlign(CENTER);
 textSize(20);
 fill(color(0, 0, 255));
 rect(180, 33, 40, 20)
 fill(255);
 text(meusPontos, 200, 50);
 fill(color(220, 20, 60));
 rect(581, 33, 40, 20)
 fill(255);
 text(pontosOponentes, 600, 50);  
}

function marcaPontos(){
 if (XBolinha > 790){
   meusPontos += 1;
   ponto.play();
}
 if (XBolinha < 10){
   pontosOponentes +=1;
   ponto.play();
 }
}
