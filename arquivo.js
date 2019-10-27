window.onload = function(){ // função que é chamada ao carregar a página
	document.getElementById("divNumeros").style.display = "block"; // mostra o elemento na página
	document.getElementById("divMedidas").style.display = "none"; // não mostra o elemento na página
}

novoArray = []
media;
variancia;
desvio;

function inserir(){
	if(document.getElementById("numero").value !== ''){
		var numeros = Number(document.getElementById("numero").value)
		novoArray.push(numeros)
		document.getElementById("form1").reset();
		document.getElementById("numero").focus()

		var mostrar = document.getElementById('mostrar');
		mostrar.innerHTML = novoArray
	} else {
		alert('Insira um valor!')
	}
}

function entrar(){
	// novoArray = [108,136,140,152,166,180,198,200]

	if(novoArray.length !== 0){
		document.getElementById("divNumeros").style.display = "none"; // mostra o elemento na página
		document.getElementById("divMedidas").style.display = "block"; // não mostra o elemento na página

		novoArray.sort(function(a, b) {
			return a - b;
		});
		console.log(novoArray)

		this.mediana()
		this.media()
		this.variancia()
		this.desvio()
		this.coeficiente()
	} else {
		alert('Insira o conjunto de dados!')
	}
}

function media (){
	let aux = 0;
	for(var i = 0; i < novoArray.length; i++){
		aux = aux + novoArray[i]
	}
	this.media = aux / novoArray.length
	document.getElementById("showMedia").textContent = "M "+ this.media	 
}

function mediana(){
	if(novoArray.length % 2 == 0){
		let aux = novoArray.length / 2
		let mediana = (novoArray[aux-1] + novoArray[aux]) / 2
		document.getElementById("showMedianas").textContent = "Md "+ mediana
	} else {
		let aux = (novoArray.length + 1) / 2
		let mediana = novoArray[aux -1]
		document.getElementById("showMedianas").textContent = "Md" + mediana		
	}
}

function variancia(){
	let soma = 0;
	for(var i = 0; i < novoArray.length; i++){
		var aux = novoArray[i] - this.media
		console.log(aux)
		var aux1 = Math.pow(aux,2)
		console.log(aux1)
		soma = soma + aux1
	}	
	console.log(soma)
	this.variancia = soma / (novoArray.length - 1)
	document.getElementById("showVariancia").textContent = "S² "+ this.variancia.toFixed(3)	
}

function desvio(){
	this.desvio = Math.sqrt(this.variancia)
	document.getElementById("showDesvio").textContent = "S "+ this.desvio	
}

function coeficiente(){
	let coeficiente = (this.desvio / this.media) * 100
	document.getElementById("showCoeficiente").textContent = "CV "+ coeficiente.toFixed(3) + "%"	

	if(coeficiente > 30){
		document.getElementById("showConjunto").textContent = "Heterogêneo"
	} else{
		document.getElementById("showConjunto").textContent = "Homogêneo"
	}
}
function limpar(){
	novoArray= []
	mostrar.innerHTML = novoArray
}

function voltar(){
	novoArray= []
	mostrar.innerHTML = novoArray
	document.getElementById("divNumeros").style.display = "block"; // mostra o elemento na página
	document.getElementById("divMedidas").style.display = "none"; // não mostra o elemento na página
}