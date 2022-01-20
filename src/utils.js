//consts to the conditionals
export const energyMaxInCounter = 10;
export const cardsToSumInNextRound = 3;
export const cardMaxInHand = 12;

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
