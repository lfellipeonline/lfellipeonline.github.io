//Estilização em JS (Ta meio bagunçado, mas é oq tem pra hj)
document.addEventListener('DOMContentLoaded', function() {
let cliqueaqui = document.getElementById('verde')
cliqueaqui.style.fontFamily = 'headingnow-88heavy'
cliqueaqui.style.fontSize = '30px'
let inc = document.getElementById('inc')
inc.style.marginLeft = '530px'
})

//Atributos do nome
let nome = prompt(`Olá! Bem vindo ao website da Abobora Inteligente. Qual o seu nome?`)
let nomereplace = nome.toLowerCase().replace('abóbora', 'abobora') //Substituição de caracter
alert('Olá ' + nome + ' você entrou no website da abobora inteligente!') //Concatenação (+)
document.write(`Olá ${nome}, Seu nome tem ${nome.length} letras<br>`)
    if (nomereplace == 'abobora') {
        document.write(`VOCÊ É UM DE NÓS!<br>`) //Condicional if
    }

//Atributos dos números    
let num1 = Number(prompt('Digite um numero:'))
let num2 = Number(prompt('Digite outro numero:'))
const soma = num1 + num2
document.write(`O resultado da soma foi <b>${String(soma)}</b>`) //Conversão de tipo ${String()}
    if (soma > 100000) {
        document.write('<br><b>Uau! Que grande número!</b>')
    } else {
            document.write('<br>Que número pequeno!')
    }


   
//Exibição no console  
console.log('Valor interno de nomereplace:', nomereplace)