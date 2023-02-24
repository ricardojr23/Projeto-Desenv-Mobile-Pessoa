"use strict";

class Pessoa {

  constructor(cpf,nome,idade) {
    
    this.setNome(cpf);
    this.setNome(nome);
    this.setNome(idade);
  }
  
  
  getCpf() {
    return this.cpf;
  }
  
  getNome() {
    return this.nome;   
  }
  
  getIdade(){
    return this.idade
  }
   
  
  setCpf(cpf) {
    if(!Teste.validarCpf(cpf))
      throw new Error("Cpf Inválido: " + cpf);
    this.cpf = cpf;
  }
  
  setNome(nome) {
    if(!Teste.validarNome(nome))
      throw new Error("Nome Inválido: " + nome);
    this.nome = nome;
  }
  
  setIdade(idade) {
    if(!Teste.validarIdade(idade))
      throw new Error("Idade Inválida: " + idade);
    this.idade = idade;
  }
  
  


  
  static validarNome(nome) {
    if(typeof(nome) !== 'string')
      return false;
    if(nome == null || nome == "" || nome == undefined)
      return false;
    if (nome.length > 40) 
      return false;
    // Abaixo temos a indicação de uma expressão regular que é denotada
    // por /...../
    const padraoNome = /[A-Z][a-z] */;
    if (!padraoNome.test(nome)) 
      return false;
    return true;
  }
  
  
  
  static validarIdade(idade) {
    if(typeof(nome) !== 'var')
      return false;
    if(idade == null || idade == "" || idade == undefined)
      return false;
    if (idade < 0) 
      return false;
    return true;
  }
  
  static validarCpf(cpf) {
    if(typeof(cpf) !== 'string')
      return false;
    if(cpf == null || cpf == "" || cpf == undefined)
      return false;
    if (cpf < 0) 
      return false;
    return true;
  }
  
  
  
}

// Missão do operador new: criar um novo objeto
// ações: (1) Aloca memória para o novo objeto na HEAP
//        (2) Solicita que o novo objeto execute o seu método construtor
try {
  let obj1 = new Teste("João");
  // JSON significa JavaScript Object Notation. É uma representação
  // na forma de String de um objeto Javascript.
  // O formato JSON basicamente tem as seguintes regras:
  // 1. Um objeto começa com { e fecha }
  // 2. Para cada atributo, temos a notação "atributo" : "valor",
  // 3. Se o valor for número, booleano, null, undefined ou objeto 
  //    não precisa de aspas
  // 4. Para representar arrays, usamos [ e ]
  //
  // Existe a classe JSON e essa possui o método estático stringify
  alert("Instanciou o objeto Teste:" + JSON.stringify(obj1));
  // Observe que posso fazer a alteração do atributo sem usar o método setNome, pois o atributo
  // é público
  obj1.nome = "";
  alert("Nome do Teste:" + obj1.nome);
  let obj2 = obj1;
  obj2.setNome("Maria");
  // Observe que obj1 e obj2 estão referenciando o mesmo objeto
  console.log(obj1);
  // Vai disparar a exceção
  obj2.setNome(123);
}
catch(e) {
  alert("Tipo de e:" + typeof(e));  // Informa object
  alert("Tipo de e:" + e.constructor.name);  // Informa Error
  alert("Deu erro na instanciação de Teste:" + e + " " + e.stack);  
}
