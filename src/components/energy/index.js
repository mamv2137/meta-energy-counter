import { Box, Text, Heading, Button, Stack } from "@chakra-ui/react";

import "./index.scss";

export const Energy = ({ energy, round, onClick }) => {
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
        // w="11rem"
        size="lg"
        border="2px"
        p={3}
        borderRadius={10}
        color="white"
      >
        RONDA {round}
      </Heading>
      <Box className="imageEnergy">
        <Heading textShadow="1px 1px 4px black" color="white" size="xl">
          {energy}/10
        </Heading>
      </Box>

      <Stack
        marginBottom={3}
        marginTop={2}
        direction="row"
        spacing={4}
        align="center"
      >
        <Button
          onClick={() => onClick("lessEnergy")}
          w="7.5rem"
          border="2px"
          borderColor="white"
          color="white"
          colorScheme="black"
        >
          - ENERGIA
        </Button>
        <Button
          onClick={() => onClick("moreEnergy")}
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
          onClick={() => onClick("updateCards")}
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
