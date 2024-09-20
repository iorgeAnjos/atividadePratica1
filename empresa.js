// Classe Funcionario
class Funcionario {
  constructor(nome, idade, cargo) {
    this.nome = nome;
    this.idade = idade;
    this.cargo = cargo;
  }

  seApresentar() {
    return `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e sou ${this.cargo}.`;
  }

  trabalhar() {
    return `${this.nome} está trabalhando.`;
  }
}

// Classe Gerente que herda de Funcionario
class Gerente extends Funcionario {
  constructor(nome, idade, cargo, departamento) {
    super(nome, idade, cargo);
    this.departamento = departamento;
  }

  gerenciar() {
    return `${this.nome} está gerenciando o departamento de ${this.departamento}.`;
  }
}

// Classe Desenvolvedor que herda de Funcionario
class Desenvolvedor extends Funcionario {
  constructor(nome, idade, cargo, linguagem) {
    super(nome, idade, cargo);
    this.linguagem = linguagem;
  }

  programar() {
    return `${this.nome} está programando em ${this.linguagem}.`;
  }
}

// Função para exibir erro
function exibirErro(mensagem) {
  const erroDiv = document.getElementById("erro");
  erroDiv.innerHTML = `<p style="color: red;">${mensagem}</p>`;
}

// Função para criar funcionário
function criarFuncionario() {
  try {
    const nome = document.getElementById("nome").value;
    const idade = document.getElementById("idade").value;
    const cargo = document.getElementById("cargo").value;
    const departamento = document.getElementById("departamento").value;
    const linguagem = document.getElementById("linguagem").value;

    if (
      !nome ||
      !idade ||
      !cargo ||
      (cargo === "Gerente" && !departamento) ||
      (cargo === "Desenvolvedor" && !linguagem)
    ) {
      throw new Error("Todos os campos devem ser preenchidos corretamente.");
    }

    let funcionario;
    if (cargo === "Gerente") {
      funcionario = new Gerente(nome, idade, cargo, departamento);
    } else if (cargo === "Desenvolvedor") {
      funcionario = new Desenvolvedor(nome, idade, cargo, linguagem);
    }

    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = `
          <p>${funcionario.seApresentar()}</p>
          <p>${funcionario.trabalhar()}</p>
          <p>${
            cargo === "Gerente"
              ? funcionario.gerenciar()
              : funcionario.programar()
          }</p>
      `;

    // Limpar mensagens de erro
    exibirErro("");
  } catch (error) {
    exibirErro(error.message);
  }
}
