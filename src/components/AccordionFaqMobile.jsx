import React, { useState } from 'react';
import { Typography, Box, Grid, Button, Container } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

function AccordionFaqMobile({ question, answer }) {
  const [hidden, setHidden] = useState(true);

  const expandView = () => {
    hidden ? setHidden(false) : setHidden(true);
  };

  return (
    <>
    <Container sx={{display:'contents',backgroundColor:'yellow'}}>
      
      <Grid xs={12} component={Button} onClick={() => expandView()} sx={{ flexDirection: 'row' }}>
        <Box xs={2} sx={{ width: '10vw', height: 33, backgroundColor: hidden ? 'rgba(68, 207, 203, 1)' : 'rgba(255, 255, 255, 1)' }}>
          {hidden ? <AddIcon sx={{ fontSize: 20, pt: '6px', textAlign: 'center', color: 'black' }} /> : <RemoveIcon sx={{ fontSize: 20, pt: '6px', textAlign: 'center', color: 'black' }} />}
        </Box>
        <Box xs={10} sx={{ display: 'flex', alignItems: 'center', width: '100vw', height: 33, background: hidden ? 'rgba(255, 255, 255, 1)' : "linear-gradient(to right, #3086B9, #44CFCB)" }}>
          <Typography sx={{ pl: '5px', pt: '2px', fontSize: 10, fontWeight: 400, color: hidden ? 'rgba(80,80,80,1)' : 'rgba(255, 255, 255, 1)', textAlign: 'start', textTransform: 'none' }}>{question}</Typography>
        </Box>
      </Grid>
      {!hidden && (
        <Grid  xs={12} component={Button} container sx={{ flexDirection: 'row-reverse'}}>
          <Box item xs={10} sx={{ mt:'-10px', width: '100vw', height: 'auto',  backgroundColor: 'rgba(255, 255, 255, 1)', p:'4px' }}>
            <Typography sx={{ pl: '5px', pt: '2px', fontSize: 10, fontWeight: 400, color: 'rgba(80,80,80,1)', textAlign: 'start', textTransform: 'none', whiteSpace:'pre-line', verticalAlign:'bottom' }}> {answer}</Typography>
          </Box>
        </Grid>
      )}
    </Container>
    </>
  );
}

export default AccordionFaqMobile;
