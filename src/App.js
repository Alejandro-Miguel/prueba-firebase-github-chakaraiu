import React from 'react';
import { useState, useEffect } from "react";
import Hero from './components/hero'
import Nav from './components/navigation';
import Tool from './components/tools'
import JsonData from "./data/data.json";

import {
  ChakraProvider,
  Box,
  Grid,
  theme,
} from '@chakra-ui/react';
function App() {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">

        <Grid minH="100vh" p={0}>
          <Nav/>
          <Hero data={landingPageData.Hero}/>
        </Grid>

      </Box>
    </ChakraProvider>
  );
}

export default App;
