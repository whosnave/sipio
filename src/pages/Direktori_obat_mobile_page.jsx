import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import ListObatMobile from '../components/ListObatMobile';
import DetailObatMobile from '../components/DetailObatMobile';
import KategoriObatMobile from '../components/KategoriObatMobile';
import Breadcrumbs from '../components/Breadcrumbs';

function Direktori_obat_mobile_page() {
  return (
    <div style={{ width: 'auto', height: 'auto', backgroundColor: 'rgba(246, 244, 242, 1)' }}>
      <Container>
        <Routes>
          <Route
            path=""
            element={
              <>
                <Box sx={{ pt: '15px' }} />
                <Typography sx={{ fontSize: 20, fontWeight: 700, textAlign: 'center', color: 'rgba(31, 161, 158, 1)' }}>
                  Direktori & Informasi Obat
                </Typography>
                <Typography sx={{ fontSize: 14, fontWeight: 300, textAlign: 'center', color: 'rgba(0,0,0, 1)' }}>
                  UPT Puskesmas Pamulang
                </Typography>
                <Typography sx={{ fontSize: 8, fontWeight: 300, textAlign: 'center', color: 'rgba(0,0,0, 1)' }}>
                  disusun oleh Tim Farmasi Apotek UPT Puskesmas Pamulang
                </Typography>
                <Box sx={{ pt: '20px' }} />
                <Typography sx={{ fontSize: 12.6, fontWeight: 900, textAlign: 'center', color: 'rgba(0,0,0, 1)' }}>
                  Pilih Kategori Obat atau Vitamin
                </Typography>
                <Box sx={{ pt: '20px' }} />
                <KategoriObatMobile />
              </>
            }
          />
          <Route
            path=":kategori"
            element={
              <>
                <Box sx={{ pt: '10px' }} />
                <Breadcrumbs />
                <Box sx={{ pt: '10px' }} />
                <ListObatMobile />
              </>
            }
          />
          <Route
            path=":kategori/:id"
            element={
              <>
                <Box sx={{ pt: '10px' }} />
                <Breadcrumbs />
                <Box sx={{ pt: '10px' }} />
                <DetailObatMobile />
              </>
            }
          />
        </Routes>
        <Box sx={{ pt: '30px' }} />
      </Container>
    </div>
  );
}

export default Direktori_obat_mobile_page;
