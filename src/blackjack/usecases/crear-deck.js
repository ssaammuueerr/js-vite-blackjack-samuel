import _ from "underscore";

/**
 * Esta funcion crea un nuevo deck
 * @param {Array<String>} tiposDeCarta    Ejem: ["C", "D", "H", "S"]
 * @param {Array<String>} tiposEspeciales Ejem: ["A", "J", "Q", "K"]
 * @returns {Array<String>} retorna un nuevo deck de cartas
 */

export const crearDeck = (tiposDeCarta, tiposEspeciales) => {
  if (!tiposDeCarta || tiposDeCarta === 0)
    throw new Error("tipos de cartas es obligatorio como un arreglo de string");

  if (!tiposEspeciales || tiposEspeciales === 0)
    throw new Error(
      "tiposEspeciales de cartas es obligatorio como un arreglo de string"
    );

  let deck = [];
  for (let i = 2; i <= 10; i++) {
    for (let tipo of tiposDeCarta) {
      deck.push(i + tipo);
    }
  }

  for (let tipo of tiposDeCarta) {
    for (let esp of tiposEspeciales) {
      deck.push(esp + tipo);
    }
  }
  // console.log( deck );
  deck = _.shuffle(deck);
  // console.log(deck);
  return deck;
};

// export default crearDeck;
