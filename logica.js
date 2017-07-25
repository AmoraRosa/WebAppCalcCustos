var funcionarios = [];
var totalImpostos = 0;
var totalSalarios = 0;
var totalGeral = 0;

function Pessoa(nome, salario) {
    this.nome = nome;
    this.salario = Math.abs(salario);
	this.INSS = salario*0.1;
	this.segVida = salario*0.15;
	this.VR = salario*0.11;
	this.VT = salario*0.05;
	this.impostos = this.INSS + this.segVida + this.VR + this.VT;
	this.custTotal = this.salario + this.impostos;
}
function addfun(nome){
	var nome = new Pessoa(adicionarFun.elements["nome"].value, adicionarFun.elements["salario"].value);
	funcionarios.push(nome);
	totalImpostos += nome.impostos;
	totalSalarios += nome.salario;
	totalGeral += nome.custTotal;
	document.getElementById("adicionarFun").reset();
	console.log("Funcionário adicionado com êxito");
}
function gerarRelatorio() {
	console.table(funcionarios);
	console.log("Total Impostos : R$ "+totalImpostos.toFixed(2));
	console.log("Total Salários : R$ "+totalSalarios.toFixed(2));
	console.log("Total Geral : R$ "+totalGeral.toFixed(2));
}
