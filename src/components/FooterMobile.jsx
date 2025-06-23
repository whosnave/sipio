import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import logoPuskemasPamulang from '../assets/images/footer/logoPuskesmasPamulang.png';
import LogoTangSel from '../assets/images/footer/LogoTangSel.png';
import LogoKemenkes from '../assets/images/footer/LogoKemenkes.png';

function Footer() {
  return (
    <>
      <div style={{ display: 'flex', height: 225, width: 'auto', backgroundColor: 'rgba(34, 72, 112, 1)', justifyContent: 'center' }}>
        <Container xs={12} sx={{ paddingTop: '20px' }}>
            <Grid xs={12} direction='row' sx={{display:'flex',  justifyContent: 'center' }}>
              <div style={{ backgroundColor: 'rgba(255, 255, 255, 1)', width: 179, height: 78, borderRadius: 15, justifyContent: 'center', alignItems: 'center' }}>
                <img src={logoPuskemasPamulang} width='auto' height='80' alt='Logo Puskesmas' />
              </div>
            </Grid>
          <Grid container  direction='row' sx={{pl:'8px', pr:'8px', pt:'15px' }} >
            <Grid xs={9} container item  direction='column'  >
              <Typography sx={{ color: ' rgba(255, 255, 255, 1)', fontSize: 14, fontWeight: 700 }}>Alamat</Typography>
              <Typography sx={{ color: ' rgba(255, 255, 255, 0.7)', fontSize: 14, fontWeight: 300, lineHeight: 1.2 }}>
                Jl. Surya Kencana No.1, Pamulang Barat<br/>
                Kec. Pamulang, Kota Tangerang 
                Selatan, <br/>Banten 15417
              </Typography>
            </Grid>
            <Grid xs={3} container item direction='column'  >
              <Typography sx={{ color: ' rgba(255, 255, 255, 1)', fontSize: 14, fontWeight: 700 }}>Telepon</Typography>
              <Typography sx={{ color: ' rgba(255, 255, 255, 0.7)', fontSize: 14, fontWeight: 300 }}>(021) 7445537</Typography>
            </Grid>
          </Grid>
     
        </Container>
      </div>
        <div  style={{width:'auto', height:103, backgroundColor: 'rgba(20, 49, 81, 1)', display:'flex',  justifyContent: 'center', alignItems: 'center'}}>
        <img src={LogoTangSel} width='auto' height='75' alt='Logo Kota Tangsel' style={{ marginRight: 10 }} />
              <img src={LogoKemenkes} width='auto' height='75' alt='Logo Kemenkes' />
        </div>
    </>
  );
}

export default Footer;
