import React, { useEffect, useState } from 'react';
import { Container, Grid, Typography } from '@mui/material';
import logoPuskemasPamulang from '../assets/images/footer/logoPuskesmasPamulang.png';
import LogoTangSel from '../assets/images/footer/LogoTangSel.png';
import LogoKemenkes from '../assets/images/footer/LogoKemenkes.png';

function Footer() {
  const [visitorCount, setVisitorCount] = useState(null);

 useEffect(() => {
  const getCount = async () => {
    try {
      const res = await fetch('https://api.countapi.xyz/hit/puskesmas-pamulang/visits');
      const data = await res.json();
      setVisitorCount(data.value);
    } catch (error) {
      console.error('Error fetching visitor count:', error);
      setVisitorCount('Error');
    }
  };

  getCount();
}, []);


  return (
    <div style={{ display: 'flex', height: 184, width: '100%', backgroundColor: 'rgba(34, 72, 112, 1)', justifyContent: 'center' }}>
      <Container xl lg sx={{ paddingTop: '37px' }}>
        <Grid container spacing={2}>
          <Grid>
            <div style={{ backgroundColor: 'rgba(255, 255, 255, 1)', width: 179, height: 78, borderRadius: 15, justifyContent: 'center', alignItems: 'center', marginTop: '-16px', marginLeft: '-16px' }}>
              <img src={logoPuskemasPamulang} width='auto' height='80' alt='Logo Puskesmas' />
            </div>
          </Grid>
          <Grid container xl lg direction='column' sx={{ display: 'flex', paddingLeft: '50px', marginTop: '-16px', marginLeft: '-16px' }}>
            <Typography sx={{ color: ' rgba(255, 255, 255, 1)', fontSize: 19, fontWeight: 700 }}>Alamat</Typography>
            <div style={{ marginTop: '-10px' }}>
              <Typography sx={{ color: ' rgba(255, 255, 255, 1)', fontSize: 17, fontWeight: 100, lineHeight: 1.1 }}>
                Jl. Surya Kencana No.1, Pamulang Barat,<br />
                Kec. Pamulang, Kota Tangerang <br />
                Selatan, Banten 15417
              </Typography>
            </div>
          </Grid>
          <Grid container xl lg direction='column' sx={{ display: 'flex', paddingLeft: '50px', marginTop: '-16px', marginLeft: '10px' }}>
            <Typography sx={{ color: ' rgba(255, 255, 255, 1)', fontSize: 19, fontWeight: 700 }}>Telepon</Typography>
            <div style={{ marginTop: '-10px' }}>
              <Typography sx={{ color: ' rgba(255, 255, 255, 1)', fontSize: 17, fontWeight: 300 }}>(021) 7445537</Typography>
            </div>
          </Grid>
          <Grid>
            <div style={{ color: 'white', marginLeft: 20, marginTop: -10 }}>
              <Typography sx={{ fontSize: 19, fontWeight: 700 }}>Visitor Count</Typography>
              <Typography sx={{ fontSize: 17 }}>
                {visitorCount !== null ? visitorCount : 'Loading...'}
              </Typography>
            </div>
          </Grid>
          <Grid>
            <img src={LogoTangSel} width='auto' height='75' alt='Logo Kota Tangsel' style={{ marginLeft: 53, marginTop: '-16px', marginRight: '6px'}} />
            <img src={LogoKemenkes} width='auto' height='75' alt='Logo Kemenkes' style={{ marginLeft: 6, marginTop: '-20px' }} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Footer;
