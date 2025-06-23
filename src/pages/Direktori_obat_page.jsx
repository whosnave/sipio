import React from 'react';
import { Container, Typography, Box, Grid } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import ButtonGroup from '../components/ButtonGroup';
import ListObat from '../components/ListObat';
import DetailObat from '../components/DetailObat';

function Direktori_obat_page() {
  const printButtonLabel = (event) => {
    console.log(event.target.name);
  };

  return (
    <div style={{ width: 'auto', height: 'auto', backgroundColor: 'rgba(246, 244, 242, 1)' }}>
      <Container xl>
        <Box sx={{ pt: '30px' }} />
        <Typography sx={{ fontSize: 65, fontWeight: 700, textAlign: 'center', color: 'rgba(31, 161, 158, 1)' }}>
          Direktori & Informasi Obat
        </Typography>
        <Typography sx={{ fontSize: 40, fontWeight: 300, textAlign: 'center', color: 'rgba(0,0,0, 1)' }}>
          UPT Puskesmas Pamulang
        </Typography>
        <Typography sx={{ fontSize: 22, fontWeight: 300, textAlign: 'center', color: 'rgba(0,0,0, 1)' }}>
          disusun oleh Tim Farmasi Apotek UPT Puskesmas Pamulang
        </Typography>
        <Box sx={{ pt: '60px' }} />
        <Grid container direction="row">
          <Grid item xs={3.8}>
            <ButtonGroup doSomeThing={printButtonLabel} />
          </Grid>
          <Grid item xs={8.2}>
            <Routes>
              <Route
                path=""
                element={<Typography sx={{ fontSize: 20 }}>Silakan pilih kategori di sebelah kiri.</Typography>}
              />
              <Route path=":kategori" element={<ListObat />} />
              <Route path=":kategori/:id" element={<DetailObat />} />
            </Routes>
          </Grid>
        </Grid>
        <Box sx={{ pt: '60px' }} />
      </Container>
    </div>
  );
}

export default Direktori_obat_page;
