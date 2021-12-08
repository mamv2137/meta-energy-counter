import { Box, ChakraProvider } from "@chakra-ui/react";
import { useState } from "react";

import "./App.scss";
import { Cards } from "./components/card";
import { Energy } from "./components/energy";
import { Plays } from "./components/wld";

function App() {
  //states of energy
  const [energy, setEnergy] = useState(3);
  const [round, setRound] = useState(1);

  //**states cards
  const [card, setCard] = useState(6);

  //state less card
  const [cardUse, setCardUse] = useState(0);

  //state win card
  const [winCard, setWinCard] = useState(0);

  //function to card and energy
  const onClick = (action) => {
    switch (action) {
      case "drawCard":
        return setCardUse(cardUse + 1);

      case "lessCard":
        return setCardUse(cardUse > 0 ? cardUse - 1 : 0);

      case "win":
        return setWinCard(winCard + 1);

      case "lessWinCard":
        return setWinCard(winCard > 0 ? winCard - 1 : 0);

      case "less":
        return setEnergy(energy > 1 ? energy - 1 : 0);

      case "more":
        return setEnergy(energy < 10 ? energy + 1 : 10);

      case "next":
        setCard(
          card - cardUse < 1
            ? 3 + winCard
            : card - cardUse + winCard + 3 < 12
            ? card - cardUse + winCard + 3
            : 12
        );

        setCardUse(0);
        setWinCard(0);
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
        setEnergy(3);
        setRound(1);
        setCard(6);
        setCardUse(0);
        setWinCard(0);
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
