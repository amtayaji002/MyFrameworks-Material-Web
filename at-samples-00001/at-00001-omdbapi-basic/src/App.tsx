import React from 'react';
import './App.css';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';


import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import ButtonUsage from './Components/ButtonUsage';
import ProTip from './ProTip';


function Copyright() {
  return (
    <Typography
      variant="body2"
      align="center"
      sx={{
        color: 'text.secondary',
      }}
    >
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}.
    </Typography>
  );
}

function App() {
  return (
    <div className="App">
      <main>
        <ButtonUsage></ButtonUsage>
      </main>

      <footer>
        <Container maxWidth="sm">
          <Box sx={{ my: 4 }}>
            <ProTip />
            <Copyright />
          </Box>
        </Container>
      </footer>
    </div>
  );
}

export default App;
