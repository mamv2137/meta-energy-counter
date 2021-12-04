import { Box, ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import { Energy } from "./components/energy";

function App() {
  return (
    <ChakraProvider>
      <Box h="100vh" backgroundColor="rgb(74, 67, 87)">
        <Energy />
      </Box>
    </ChakraProvider>
  );
}

export default App;
