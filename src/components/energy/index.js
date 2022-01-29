import { Box, Text, Heading, Button, Stack } from "@chakra-ui/react";
import { conditionalColor } from "../../utils";

import "./index.scss";

export const Energy = ({ energy, round, onClick, conditionalColor }) => {
  return (
    <Box className="containerCountEnergy">
      <Heading size="md" color={() => conditionalColor("white", "black")}>
        Contador de Energias Axie Infinity
      </Heading>
      <Text
        opacity="1.3"
        marginTop="5px"
        marginBottom="1.5rem"
        color={() => conditionalColor("white", "black")}
      >
        Contador de energias, cartas y slp
      </Text>
      <Heading
        textAlign="center"
        // w="11rem"
        size="lg"
        border="2px"
        p={3}
        borderRadius={10}
        color={() => conditionalColor("white", "black")}
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
          letterSpacing={1}
          color={() => conditionalColor("white", "black")}
          colorScheme={conditionalColor("transparent", "red")}
        >
          - ENERGIA
        </Button>
        <Button
          onClick={() => onClick("moreEnergy")}
          w="7.5rem"
          border="2px"
          letterSpacing={1}
          color={() => conditionalColor("white", "black")}
          colorScheme={conditionalColor("transparent", "green")}
        >
          + ENERGIA
        </Button>
      </Stack>
      <Stack direction="row" spacing={4} align="center">
        <Button
          onClick={() => onClick("updateCards")}
          w="16rem"
          border="2px"
          fontSize="15px"
          letterSpacing={2}
          borderColor={() => conditionalColor("white", "black")}
          color={() => conditionalColor("white", "black")}
          colorScheme={conditionalColor("transparent", "yellow")}
        >
          SIGUIENTE RONDA
        </Button>
        {/* <Button
          onClick={() => onClick("rest")}
          w="7.5rem"
          border="2px"
          color={() => conditionalColor("white", "black")}
          colorScheme={conditionalColor("black", "orange")}
        >
          RESET
        </Button> */}
      </Stack>
      <Button
        onClick={() => onClick("new")}
        w="16rem"
        marginTop={2}
        letterSpacing={2}
        border="2px"
        borderColor={() => conditionalColor("white", "black")}
        color="white"
        colorScheme={conditionalColor("transparent", "blackAlpha")}
      >
        NUEVA PARTIDA
      </Button>
    </Box>
  );
};
