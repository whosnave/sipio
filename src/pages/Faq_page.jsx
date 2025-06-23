import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import AccordionFaq from '../components/AccordionFaq';
// import faq_data from '../src/data/faq_json.json';
import faq_data from '../data/db_obat';


function Faq_page() {
  return (
    <>
      <div style={{ width: 'auto', height: 'auto', backgroundColor: 'rgba(229,229,229,1)' }}>
        <Container xl>
          <Box sx={{ pt: '30px' }} />
          <Typography sx={{ fontSize: 65, fontWeight: 700, textAlign: 'center', color: 'rgba(31, 161, 158, 1)' }}>Frequently Asked Questions</Typography>
          <Typography sx={{ fontSize: 40, fontWeight: 300, textAlign: 'center', color: 'rgba(0,0,0, 1)' }}>Hal yang sering ditanyakan seputar obat</Typography>
          <Typography sx={{ fontSize: 22, fontWeight: 300, textAlign: 'center', color: 'rgba(0,0,0, 1)' }}>disusun oleh Tim Farmasi Apotek UPT Puskesmas Pamulang</Typography>
          <Box sx={{ pt: '60px' }} />
          {faq_data.map((e) => {
            return <AccordionFaq question={e.q} answer={e.a} />;
          })}
          <Box sx={{ pt: '60px' }} />
        </Container>
      </div>
    </>
  );
}

export default Faq_page;
