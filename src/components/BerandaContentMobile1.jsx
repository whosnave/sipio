import React from 'react';
import { Container, Divider, Grid, Typography } from '@mui/material';
import BgBerandaContent1 from '../assets/images/berandaContent1/BgBerandaContentMobile1.png';
import { Box } from '@mui/system';

function BerandaContent1() {
  return (
    <>
      <div style={{ width: '100%', height: 213, backgroundImage: `url(${BgBerandaContent1})`, backgroundSize: 'cover' }}>
        <Container>
          <Typography sx={{ color: ' rgba(255, 255, 255, 1)', fontSize: 20, fontWeight: 700, textAlign: 'end', pt: '11px', mb: '12px' }}>Kenali Waktu Penggunaan Obat</Typography>
          <Grid container direction='row' sx={{ display: 'flex', width: 'auto', justifyContent: 'flex-end' }}>
            <Grid item>
              <Typography sx={{ color: ' rgba(255, 255, 255, 1)', fontSize: 12.5, fontWeight: 600, backgroundColor: 'rgba(34, 72, 112, 1)', px: '5px', mb: '21px', borderRadius: '8px' }}>Beyond Use Date (BUD)</Typography>
              <Typography sx={{ color: ' rgba(255, 255, 255, 1)', fontSize: 6.3, fontWeight: 700 }}>Definisi</Typography>
              <Typography sx={{ color: ' rgba(255, 255, 255, 0.6)', fontSize: 6.3, fontWeight: 400, lineHeight: 1.3, mb:'8.5px' }}>
                Batas waktu penggunaan produk obat setelah <br />
                diracik/disiapkan atau setelah kemasan
                <br />
                primernya dibuka/dirusak (ampul, vial, blister,
                <br />
                dll yang bersentuhan langsung dengan obat).
              </Typography>
     
              <Typography sx={{ color: ' rgba(255, 255, 255, 1)', fontSize: 6.3, fontWeight: 700 }}>Kegunaan</Typography>
              <Typography sx={{ color: ' rgba(255, 255, 255, 0.6)', fontSize: 6.3, fontWeight: 400, lineHeight: 1 }}>Menentukan batasan waktu stabil suatu obat.</Typography>
            </Grid>
            <Grid item>
              <Divider sx={{ height: 112,  ml: '5px', mr: '5px', color: 'rgba(246, 244, 242, 1)' }} orientation='vertical' />
            </Grid>
            <Grid item>
              <Typography sx={{ color: ' rgba(255, 255, 255, 1)', fontSize: 12.5, fontWeight: 600, backgroundColor: 'rgba(34, 72, 112, 1)', px: '5px', mb: '21px', borderRadius: '8px' }}>Expired Date (ED)</Typography>
              <Typography sx={{ color: ' rgba(255, 255, 255, 1)', fontSize: 6.3, fontWeight: 700 }}>Definisi</Typography>
              <Typography sx={{ color: ' rgba(255, 255, 255, 0.6)', fontSize: 6.3, fontWeight: 400, lineHeight: 1.3, mb:'8.5px'}}>
                Tanggal terakhir di mana keefektifan
                <br />
                dan keamanan produk obat masih
                <br />
                terjamin untuk dikonsumsi atau <br />
                digunakan oleh konsumen.
              </Typography>
  
              <Typography sx={{ color: ' rgba(255, 255, 255, 1)', fontSize: 6.3, fontWeight: 700, lineHeight: 1.3 }}>Kegunaan</Typography>
              <Typography sx={{ color: ' rgba(255, 255, 255, 0.6)', fontSize: 6.3, fontWeight: 400, lineHeight: 1.3 }}>
                Menentukan batasan waktu stabil <br />
                suatu obat.
              </Typography>
            </Grid>
       
          </Grid>
          <Box sx={{ ml: '95px', width: '240px' }}>
              <Typography sx={{ color: ' rgba(34, 72, 112, 1)', fontSize: 7, fontWeight: 400, mt: '10px', lineHeight: 1.3 }}>
                Waktu BUD bisa sama atau lebih pendek dibandingkan ED. Karena inilah penting <br /> untuk tenaga kesehatan khususnya{' '}
                <Box display='inline' fontWeight='700'>
                  Apoteker untuk mengetahui ketentuan dan mencantumkan pada kemasan obat.
                </Box>
              </Typography>
              </Box>
        </Container>
      </div>
    </>
  );
}

export default BerandaContent1;
