class Cliente {

  constructor(nome, email) {
    this.nome = nome;
    this.email = email;
  }

  hello() {
    return `Olá ${this.nome} tudo bem?`
  }

  send() {
    return `Enviando email para ${this.email}...`
  }

}


let pessoa = new Cliente('Yan', 'email');
console.log(pessoa.hello());
