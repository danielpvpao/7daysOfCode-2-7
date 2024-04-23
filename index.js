let name = prompt("Qual o seu nome?");
let age = prompt("Quantos anos você tem?");
let language = prompt("Qual linguagem de programação você está estudando?");
let display = document.getElementById('display')
display.textContent = `"Olá ${name}, você tem ${age} anos e já está aprendendo ${language}!"`;
let resposta = prompt(`Você gosta de estudar ${language}? Responda com o número 1 para SIM ou 2 para NÃO`)
if(resposta == 1){
    alert("Muito bom! Continue estudando e você terá muito sucesso.")
}if(resposta == 2){
    alert("Ahh que pena... Já tentou aprender outras linguagens?")
};
