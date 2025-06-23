import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import AccordionFaqMobile from '../components/AccordionFaqMobile';
import faq_data from '../data/db_obat';

function Faq_page_mobile() {
  return (
    <>
      <div style={{ width: 'auto', height: 'auto', backgroundColor: 'rgba(229,229,229,1)' }}>
        <Container>
          <Box sx={{ pt: '15px' }} />
          <Typography sx={{ fontSize: 20, fontWeight: 700, textAlign: 'center', color: 'rgba(31, 161, 158, 1)' }}>Frequently Asked Questions</Typography>
          <Typography sx={{ fontSize: 14, fontWeight: 300, textAlign: 'center', color: 'rgba(0,0,0, 1)' }}>Hal yang sering ditanyakan seputar obat</Typography>
          <Typography sx={{ fontSize: 8, fontWeight: 300, textAlign: 'center', color: 'rgba(0,0,0, 0.7)' }}>disusun oleh Tim Farmasi Apotek UPT Puskesmas Pamulang</Typography>
          <Box sx={{ pt: '20px' }} />
          <Typography sx={{ fontSize: 14, fontWeight: 900, textAlign: 'center', color: 'rgba(0,0,0, 1)' }}>Pilih Pertanyaan dan lihat jawaban</Typography>

          <Box sx={{ pt: '20px' }} />
          {faq_data.map((e) => {
            return <AccordionFaqMobile question={e.q} answer={e.a} />;
          })}
          <Box sx={{ pt: '20px' }} />
        </Container>
      </div>
    </>
  );
}

export default Faq_page_mobile;
