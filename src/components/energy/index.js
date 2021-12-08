import { useState } from "react";

import { Box, Image, Text, Heading, Button, Stack } from "@chakra-ui/react";

import "./index.scss";

export const Energy = ({ energy, setEnergy, round, setRound, onClick }) => {
  return (
    <Box className="containerCountEnergy">
      <Heading size="md" color="white">
        Contador de Energias Axie Infinity
      </Heading>
      <Text marginTop="5px" marginBottom="1.5rem" color="white">
        Contador de energias, carta y slp
      </Text>
      <Heading
        textAlign="center"
        w="10rem"
        size="lg"
        border="2px"
        p={2}
        borderRadius={10}
        color="white"
      >
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
