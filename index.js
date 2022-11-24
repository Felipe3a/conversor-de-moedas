
const button = document.getElementById("Converter")
const select = document.getElementById("moeda-selecionada")


const bitcoin = 102.534 

convertValue = async () => {

  const inputReais = document.getElementById("valor-em-reais").value
  const valorEmReais = document.getElementById("valor")
  const resultado = document.getElementById("resultado")


  // Async Await
  const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(response => response.json())

  const dolar = data.USDBRL.high

  const euro = data.EURBRL.high

  const bitcoin = data.BTCBRL.high


  console.log(data)

  //valorEmReais.innerHTML = inputReais
  //resultado.innerHTML=  inputReais /dolar
  valorEmReais.innerHTML = new Intl.NumberFormat('pt-BR',
    { style: 'currency', currency: 'BRL' }
  ).format(inputReais)



  if (select.value === "US$ Dólar Americano") {
    resultado.innerHTML = new Intl.NumberFormat('en-US',
      { style: 'currency', currency: 'USD' }
    ).format(inputReais / dolar)
  }



  if (select.value === "€ Euro") {
    resultado.innerHTML = new Intl.NumberFormat('de-De',
      { style: 'currency', currency: 'EUR' }
    ).format(inputReais / euro)
  }


  if (select.value === "Ƀ bitcoin") {
    resultado.innerHTML = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'BTC' }).
      format(inputReais / bitcoin)
  }
}


trocaDeMoeda = () => {

  const nomeDaMoeda = document.getElementById("nome-da-moeda")

  const trocaDeBandeira = document.getElementById("bandeira")



  if (select.value === "€ Euro") {

    nomeDaMoeda.innerHTML = "Euro"

    trocaDeBandeira.src = "icone-euro.png"


  }

  if (select.value === "US$ Dólar Americano") {

    nomeDaMoeda.innerHTML = "Dólar americano"

    trocaDeBandeira.src = "estados-unidos.png"





  }


  if (select.value === "Ƀ bitcoin") {

    nomeDaMoeda.innerHTML = "bitcoin"

    trocaDeBandeira.src = "icone-bitcoin.png"


  }

  console.log("fui trocado")



  convertValue()


}
button.addEventListener('click', convertValue)
select.addEventListener('change', trocaDeMoeda)



