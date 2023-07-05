const botao = document.querySelector('.bnt').addEventListener('click', () => {
   conselhoAleatorio()
})
 
async function criarConselho(){
   const url = "https://api.adviceslip.com/advice"
   const resposta = await fetch(url)
   return await resposta.json()
}

async function chamarConselho(id){
   const url = `https://api.adviceslip.com/advice/${id}`
   const resposta = await fetch(url)
   return await resposta.json()
}

async function conselhoAleatorio(){
   const conselho = await criarConselho()
   const umConselho = await chamarConselho(conselho.slip.id)
   const aparecerConselho = conselho.slip.advice
   const numeroDoConselho = conselho.slip.id
   document.getElementById('conselho').innerHTML = `"${aparecerConselho}"`
   document.getElementById('titulo').innerHTML = `advice #${numeroDoConselho}`
}
conselhoAleatorio()