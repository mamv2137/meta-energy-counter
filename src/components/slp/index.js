import { useRef, useState } from "react";
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
  InputGroup,
  Input,
  InputRightElement,
  InputLeftElement,
} from "@chakra-ui/react";

import "./index.scss";
import imageSlp from "./slp.png";

export const SlpCounter = () => {
  const [calculator, setCalculator] = useState(0);

  const onClick = (e, value) => {
    e.preventDefault();
    typeof value === "number"
      ? setCalculator(calculator + value)
      : setCalculator(0);
  };

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
          <Heading size="lg">{calculator}</Heading>
        </Button>
      </Box>
      <Modal
        size="xs"
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent border="1px solid black" backgroundColor="#2b2b2b">
          <ModalHeader color="white">Calculadora de slp</ModalHeader>
          <ModalCloseButton color="white" />
          <ModalBody>
            <Box display="flex" justifyContent="flex-end">
              <InputGroup>
                <Input
                  className="outputSlpCalculator"
                  type="text"
                  isReadOnly="true"
                />
                <InputLeftElement width="1.5rem">
                  <Image src={imageSlp} alt="imagen de slp" />
                </InputLeftElement>
                <InputRightElement>
                  <Text>{calculator}</Text>
                </InputRightElement>
              </InputGroup>
            </Box>

            <Box
              display="flex"
              alignSelf="center"
              justifyContent="flex-end"
              flexWrap="wrap"
            >
              <Button
                w="31%"
                h="3.7rem"
                mr="3%"
                onClick={(e) => onClick(e, 1)}
                value={1}
              >
                +1
              </Button>
              <Button
                w="31%"
                h="3.7rem"
                mr="3%"
                onClick={(e) => onClick(e, 2)}
                value={2}
              >
                +2
              </Button>
              <Button
                w="31%"
                h="3.7rem"
                mb=".3rem"
                onClick={(e) => onClick(e, 3)}
                value={3}
              >
                +3
              </Button>
              {/* <Button w="25%" h="4rem" value="+">
                +
              </Button> */}
              <Button
                w="31%"
                h="3.7rem"
                mr="3%"
                onClick={(e) => onClick(e, 4)}
                value={4}
              >
                +4
              </Button>
              <Button
                w="31%"
                h="3.7rem"
                mr="3%"
                onClick={(e) => onClick(e, 5)}
                value={5}
              >
                +5
              </Button>
              <Button
                w="31%"
                h="3.7rem"
                mb=".3rem"
                onClick={(e) => onClick(e, 6)}
                value={6}
              >
                +6
              </Button>
              {/* <Button w="25%" h="4rem" value="-">
                -
              </Button> */}
              <Button
                w="31%"
                h="3.7rem"
                mr="3%"
                onClick={(e) => onClick(e, 7)}
                value={7}
              >
                +7
              </Button>
              <Button
                w="31%"
                h="3.7rem"
                mr="3%"
                onClick={(e) => onClick(e, 8)}
                value={8}
              >
                +8
              </Button>
              <Button
                w="31%"
                h="3.7rem"
                mb=".3rem"
                onClick={(e) => onClick(e, 9)}
                value={9}
              >
                +9
              </Button>
              <Button
                w="65%"
                h="3.7rem"
                mr="3%"
                onClick={(e) => onClick(e, 10)}
                value={10}
              >
                +10
              </Button>
              <Button
                w="31%"
                h="3.7rem"
                onClick={(e) => onClick(e, "clean")}
                value="clear"
              >
                C
              </Button>
              {/* <Button w="25%" h="4rem" value="=">
                =
              </Button> */}
            </Box>
          </ModalBody>

          <ModalFooter>
            <Button backgroundColor="#faa839" w="100%" onClick={onClose}>
              Cerrar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Divider marginTop={5} backgroundColor="white" />
    </Box>
  );
};
