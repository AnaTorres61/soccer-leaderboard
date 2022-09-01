var jogadores = []

function adicionar(){
   var timeJogador = document.getElementById('time').value
   var escudoJogador = document.getElementById('escudo').value
   var novoJogador = {
      escudo: escudoJogador,
      time: timeJogador,
      vitorias: 0,
      empates: 0,
      derrotas: 0,
      pontos: 0
   }
   jogadores.push(novoJogador)
   exibirJogadoresNaTela(jogadores)
   document.getElementById('time').value = ""
   document.getElementById('escudo').value = ""
}

function calculaPontos(jogador){
  var pontos = (jogador.vitorias * 3) + jogador.empates
  return pontos
}

function exibirJogadoresNaTela(jogadores){
  var html = ""
  for(var i = 0; i < jogadores.length; i++){
    html += "<tr><td><button class='apagar' onClick='apagar(" + i + ")'>X</button></td>"
    html += "<td class='escudo'><img src='" + jogadores[i].escudo + "'></td>"
    html += "<td>" + jogadores[i].time + "</td>"
    html += "<td>" + jogadores[i].vitorias + "</td>"
    html += "<td>" + jogadores[i].empates + "</td>"
    html += "<td>" + jogadores[i].derrotas + "</td>"
    html += "<td>" + jogadores[i].pontos + "</td>"
    html += "<td><button class='vitoria' onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>"
    html += "<td><button class='empate' onClick='adicionarEmpate(" + i + ")'>Empate</button></td>"
    html += "<td><button class='derrota' onClick='adicionarDerrota(" + i + ")'>Derrota</button></td></tr>"
  }
  var tabelaJogadores = document.getElementById("tabelaJogadores")
  tabelaJogadores.innerHTML = html
}

function adicionarVitoria(i){
    var jogador = jogadores[i]
    jogador.vitorias++
    jogador.pontos = calculaPontos(jogador)
    exibirJogadoresNaTela(jogadores)
}
function adicionarEmpate(i){
    var jogador = jogadores[i]
    jogador.empates++
    jogador.pontos = calculaPontos(jogador)
    exibirJogadoresNaTela(jogadores)
}
function adicionarDerrota(i){
    var jogador = jogadores[i]
    jogador.derrotas++
    exibirJogadoresNaTela(jogadores)
}

function apagar(i){ 
  jogadores.splice(i)
  exibirJogadoresNaTela(jogadores)
}