import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import theme from "./theme/index";
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'focus-visible/dist/focus-visible';

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
