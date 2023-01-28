function Pessoa(nome, idade, cidade, redesSociais) {
  this.nome = nome;
  this.idade = idade;
  this.cidade = cidade;
  this.redesSociais = redesSociais;

  this.dizOi = function () {
    console.log(this.nome + " diz olá");
  };
  this.dizCargo = function () {
    console.log(this.cargo);
  };
}

function Programador(
  nome,
  idade,
  cidade,
  redesSociais,
  cargo,
  salario,
  linguagemProgramacao
) {
  this.cargo = cargo;
  this.linguagemProgramacao = linguagemProgramacao;
  let _salario = salario;

  this.getSalario = function () {
    return _salario;
  };

  this.setSalario = function (valor) {
    if (typeof valor === "number") {
      _salario = valor;
    }
  };

  this.aumento = function () {
    const novoSalario = _salario * 1.1;
    _salario = novoSalario;
  };

  Pessoa.call(this, nome, idade, cidade, redesSociais);
}

function ProgramadorJunior(nome, idade, cidade, redesSociais) {
  Programador.call(
    this,
    nome,
    idade,
    cidade,
    redesSociais,
    "Programador Junior",
    0,
    "PHP"
  );
  this.aumento = function () {
    const novoSalario = this.getSalario() * 1.07;
    this.setSalario(novoSalario);
  };
}

function ProgramadorSenior(nome, idade, cidade, redesSociais) {
  Programador.call(
    this,
    nome,
    idade,
    cidade,
    redesSociais,
    "Programador Senior",
    0,
    "Python"
  );
  this.aumento = function () {
    const novoSalario = this.getSalario() * 1.15;
    this.setSalario(novoSalario);
  };
}

function ProgramadorMaster(nome, idade, cidade, redesSociais) {
  Programador.call(
    this,
    nome,
    idade,
    cidade,
    redesSociais,
    "Programador Master",
    0,
    "Javacript"
  );
  this.aumento = function () {
    const novoSalario = this.getSalario() * 1.15;
    this.setSalario(novoSalario);
  };
}

const funcionario1 = new ProgramadorJunior("Maria", 33, "São Paulo", [
  "likedin",
  "github",
  "facebook",
]);
const funcionario2 = new ProgramadorSenior("Pedro", 28, "Rio de Janeiro", [
  "likedin",
  "github",
  "facebook",
]);
const funcionario3 = new ProgramadorMaster("Paula", 24, "Curitiba", [
  "likedin",
  "github",
  "facebook",
]);

funcionario1.dizOi();
funcionario2.dizOi();
funcionario3.dizOi();

console.log(funcionario1);
console.log(funcionario2);
console.log(funcionario3);

funcionario1.setSalario(4000);
funcionario2.setSalario(8000);
funcionario3.setSalario(16000);

console.log(funcionario1.getSalario());
console.log(funcionario2.getSalario());
console.log(funcionario3.getSalario());

funcionario1.aumento();
funcionario2.aumento();
funcionario3.aumento();

console.log(funcionario1.getSalario());
console.log(funcionario2.getSalario());
console.log(funcionario3.getSalario());

funcionario1.dizCargo();
funcionario2.dizCargo();
funcionario3.dizCargo();
