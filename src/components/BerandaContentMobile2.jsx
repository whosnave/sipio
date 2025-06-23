import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import BgBerandaContent2 from '../assets/images/berandaContent2/BgBerandaContent2.svg';
import TabelContent2 from '../assets/images/berandaContent2/TabelContent2.png';

function BerandaContent2() {
  return (
    <>
      <div style={{ width: 'auto', height: 150, backgroundImage: `url(${BgBerandaContent2})`, backgroundSize: 'cover', backgroundColor: 'rgba(78, 165, 217, 1)', backgroundBlendMode: 'overlay' }}>
        <Container sx={{alignItems:'center', justifyContent: 'center'}}>
          <Grid component='div' container direction={'row'}>
            <Grid xl={6} xs={6} item>
              <Typography sx={{ color: ' rgba(255, 255, 255, 1)', fontSize: 18, fontWeight: 700, textAlign: 'center', pt: '20px', mb: '20px' }}>
                Catat yuk!
                <br /> Beyond Use Date
                <br /> (BUD) Sediaan
                <br /> Non Steril
              </Typography>
            </Grid>
            <Grid container xl={6} xs={6} item direction='row' sx={{pt:'10px'}}>
            <img src={TabelContent2} width='auto' height='130px' alt='Tabel' />
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
}

export default BerandaContent2;
