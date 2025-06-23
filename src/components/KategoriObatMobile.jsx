import React from 'react';
import kategori_obat from '../data/kategori_obat';
import { Typography, Box, Grid } from '@mui/material';
import { Link, useMatch } from 'react-router-dom';

export default function KategoriObatMobile() {

    let {  url } = useMatch();
  return (
    <>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {kategori_obat.map((kategoriLabel, i) => {
          return (
            <>
              <Grid item xs={2} sm={4} md={4} key={i}>
              <Box
              key={i}
              name={kategoriLabel.name}
              component={Link}
              to={`${url}/${kategoriLabel.url}`}
              border={1}
              borderColor='rgba(0,0,0,0.2)'
              borderRadius={3}
              sx={{ display: 'flex', textDecoration: 'none', flexDirection: 'row',}}>
              <Box  borderRight={1} borderColor='rgba(0,0,0,0.2)' borderRadius={3} sx={{ display: 'flex', width: 55, height: 51, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white' ,}}>
                <img src={kategoriLabel.image} alt='Ic Antibiotik' width={39} height={39} />
              </Box>
              <Box  borderRadius={3} sx={{ display: 'flex', alignItems: 'center', width:  105, height: 51, backgroundColor: 'rgba(246,244,242,1)'}}>
                <Typography sx={{  pl:'5px',fontSize: 14, fontWeight: 300, color:  'rgba(0,0,0, 1)' , textAlign: 'start', textTransform: 'none' }}>
                  {kategoriLabel.name}
                </Typography>
              </Box>
            </Box>
            {/* <Box sx={{ pt: '10px' }} /> */}
              </Grid>
            </>
          );
        })}
      </Grid>
    </>
  );
}
