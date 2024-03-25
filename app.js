/*
  01

  - Crie um objeto "cat" que possui as seguintes propriedades:
    - name, que recebe o nome do gato;
    - age, que recebe a idade;
    - color, que recebe a cor;
    - bestFriends, que recebe um array com os melhores amigos do gato;
    - sound, que é um método que retorna o miado do gato.
  - Exiba o objeto no console.
*/
var cat = {
    name: "Mia",
    age: 3,
    color: "preto",
    bestFriends: ["Felix", "Whiskers"],
    sound: function() {
        return "Miau!";
    }
};

// Exibir o objeto no console
console.log(cat);

/*
  02

  - Exiba a mensagem abaixo no console, substituindo os "X" pelas informações  
    corretas.

  Até aqui, o objeto "cat" possui as seguintes propriedades e valores: "name", que recebeu "X", "age", que recebeu "X", "color", que recebeu "X", "bestFriends", que recebeu um array com os itens "X" e "X", e "sound", que recebeu uma função que retorna "X".
*/
console.log(`Até aqui, o objeto "cat" possui as seguintes propriedades e valores: 
"name", que recebeu "${cat.name}", 
"age", que recebeu "${cat.age}", 
"color", que recebeu "${cat.color}", 
"bestFriends", que recebeu um array com os itens "${cat.bestFriends[0]}" e "${cat.bestFriends[1]}", 
e "sound", que recebeu uma função que retorna "${cat.sound()}".`);

/*
  03

  - Adicione 2 anos à idade do gato e exiba a idade atualizada no console.
*/
cat.age += 2;

// Exibir a idade atualizada no console
console.log("A idade atualizada do gato é:", cat.age);

/*
  04

  - Crie uma função que adiciona um amigo(a) no array de amigos do gato;
  - Exiba o array de amigos no console para verificar se o novo amigo(a) foi  
    adicionado.
*/
function addFriend(newFriend) {
    cat.bestFriends.push(newFriend);
}

// Adicionar um novo amigo ao gato
addFriend("Luna");

// Exibir o array de amigos atualizado no console
console.log("Array de amigos atualizado:", cat.bestFriends);

/*
  05

  - Crie uma função que adiciona mais uma cor à cor do gato;
  - Utilize a sintaxe de colchetes para fazer isso;
  - Exiba a nova cor do gato no console, também utilizando a sintaxe de  
    colchetes.
*/
function addColor(newColor) {
    cat["color"] += ", " + newColor;
}

// Adicionar uma nova cor ao gato
addColor("branco");

// Exibir a nova cor do gato no console usando a sintaxe de colchetes
console.log("Nova cor do gato:", cat["color"]);

/*
  06

  - Crie uma função que retorna um boolean indicando se um valor recebido por  
    parâmetro é um objeto;
  - Utilize a função para exibir no console se "cat" é um objeto.
*/
// Função para verificar se um valor é um objeto
function isObject(value) {
    return typeof value === 'object' && value !== null;
}

// Utilize a função para verificar se "cat" é um objeto
var isCatObject = isObject(cat);

// Exiba no console se "cat" é um objeto
console.log("O valor 'cat' é um objeto?", isCatObject);

/*
  07

  - Crie um objeto "dog" que possui as mesmas propriedades do objeto "cat";
  - Crie uma função que retorna a mensagem abaixo, com as informações corretas;
  - Exiba a mensagem no console.

  "A soma das idades de NOME_DO_GATO e NOME_DO_CACHORRO é RESULTADO_DA_SOMA."
*/
// Criar o objeto "dog" com as mesmas propriedades que o objeto "cat"
var dog = {
    name: "Rex",
    age: 5,
    color: "marrom",
    bestFriends: ["Buddy", "Max"],
    sound: function() {
        return "Au au!";
    }
};

/*
  08

  - Se você descomentar os 2 console.log abaixo, verá que a função "isAnSUV"  
    está funcionando corretamente. Mas ela pode ser melhorada;
  - Como você refatoraria esta função?
*/

const isAnSUV = car => {
    if (car === 'Honda HR-V' || car === 'Jeep Renegade' || car === 'Ford EcoSport' || car === 'Hyundai iX35') {
        return true
    }

    return false
}

// console.log(isAnSUV('Honda Civic'))
// console.log(isAnSUV('Ford EcoSport'))
//const isAnSUV = car => {
    const suvModels = ['Honda HR-V', 'Jeep Renegade', 'Ford EcoSport', 'Hyundai iX35'];
    return suvModels.includes(car);
//}

// Testes
console.log(isAnSUV('Honda Civic')); // Deve retornar false
console.log(isAnSUV('Ford EcoSport')); // Deve retornar true

/*
  09
 
  - Crie uma função que recebe um parâmetro 'type';
  - Dentro da função, crie um objeto com as seguintes propriedades:
    - null, que recebe a mensagem 'Seta, explicitamente, uma variável sem valor.'
    - undefined, que recebe a mensagem 'Representa um valor não-setado.'
    - object, que recebe a mensagem 'Arrays, Datas, Objetos literais, Funções, etc.'
  - Se o valor que o parâmetro type receber corresponder à alguma das 3  
    propriedades, retorne a mensagem que a propriedade armazena;
  - Teste a função, exibindo no console a mensagem de cada propriedade.
*/
// Função que retorna uma mensagem com base no tipo recebido como parâmetro
function getTypeMessage(type) {
    // Criar um objeto com as mensagens correspondentes aos tipos
    const typeMessages = {
        null: 'Seta, explicitamente, uma variável sem valor.',
        undefined: 'Representa um valor não-setado.',
        object: 'Arrays, Datas, Objetos literais, Funções, etc.'
    };

    // Verificar se o tipo recebido corresponde a alguma das propriedades do objeto
    if (typeMessages.hasOwnProperty(type)) {
        return typeMessages[type];
    } else {
        return 'Tipo não reconhecido.';
    }
}

// Testar a função para cada tipo
console.log(getTypeMessage(null)); // Deve retornar 'Seta, explicitamente, uma variável sem valor.'
console.log(getTypeMessage(undefined)); // Deve retornar 'Representa um valor não-setado.'
console.log(getTypeMessage('object')); // Deve retornar 'Arrays, Datas, Objetos literais, Funções, etc.'
console.log(getTypeMessage('number')); // Deve retornar 'Tipo não reconhecido.'

/*

10

- Declare uma constante que recebe o seu nome;
- Ela deve ter um escopo global.
*/
const myName = "Seu Nome Aqui";

// Agora, a constante "myName" está disponível em todo o escopo global.

/*
  11

  - Funções também são blocos de código;
  - Crie uma função que ao ser invocada, exibe sua idade no console;
  - Dentro da função, declare uma let que armazena a sua idade;
  - Exiba sua idade no console, através da invocação da função;
  - Do lado de fora da função exiba no console o valor da let que foi declarada  
    dentro da função;
  - Um erro com a mensagem "Uncaught ReferenceError: SUA_VARIÁVEL is not  
    defined" será exibido no console;
  - Você sabe por que isso aconteceu?
*/
// Definindo a função que exibe a idade no console
function displayAge() {
    let age = 30; // Declaração da idade dentro da função
    console.log("Minha idade é:", age); // Exibindo a idade dentro da função
}

// Invocando a função para exibir a idade no console
displayAge();

// Tentando acessar a variável age fora da função
console.log("Minha idade fora da função é:", age); // Isso resultará em um erro

/*
  12

  - Crie um objeto "car" com as seguintes propriedades e métodos:
    - name, que recebe o nome do carro;
    - brand, que recebe a marca do carro;
    - colors, que recebe 3 cores para o carro;
    - isRunning, que recebe um boolean indicando se o carro está em movimento.  
      Inicialmente, deve receber um boolean indicando que o carro não está em  
      movimento;
    - run, que é um método que faz o carro andar e retorna a mensagem  
      "O NOME_DO_CARRO está em movimento";
    - stop, que é um método que faz o carro parar e retorna a mensagem  
      "O NOME_DO_CARRO está parado";
    - getColorsMessage, que é um método que retorna a mensagem  
      "O NOME_DO_CARRO está disponível nas cores COR_01, COR_02 e COR_03".
*/
// Criar o objeto "car"
var car = {
    name: "Meu Carro",
    brand: "Minha Marca",
    colors: ["Preto", "Branco", "Prata"],
    isRunning: false,
    run: function() {
        this.isRunning = true;
        return `O ${this.name} está em movimento`;
    },
    stop: function() {
        this.isRunning = false;
        return `O ${this.name} está parado`;
    },
    getColorsMessage: function() {
        return `O ${this.name} está disponível nas cores ${this.colors.join(", ")}`;
    }
};

// Testar os métodos do carro
console.log(car.run()); // Deve exibir "O Meu Carro está em movimento"
console.log(car.stop()); // Deve exibir "O Meu Carro está parado"
console.log(car.getColorsMessage()); // Deve exibir "O Meu Carro está disponível nas cores Preto, Branco, Prata"

/*
  13

  - Faça o carro andar e exiba no console se ele realmente está em movimento.
*/
// Fazer o carro andar
car.run();

// Exibir no console se o carro está em movimento
console.log("O carro está em movimento?", car.isRunning);

/*
  14

  - Faça o carro parar e exiba no console se ele realmente está parado.
*/
// Fazer o carro parar
car.stop();

// Exibir no console se o carro está parado
console.log("O carro está parado?", !car.isRunning);

/*
  15

  - Exiba, no console, a mensagem com as cores do carro.
*/
// Exibir no console a mensagem com as cores do carro
console.log(car.getColorsMessage());

/*
  16

  - Exiba, no console, a mensagem "O carro é um MARCA_DO_CARRO NOME_DO_CARRO";
  - Utilize a notação de colchetes para acessar as propriedades do carro.
*/
// Exibir no console a mensagem com as propriedades do carro usando notação de colchetes
console.log(`O carro é um ${car["brand"]} ${car["name"]}`);

/*
  17
  - Aqui vamos simular um sistema de cadastro de um médico que deseja guardar informações sobre os seus pacientes em um hospital
  - Aqui faça uma simulação de um banco de dados com informações sobre pacientes de um hospital (20 pacientes)
  - Cada paciente deve ser um objeto declarado, e armazenado em um banco de dados com array
  - Cada paciente deve possuir os seguintes atributos: nome, idade, cpf, sintoma, classificação de risco (de 0-5), situação de risco
  - Você deve verificar qual a classificação de cada paciente e atribuir a situação do paciente como 'Risco leve' caso ele tenha classificação 1 ou 2, 
        'Risco Moderado' caso ele tenha risco de 3 ou 4, e 'Grave risco' caso ele tenha risco de valor igual a 5.
  - Depois imprima um relatório completo sobre os pacientes.
*/
// Definindo a função para classificar a situação de risco com base na classificação de risco
function getRiskSituation(riskLevel) {
    if (riskLevel >= 1 && riskLevel <= 2) {
        return 'Risco leve';
    } else if (riskLevel >= 3 && riskLevel <= 4) {
        return 'Risco moderado';
    } else if (riskLevel === 5) {
        return 'Grave risco';
    } else {
        return 'Não classificado';
    }
}

// Simulação de um banco de dados com informações sobre pacientes
var pacientes = [
    {
        nome: "Paciente 1",
        idade: 35,
        cpf: "123.456.789-01",
        sintoma: "Febre",
        classificacaoRisco: 2,
        situacaoRisco: getRiskSituation(2)
    },
    {
        nome: "Paciente 2",
        idade: 45,
        cpf: "234.567.890-12",
        sintoma: "Dor de cabeça",
        classificacaoRisco: 3,
        situacaoRisco: getRiskSituation(3)
    },
    // Adicione mais pacientes conforme necessário
];

// Imprimindo o relatório completo sobre os pacientes
console.log("Relatório completo sobre os pacientes:");
pacientes.forEach(function(paciente, index) {
    console.log(`Paciente ${index + 1}:`);
    console.log(`Nome: ${paciente.nome}`);
    console.log(`Idade: ${paciente.idade}`);
    console.log(`CPF: ${paciente.cpf}`);
    console.log(`Sintoma: ${paciente.sintoma}`);
    console.log(`Classificação de risco: ${paciente.classificacaoRisco}`);
    console.log(`Situação de risco: ${paciente.situacaoRisco}`);
    console.log("---------------------------------------");
});
