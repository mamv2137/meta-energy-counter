import { useState } from "react";

import { Box, Image, Text, Heading, Button, Stack } from "@chakra-ui/react";

import "./index.scss";

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
        return;

      default:
        break;
    }
  };

  return (
    <Box className="containerCountEnergy">
      <Heading size="md" color="white">
        Contador de Energias Axie Infinity
      </Heading>
      <Text marginTop="5px" marginBottom="1.5rem" color="white">
        Contador de energias, carta y slp
      </Text>
      <Heading size="lg" border="2px" p={2} borderRadius={10} color="white">
        Ronda {round}
      </Heading>
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
          w="7.5rem"
          border="2px"
          borderColor="white"
          color="white"
          colorScheme="black"
        >
          - ENERGIA
        </Button>
        <Button
          onClick={() => onClick("more")}
          w="7.5rem"
          border="2px"
          color="white"
          colorScheme="black"
        >
          + ENERGIA
        </Button>
      </Stack>
      <Stack direction="row" spacing={4} align="center">
        <Button
          onClick={() => onClick("next")}
          w="7.5rem"
          border="2px"
          fontSize="13px"
          borderColor="white"
          variant="outline"
          color="white"
          colorScheme="black"
        >
          SIGUIENTE RONDA
        </Button>
        <Button
          onClick={() => onClick("rest")}
          w="7.5rem"
          border="2px"
          borderColor="white"
          variant="outline"
          color="#fff"
          colorScheme="black"
        >
          RESET
        </Button>
      </Stack>
      <Button
        onClick={() => onClick("new")}
        w="16rem"
        marginTop={2}
        border="2px"
        borderColor="white"
        variant="outline"
        colorScheme="black"
        color="white"
      >
        NUEVA PARTIDA
      </Button>
    </Box>
  );
};
