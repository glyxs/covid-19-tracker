import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import theme from "./theme/index";
import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);