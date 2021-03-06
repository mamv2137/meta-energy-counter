import { Box, ChakraProvider } from "@chakra-ui/react";
import { useState } from "react";

import {
  energyMaxInCounter,
  cardsToSumInNextRound,
  cardMaxInHand,
  energyInitial,
  roundInitial,
  cardsInitial,
  cardsUsedInitial,
  cardsWonInitial,
  getAction,
} from "./utils";

import "./App.scss";
import { Cards } from "./components/card";
import { Energy } from "./components/energy";
import { Plays } from "./components/wld";
import { SlpCounter } from "./components/slp";
import { Networks } from "./components/networks";
import { SwitchTheme } from "./components/switchTheme";

import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      100: "#f7fafc",
      // ...
      900: "#1a202c",
    },
  },
});

function App() {
  //change theme dark to white to dark
  const [toggleTheme, setToggleTheme] = useState(true);

  //states of energy
  const [energy, setEnergy] = useState(energyInitial);
  const [round, setRound] = useState(roundInitial);

  //conditional to change color words
  const conditionalColor = (colorDark, colorWhite) => {
    return toggleTheme ? colorDark : colorWhite;
  };

  //**states cards
  const [card, setCard] = useState(cardsInitial);

  //state less card
  const [cardUse, setCardUse] = useState(cardsUsedInitial);

  //state win card
  const [winCard, setWinCard] = useState(cardsWonInitial);

  //consts to the conditionals
  const addOneCardUsed = () => setCardUse(cardUse + 1);
  const subtractionOneCard = () => setCardUse(cardUse - 1);

  const subtractionOneCardWon = () => setWinCard(winCard - 1);
  const addOneCardWon = () => setWinCard(winCard + 1);

  const subtractionOneEnergy = () => setEnergy(energy - 1);
  const sumOneEnergy = () => setEnergy(energy + 1);

  const subtractionCurrentCardAndCardUse = card - cardUse;
  const sumCardsToNextRound = cardsToSumInNextRound + winCard;

  const sumTotalCardsInNextRound =
    subtractionCurrentCardAndCardUse + sumCardsToNextRound;

  const isCardUseHigherToZero = cardUse > 0;
  const isCardWonHigherToZero = winCard > 0;
  const isEnergyCurrentHigherToZero = energy > 0;
  const isEnergyCurrentMinorToMaxEnergy = energy < energyMaxInCounter;

  const isCurrentCardLessUsedMinorToOne = subtractionCurrentCardAndCardUse < 1;
  const isSumTotalCardsMinorToCardMaxInHand =
    sumTotalCardsInNextRound < cardMaxInHand;

  //conditionals
  const cardsUsesConditional = isCardUseHigherToZero ? subtractionOneCard : 0;

  const cardsWinsConditional = isCardWonHigherToZero
    ? subtractionOneCardWon
    : false;

  const energiesLessConditional = isEnergyCurrentHigherToZero
    ? subtractionOneEnergy
    : false;

  const energiesSumConditional = isEnergyCurrentMinorToMaxEnergy
    ? sumOneEnergy
    : false;

  // const firstCaseNextRoundConditional = isCurrentCardLessUsedMinorToOne
  //   ? sumCardsToNextRound
  //   : isSumTotalCardsMinorToCardMaxInHand;

  const getValuesToNextRound = () =>
    isCurrentCardLessUsedMinorToOne
      ? sumCardsToNextRound
      : isSumTotalCardsMinorToCardMaxInHand
      ? sumTotalCardsInNextRound
      : cardMaxInHand;

  const resetValues = () => {
    setEnergy(energyInitial);
    setRound(roundInitial);
    setCard(cardsInitial);
    setCardUse(cardsUsedInitial);
    setWinCard(cardsWonInitial);
  };

  const setNextValues = () => {
    const nextValues = getValuesToNextRound();
    setCard(nextValues);
    setCardUse(cardsUsedInitial);
    setWinCard(cardsWonInitial);

    const energies = {
      9: () => {
        setEnergy(energy + 1);
        setRound(round + 1);
      },
      10: () => {
        setEnergy(10);
        setRound(round + 1);
      },
      default: () => {
        setEnergy(energy + 2);
        setRound(round + 1);
      },
    };

    const runEnergyAction = energies[energy] || energies.default;

    runEnergyAction();
  };

  //object conditionals
  const objectDictionary = {
    drawCard: addOneCardUsed,
    lessCard: cardsUsesConditional,
    winCard: addOneCardWon,
    lessWinCard: cardsWinsConditional,
    lessEnergy: energiesLessConditional,
    moreEnergy: energiesSumConditional,
    updateCards: setNextValues,
    new: resetValues,
  };

  const onClick = (action) => {
    const actionToRun = getAction(action, objectDictionary);
    if (!!actionToRun) actionToRun();
  };
  return (
    <ChakraProvider theme={theme}>
      <Box className={toggleTheme ? "container_main" : "container_main_white"}>
        <SwitchTheme
          toggleTheme={toggleTheme}
          setToggleTheme={setToggleTheme}
        />
        <Energy
          conditionalColor={conditionalColor}
          energy={energy}
          round={round}
          onClick={onClick}
        />
        <Box className="container_sideleft">
          <Networks toggleTheme={toggleTheme} />
          <Cards
            conditionalColor={conditionalColor}
            card={card}
            cardUse={cardUse}
            winCard={winCard}
            onClick={onClick}
          />

          <Plays conditionalColor={conditionalColor} />
          <SlpCounter conditionalColor={conditionalColor} />
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default App;
