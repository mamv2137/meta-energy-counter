import { useState } from "react";

import { Box, Image, Text, Heading, Button, Stack } from "@chakra-ui/react";

import "./index.scss";

import LogoEnergy from "./energy.svg";

export const Energy = () => {
  const [energy, setEnergy] = useState(3);
  const [round, setRound] = useState(1);

  const onClick = (action) => {
    switch (action) {
      case "less":
        return setEnergy(energy > 1 ? energy - 1 : 0);

      case "more":
        return setEnergy(energy < 10 ? energy + 1 : 10);

      case "next":
        if (energy === 9) {
          return setEnergy(energy + 1);
        } else if (energy === 10) {
          return setEnergy(10);
        } else {
          return setEnergy(energy + 2);
        }

      case "new":
        return setEnergy(3);

      default:
        break;
    }
  };

  return (
    <Box className="containerCountEnergy">
      <Heading color="white">Ronda:{round}</Heading>
      <Box className="imageEnergy">
        <Heading size="xl">{energy}/10</Heading>
      </Box>

      <Stack
        marginBottom={3}
        marginTop={2}
        direction="row"
        spacing={4}
        align="center"
      >
        <Button
          onClick={() => onClick("less")}
          border="2px"
          borderColor="grey"
          colorScheme="red"
        >
          - Energia
        </Button>
        <Button
          onClick={() => onClick("more")}
          border="2px"
          borderColor="grey"
          colorScheme="blue"
        >
          + Energia
        </Button>
      </Stack>
      <Stack direction="row" spacing={4} align="center">
        <Button
          onClick={() => onClick("next")}
          border="2px"
          borderColor="grey"
          colorScheme="yellow"
        >
          Siguiente ronda
        </Button>
        <Button
          onClick={() => onClick("rest")}
          border="2px"
          borderColor="grey"
          variant="outline"
          colorScheme="blue"
        >
          Reset
        </Button>
      </Stack>
    </Box>
  );
};
