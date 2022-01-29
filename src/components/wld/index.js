import { Box, Heading, Button, Stack, Divider } from "@chakra-ui/react";

import { useState } from "react";

import { getAction, addOneToState, subtractionCurrentState } from "../../utils";
import "./index.scss";

export const Plays = ({ conditionalColor }) => {
  const [win, setWin] = useState(0);
  const [less, setLess] = useState(0);
  const [draw, setDraw] = useState(0);

  //object d
  const dictionaryVictories = {
    winPlay: () => addOneToState(setWin, win),
    lessWin: () => subtractionCurrentState(setWin, win),
    lessPlay: () => addOneToState(setLess, less),
    lessLess: () => subtractionCurrentState(setLess, less),
    drawPlay: () => addOneToState(setDraw, draw),
    lessDraw: () => subtractionCurrentState(setDraw, draw),
  };

  const onClick = (action) => {
    const actionToRun = getAction(action, dictionaryVictories);
    if (!!actionToRun) actionToRun();
  };

  return (
    <Box className="containerCountPlay">
      <Heading size="md" color={() => conditionalColor("white", "black")}>
        CONTADOR DE PARTIDAS
      </Heading>

      <Stack
        marginBottom={3}
        marginTop={2}
        direction="row"
        spacing={4}
        align="center"
      >
        <Button
          onClick={() => onClick("winPlay")}
          w="7.5rem"
          border="2px"
          borderColor={() => conditionalColor("white", "black")}
          color="white"
          colorScheme={conditionalColor("transparent", "blackAlpha")}
        >
          GANADAS
        </Button>
        <Button
          onClick={() => onClick("lessWin")}
          w="7.5rem"
          border="2px"
          borderColor={() => conditionalColor("white", "black")}
          color="white"
          colorScheme={conditionalColor("transparent", "blackAlpha")}
        >
          {win}
        </Button>
      </Stack>

      <Stack
        marginBottom={3}
        marginTop={2}
        direction="row"
        spacing={4}
        align="center"
      >
        <Button
          onClick={() => onClick("lessPlay")}
          w="7.5rem"
          border="2px"
          borderColor={() => conditionalColor("white", "black")}
          color="white"
          colorScheme={conditionalColor("transparent", "blackAlpha")}
        >
          PERDIDAS
        </Button>
        <Button
          onClick={() => onClick("lessLess")}
          w="7.5rem"
          border="2px"
          borderColor={() => conditionalColor("white", "black")}
          color="white"
          colorScheme={conditionalColor("transparent", "blackAlpha")}
        >
          {less}
        </Button>
      </Stack>

      <Stack
        marginBottom={5}
        marginTop={2}
        direction="row"
        spacing={4}
        align="center"
      >
        <Button
          onClick={() => onClick("drawPlay")}
          w="7.5rem"
          border="2px"
          borderColor={() => conditionalColor("white", "black")}
          color="white"
          colorScheme={conditionalColor("transparent", "blackAlpha")}
        >
          EMPATADAS
        </Button>
        <Button
          onClick={() => onClick("lessDraw")}
          w="7.5rem"
          border="2px"
          borderColor={() => conditionalColor("white", "black")}
          color="white"
          colorScheme={conditionalColor("transparent", "blackAlpha")}
        >
          {draw}
        </Button>
      </Stack>
      <Divider />
    </Box>
  );
};
