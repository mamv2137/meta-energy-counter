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
} from "./utils";

import "./App.scss";
import { Cards } from "./components/card";
import { Energy } from "./components/energy";
import { Plays } from "./components/wld";

function App() {
  //states of energy
  const [energy, setEnergy] = useState(energyInitial);
  const [round, setRound] = useState(roundInitial);

  //**states cards
  const [card, setCard] = useState(cardsInitial);

  //state less card
  const [cardUse, setCardUse] = useState(cardsUsedInitial);

  //state win card
  const [winCard, setWinCard] = useState(cardsWonInitial);

  //consts to the conditionals
  const sumOneCardUsed = cardUse + 1;
  const subtractionOneCard = cardUse - 1;

  const subtractionOneCardWon = winCard - 1;
  const sumOneCardWon = winCard + 1;

  const subtractionOneEnergy = energy - 1;
  const sumOneEnergy = energy + 1;

  const subtractionCurrentCardAndCardUse = card - cardUse;
  const sumCardsToNextRound = cardsToSumInNextRound + winCard;

  const sumTotalCardsInNextRound =
    subtractionCurrentCardAndCardUse + sumCardsToNextRound;

  const isCardUseHigherToZero = cardUse > 0;
  const isCardWonHigherToZero = winCard > 0;
  const isEnergyCurrentHigherToZero = energy > 1;
  const isEnergyCurrentMinorToMaxEnergy = energy < energyMaxInCounter;

  const isCurrentCardLessUsedMinorToOne = subtractionCurrentCardAndCardUse < 1;
  const isSumTotalCardsMinorToCardMaxInHand =
    sumTotalCardsInNextRound < cardMaxInHand;

  //conditionals
  const cardsUsesConditional = isCardUseHigherToZero ? subtractionOneCard : 0;

  const cardsWinsConditional = isCardWonHigherToZero
    ? subtractionOneCardWon
    : 0;

  const energiesLessConditional = isEnergyCurrentHigherToZero
    ? subtractionOneEnergy
    : 0;

  const energiesSumConditional = isEnergyCurrentMinorToMaxEnergy
    ? sumOneEnergy
    : energyMaxInCounter;

  // const firstCaseNextRoundConditional = isCurrentCardLessUsedMinorToOne
  //   ? sumCardsToNextRound
  //   : isSumTotalCardsMinorToCardMaxInHand;

  const nextRoundConditional = isCurrentCardLessUsedMinorToOne
    ? sumCardsToNextRound
    : isSumTotalCardsMinorToCardMaxInHand
    ? sumTotalCardsInNextRound
    : cardMaxInHand;

  //object conditionals
  const conditionals = {
    drawCard: sumOneCardUsed,
    lessCard: cardsUsesConditional,
    winCard: sumOneCardWon,
    lessWinCard: cardsWinsConditional,
    lessEnergy: energiesLessConditional,
    moreEnergy: energiesSumConditional,
    updateCards: nextRoundConditional,
  };

  //function to card and energy
  const onClick = (action) => {
    switch (action) {
      case "drawCard":
        return setCardUse(conditionals.drawCard);

      case "lessCard":
        return setCardUse(conditionals.lessCard);

      case "win":
        return setWinCard(conditionals.winCard);

      case "lessWinCard":
        return setWinCard(conditionals.lessWinCard);

      case "less":
        return setEnergy(conditionals.lessEnergy);

      case "more":
        return setEnergy(conditionals.moreEnergy);

      case "next":
        setCard(conditionals.updateCards);

        setCardUse(cardsUsedInitial);
        setWinCard(cardsWonInitial);
        if (energy === 9) {
          setEnergy(energy + 1);
          setRound(round + 1);
          return;
        } else if (energy === 10) {
          setEnergy(10);
          setRound(round + 1);
          return;
        } else {
          setEnergy(energy + 2);
          setRound(round + 1);
          return;
        }

      case "new":
        setEnergy(energyInitial);
        setRound(roundInitial);
        setCard(cardsInitial);
        setCardUse(cardsUsedInitial);
        setWinCard(cardsWonInitial);
        return;

      default:
        break;
    }
  };

  return (
    <ChakraProvider>
      <Box className="container_main" backgroundColor="#0D151E">
        <Energy
          energy={energy}
          setEnergy={setEnergy}
          round={round}
          setRound={setRound}
          onClick={onClick}
        />
        <Box className="container_sideleft">
          <Cards
            card={card}
            setCard={setCard}
            cardUse={cardUse}
            setCardUse={setCardUse}
            winCard={winCard}
            setWinCard={setWinCard}
            onClick={onClick}
          />

          <Plays />
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default App;
