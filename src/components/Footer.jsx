import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import logoPuskemasPamulang from '../assets/images/footer/logoPuskesmasPamulang.png';
import LogoTangSel from '../assets/images/footer/LogoTangSel.png';
import LogoKemenkes from '../assets/images/footer/LogoKemenkes.png';

function Footer() {
  return (
    <>
      <div style={{ display: 'flex', height: 184, width: '100%', backgroundColor: 'rgba(34, 72, 112, 1)', justifyContent: 'center' }}>
        <Container xl lg sx={{ paddingTop: '37px' }}>
          <Grid container spacing={2}>
            <Grid>
              <div style={{ backgroundColor: 'rgba(255, 255, 255, 1)', width: 179, height: 78, borderRadius: 15, justifyContent: 'center', alignItems: 'center' }}>
                <img src={logoPuskemasPamulang} width='auto' height='80' alt='Logo Puskesmas' />
              </div>
            </Grid>
            <Grid container xl lg direction='column' sx={{ display: 'flex', paddingLeft: '50px' }}>
              <Typography sx={{ color: ' rgba(255, 255, 255, 1)', fontSize: 20, fontWeight: 700 }}>Alamat</Typography>
              <Typography sx={{ color: ' rgba(255, 255, 255, 1)', fontSize: 20, fontWeight: 300, lineHeight: 1.1 }}>
                Jl. Surya Kencana No.1, Pamulang Barat,<br></br>
                Kec. Pamulang, Kota Tangerang <br></br>
                Selatan, Banten 15417
              </Typography>
            </Grid>
            <Grid container xl lg direction='column' sx={{ display: 'flex', paddingLeft: '50px' }}>
              <Typography sx={{ color: ' rgba(255, 255, 255, 1)', fontSize: 20, fontWeight: 700 }}>Telepon</Typography>
              <Typography sx={{ color: ' rgba(255, 255, 255, 1)', fontSize: 20, fontWeight: 300 }}>(021) 7445537</Typography>
            </Grid>
            <Grid>
              <img src={LogoTangSel} width='auto' height='75' alt='Logo Kota Tangsel' style={{ marginRight: 10 }} />
              <img src={LogoKemenkes} width='auto' height='75' alt='Logo Kemenkes' />
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
}

export default Footer;
