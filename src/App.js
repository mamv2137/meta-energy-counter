import { Box, ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import { Energy } from "./components/energy";

function App() {
  return (
    <ChakraProvider>
      <Box h="100vh" backgroundColor="#0D151E">
        <Energy />
      </Box>
    </ChakraProvider>
  );
}

export default App;
