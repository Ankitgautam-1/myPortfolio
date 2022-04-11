import "../styles/globals.css";

import { ChakraProvider } from "@chakra-ui/react";
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS={false}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
