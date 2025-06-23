import React, { useState } from 'react';
import { Typography, Box, Grid, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

function AccordionFaq({ question, answer }) {
  const [hidden, setHidden] = useState(true);

  const expandView = () => {
    hidden ? setHidden(false) : setHidden(true);
  };

  return (
    <>
      <Grid component={Button} onClick={() => expandView()} sx={{ flexDirection: 'row' }}>
        <Box xs={1} sx={{ width: 51, height: 51, backgroundColor: hidden ? 'rgba(68, 207, 203, 1)' : 'rgba(255, 255, 255, 1)', borderTopLeftRadius: 20, borderBottomLeftRadius: 20 }}>
          {hidden ? <AddIcon sx={{ fontSize: 38, pt: '6px', textAlign: 'center', color: 'black' }} /> : <RemoveIcon sx={{ fontSize: 38, pt: '6px', textAlign: 'center', color: 'black' }} />}
        </Box>
        <Box xs={10} sx={{ width: 1095, height: 51, background: hidden ? 'rgba(255, 255, 255, 1)' : "linear-gradient(to right, #3086B9, #44CFCB)" }}>
          <Typography sx={{ pl: '20px', pt: '10px', fontSize: 22, fontWeight: 400, color: hidden ? 'rgba(80,80,80,1)' : 'rgba(255, 255, 255, 1)', textAlign: 'start', textTransform: 'none' }}>{question}</Typography>
        </Box>
      </Grid>
      {!hidden && (
        <Grid container sx={{ flexDirection: 'row', mt: '-5px', ml: '8px' }}>
          <Box item xs={1} sx={{ width: 51, height: 51, backgroundColor: 'transparent' }}></Box>
          <Box item xs={10} sx={{ width: 1095, height: 'auto', backgroundColor: 'rgba(255, 255, 255, 1)', py:'20px', }}>
            <Typography sx={{ pl: '20px', pt: '10px', fontSize: 22, fontWeight: 400, color: 'rgba(80,80,80,1)', textAlign: 'start', textTransform: 'none', whiteSpace:'pre-line', verticalAlign:'bottom' }}> {answer}</Typography>
          </Box>
        </Grid>
      )}
    </>
  );
}

export default AccordionFaq;
