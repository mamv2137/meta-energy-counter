import {
  Box,
  Heading,
  Image,
  Button,
  Text,
  Divider,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@chakra-ui/react";
import { useRef, useState } from "react";

import "./index.scss";
import imageSlp from "./slp.png";

export const SlpCounter = () => {
  const [slp, setSlp] = useState(0);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = useRef();
  const finalRef = useRef();

  return (
    <Box className="containerSlpCounter">
      <Heading className="titleSlpCounter" size="md">
        CONTADOR DE SLP
      </Heading>
      <Box className="containerImageAndCounter">
        <Image src={imageSlp} alt="imagen de slp" className="imageSlp" />
        <Button
          h="3rem"
          padding={0}
          w="5rem"
          border="2px"
          borderColor="white"
          color="white"
          colorScheme="black"
          onClick={onOpen}
          backgroundSize="cover"
        >
          <Heading size="lg">{slp}</Heading>
        </Button>
      </Box>
      <Modal
        size="sm"
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Calculadora de slp</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Box w="90%" display="flex" justifyContent="flex-end">
              <Text>0</Text>
            </Box>

            <Box className="numbersCalculator">
              <Button>1</Button>
              <Button>2</Button>
              <Button>3</Button>
              <Button>4</Button>
              <Button>5</Button>
              <Button>6</Button>
              <Button>7</Button>
              <Button>8</Button>
              <Button>9</Button>
              <Button>0</Button>
            </Box>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cerrar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Divider marginTop={5} backgroundColor="white" />
    </Box>
  );
};
