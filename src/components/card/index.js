import { Box, Heading, Button, Stack, Divider } from "@chakra-ui/react";

import "./index.scss";

export const Cards = ({ card, cardUse, winCard, onClick }) => {
  return (
    <Box className="containerCountCard">
      <Heading size="md" color="white">
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
          borderColor="white"
          color="white"
          colorScheme="black"
        >
          USO O PERDIO
        </Button>
        <Button
          onClick={() => onClick("lessCard")}
          w="7.5rem"
          border="2px"
          color="white"
          colorScheme="black"
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
          onClick={() => onClick("win")}
          w="7.5rem"
          border="2px"
          borderColor="white"
          color="white"
          colorScheme="black"
        >
          GANO
        </Button>
        <Button
          onClick={() => onClick("lessWinCard")}
          w="7.5rem"
          border="2px"
          color="white"
          colorScheme="black"
        >
          {winCard}
        </Button>
      </Stack>
      <Divider backgroundColor="white" />
    </Box>
  );
};
