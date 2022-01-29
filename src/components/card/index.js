import { Box, Heading, Button, Stack, Divider } from "@chakra-ui/react";

import "./index.scss";

export const Cards = ({
  card,
  cardUse,
  winCard,
  onClick,
  conditionalColor,
}) => {
  return (
    <Box className="containerCountCard">
      <Heading size="md" color={() => conditionalColor("white", "black")}>
        CONTADOR DE CARTAS
      </Heading>
      <Box className="imageCard">
        <Heading size="xl" color="white">
          {card}
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
          onClick={() => onClick("drawCard")}
          w="7.5rem"
          border="2px"
          borderColor={() => conditionalColor("white", "black")}
          color="white"
          colorScheme={conditionalColor("transparent", "blackAlpha")}
        >
          USO O PERDIO
        </Button>
        <Button
          onClick={() => onClick("lessCard")}
          w="7.5rem"
          border="2px"
          borderColor={() => conditionalColor("white", "black")}
          color="white"
          colorScheme={conditionalColor("transparent", "blackAlpha")}
        >
          {cardUse}
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
          onClick={() => onClick("winCard")}
          w="7.5rem"
          border="2px"
          borderColor={() => conditionalColor("white", "black")}
          color="white"
          colorScheme={conditionalColor("transparent", "blackAlpha")}
        >
          GANO
        </Button>
        <Button
          onClick={() => onClick("lessWinCard")}
          w="7.5rem"
          border="2px"
          borderColor={() => conditionalColor("white", "black")}
          color="white"
          colorScheme={conditionalColor("transparent", "blackAlpha")}
        >
          {winCard}
        </Button>
      </Stack>
      <Divider />
    </Box>
  );
};
