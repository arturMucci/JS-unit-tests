const productDetails = require('../src/productDetails');
/*
  A função productDetails recebe duas strings que representam nomes de produtos, e retorna um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara')

  // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  Escreva pelo menos cinco testes para essa função para garantir que a implementação de productDetails está correta.

*/
// {}.toString.call(obj).split(' ')[1].slice(0, -1).toLowerCase()
const testaObjetosNoArray = (obj) => {
  // eslint-disable-next-line sonarjs/no-one-iteration-loop
  let teste = [];
  for (let index = 0; index < obj.length; index += 1) {
    teste[index] = {}.toString.call(obj[index]).split(' ')[1].slice(0, -1).toLowerCase();
    if (teste[index] !== 'object') {
      return false
    }
  }
  return true;
};

const testaObjeto = productDetails('oi', 'ola');
const checked = () => testaObjeto[0].name !== testaObjeto[1].name && testaObjeto[0].details.productId !== testaObjeto[1].details.productId;

const array = [];

const checkEnd = () => {
  for (let index = 0; index < testaObjeto.length; index += 1) {
    const stringEnds = testaObjeto[index].details.productId;
    array.push(stringEnds.endsWith('123'));
    if (array[index] === false) {
      return false;
    }
  }
  return true;
}

// Referências:
// http://devblog.drall.com.br/como-definir-o-tipo-de-uma-variavel-em-javascript

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    // fail('Teste vazio!');
    // ESCREVA SEUS TESTES ABAIXO:
    
    // Teste se productDetails é uma função.
    expect(typeof productDetails).toMatch('function');
    
    // Teste se o retorno da função é um array.
    expect(Array.isArray(productDetails())).toBe(true);

    // Teste se o array retornado pela função contém dois itens dentro.
    expect(productDetails().length).toBe(2);
    
    // Teste se os dois itens dentro do array retornado pela função são objetos.
    expect(testaObjetosNoArray(productDetails('oi', 'ola'))).toBe(true);
    
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    expect(checked()).toBe(true);

    // Teste se os dois productIds terminam com 123.
    expect(checkEnd()).toBe(true);
  });
});
