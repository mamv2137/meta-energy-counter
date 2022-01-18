//consts to the conditionals
export const energyMaxInCounter = 10;
export const cardsToSumInNextRound = 3;
export const cardMaxInHand = 12;

//const numbers
export const one = 1;
export const two = 2;
export const tree = 3;
export const four = 4;
export const five = 5;
export const six = 6;
export const seven = 7;
export const eigth = 8;
export const nine = 9;
export const ten = 10;

//consts initials valors to counter
export const energyInitial = 3;
export const roundInitial = 1;
export const cardsInitial = 6;
export const cardsUsedInitial = 0;
export const cardsWonInitial = 0;

//metods to actions
export const getAction = (action, objectDictionary) =>
  objectDictionary[action] || null;

//metods to setter states
export const addOneToState = (setter, state) => setter(state + 1);
export const subtractionCurrentState = (setter, state) =>
  setter(state > 0 ? state - 1 : 0);
