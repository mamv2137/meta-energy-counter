import { Box, Heading, Button, Stack, Divider } from "@chakra-ui/react";

import { useState } from "react";

import { getAction, addOneToState, subtractionCurrentState } from "../../utils";
import "./index.scss";

export const Plays = () => {
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
      <Heading size="md" color="white">
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
          borderColor="white"
          color="white"
          colorScheme="black"
        >
          GANADAS
        </Button>
        <Button
          onClick={() => onClick("lessWin")}
          w="7.5rem"
          border="2px"
          color="white"
          colorScheme="black"
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
          borderColor="white"
          color="white"
          colorScheme="black"
        >
          PERDIDAS
        </Button>
        <Button
          onClick={() => onClick("lessLess")}
          w="7.5rem"
          border="2px"
          color="white"
          colorScheme="black"
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
          borderColor="white"
          color="white"
          colorScheme="black"
        >
          EMPATADAS
        </Button>
        <Button
          onClick={() => onClick("lessDraw")}
          w="7.5rem"
          border="2px"
          color="white"
          colorScheme="black"
        >
          {draw}
        </Button>
      </Stack>
      <Divider backgroundColor="white" />
    </Box>
  );
};
