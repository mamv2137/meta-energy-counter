import {
  Box,
  Image,
  Text,
  Heading,
  Button,
  Stack,
  Divider,
} from "@chakra-ui/react";

import { useState } from "react";

import "./index.scss";

export const Plays = () => {
  const [win, setWin] = useState(0);
  const [less, setLess] = useState(0);
  const [draw, setDraw] = useState(0);

  const onClick = (action) => {
    switch (action) {
      case "winPlay":
        return setWin(win + 1);

      case "lessWin":
        return setWin(win > 0 ? win - 1 : 0);

      case "lessPlay":
        return setLess(less + 1);

      case "lessLess":
        return setLess(less > 0 ? less - 1 : 0);

      case "drawPlay":
        return setDraw(draw + 1);

      case "lessDraw":
        return setDraw(draw > 0 ? draw - 1 : 0);

      default:
        break;
    }
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
