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
} from "@chakra-ui/react";

import {
  one,
  two,
  tree,
  four,
  five,
  six,
  seven,
  eigth,
  nine,
  ten,
} from "../../utils";

import "./index.scss";
import imageSlp from "./slp.png";

export const SlpCounter = () => {
  const [slpTotal, setSlpTotal] = useState(0);

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
        <ModalContent>
          <ModalHeader>Calculadora de slp</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box display="flex" justifyContent="flex-end">
              <Text>{calculator}</Text>
            </Box>

            <Box
              display="flex"
              alignSelf="center"
              justifyContent="flex-end"
              flexWrap="wrap"
            >
              <Button
                w="33%"
                h="4rem"
                onClick={(e) => onClick(e, one)}
                value={1}
              >
                +1
              </Button>
              <Button
                w="33%"
                h="4rem"
                onClick={(e) => onClick(e, two)}
                value={2}
              >
                +2
              </Button>
              <Button
                w="33%"
                h="4rem"
                onClick={(e) => onClick(e, tree)}
                value={3}
              >
                +3
              </Button>
              {/* <Button w="25%" h="4rem" value="+">
                +
              </Button> */}
              <Button
                w="33%"
                h="4rem"
                onClick={(e) => onClick(e, four)}
                value={4}
              >
                +4
              </Button>
              <Button
                w="33%"
                h="4rem"
                onClick={(e) => onClick(e, five)}
                value={5}
              >
                +5
              </Button>
              <Button
                w="33%"
                h="4rem"
                onClick={(e) => onClick(e, six)}
                value={6}
              >
                +6
              </Button>
              {/* <Button w="25%" h="4rem" value="-">
                -
              </Button> */}
              <Button
                w="33%"
                h="4rem"
                onClick={(e) => onClick(e, seven)}
                value={7}
              >
                +7
              </Button>
              <Button
                w="33%"
                h="4rem"
                onClick={(e) => onClick(e, eigth)}
                value={8}
              >
                +8
              </Button>
              <Button
                w="33%"
                h="4rem"
                onClick={(e) => onClick(e, nine)}
                value={9}
              >
                +9
              </Button>
              <Button
                w="66%"
                h="4rem"
                onClick={(e) => onClick(e, ten)}
                value="clear"
              >
                +10
              </Button>
              <Button
                w="33%"
                h="4rem"
                onClick={(e) => onClick(e, "clean")}
                value={10}
              >
                C
              </Button>
              {/* <Button w="25%" h="4rem" value="=">
                =
              </Button> */}
            </Box>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" w="100%" onClick={onClose}>
              Cerrar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Divider marginTop={5} backgroundColor="white" />
    </Box>
  );
};
