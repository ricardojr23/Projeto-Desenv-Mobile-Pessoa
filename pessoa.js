"use strict";

class Pessoa {
  constructor(cpf, nome, idade) {
    this.setCpf(cpf);
    this.setNome(nome);
    this.setIdade(idade);
  }

  getCpf() {
    return this.cpf;
  }

  getNome() {
    return this.nome;
  }

  getIdade() {
    return this.idade;
  }

  setCpf(cpf) {
    if (!Pessoa.validarCpf(cpf)) throw new Error("Cpf Inválido: " + cpf);
    this.cpf = cpf;
  }

  setNome(nome) {
    if (!Pessoa.validarNome(nome)) throw new Error("Nome Inválido: " + nome);
    this.nome = nome;
  }

  setIdade(idade) {
    if (!Pessoa.validarIdade(idade)) throw new Error("Idade Inválida: " + idade);
    this.idade = idade;
  }

  static validarNome(nome) {
    if (typeof nome !== "string") return false;
    if (nome == null || nome == "" || nome == undefined) return false;
    return true;
  }

  static validarIdade(idade) {
    if (idade == null || idade == "" || idade == undefined) return false;
    if (idade < 0) return false;
    return true;
  }

  static validarCpf(cpf) {
    if (typeof cpf !== "string") return false;
    if (cpf == null || cpf == "" || cpf == undefined) return false;
    return true;
  }
}



try {
  
  let obj1 = new Pessoa("111-111-111-11","Ricardo Junior",25);
  alert("Instanciou o objeto Pessoa:" + JSON.stringify(obj1));
  alert("Nome da Pessoa:" + obj1.nome);
  alert("CPF: " + obj1.cpf);
  alert("Idade " + obj1.idade);
  console.log(obj1)
  
  
  
  
} catch (e) {
  alert("Tipo de e:" + typeof e); 
  alert("Tipo de e:" + e.constructor.name); 
  alert("Deu erro na instanciação de Pessoa:" + e + " " + e.stack);
}
