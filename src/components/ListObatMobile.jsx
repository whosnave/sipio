import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import db_obat from '../data/db_obat';
import { useParams, useMatch } from 'react-router';
import { Link } from 'react-router-dom';

export default function ListObatMobile() {
  const [data, setData] = useState([]);

  const { kategori } = useParams();
  const { url } = useMatch();

  useEffect(() => {
    let dataFilter = db_obat.filter((e) => {
      if (kategori === 'antivirus') {
        return e.Kategori === 'Antivirus';
      }
      if (kategori === 'antibiotik') {
        return e.Kategori === 'Antibiotik';
      }
      if (kategori === 'antijamur-antiparasit') {
        return e.Kategori === 'Antijamur & Antiparasit';
      }
      if (kategori === 'obat-demam-nyeri') {
        return e.Kategori === 'Obat Demam, Nyeri, & Pusing';
      }
      if (kategori === 'obat-pilek') {
        return e.Kategori === 'Obat Alergi/Pilek';
      }
      if (kategori === 'obat-batuk') {
        return e.Kategori === 'Obat Batuk';
      }
      if (kategori === 'obat-radang') {
        return e.Kategori === 'Obat Radang';
      }
      if (kategori === 'obat-sesak-napas') {
        return e.Kategori === 'Obat Sesak Napas';
      }
      if (kategori === 'obat-diare') {
        return e.Kategori === 'Obat Diare';
      }
      if (kategori === 'obat-asam-urat') {
        return e.Kategori === 'Obat Asam Urat';
      }
      if (kategori === 'obat-darah-tinggi') {
        return e.Kategori === 'Obat Darah Tinggi';
      }
      if (kategori === 'obat-diabetes') {
        return e.Kategori === 'Obat Diabetes';
      }
      if (kategori === 'obat-jantung') {
        return e.Kategori === 'Obat Jantung';
      }
      if (kategori === 'obat-pengencer-darah') {
        return e.Kategori === 'Obat Pengencer Darah';
      }
      if (kategori === 'obat-lambung') {
        return e.Kategori === 'Obat Lambung';
      }
      if (kategori === 'obat-kolesterol') {
        return e.Kategori === 'Obat Kolesterol';
      }
      if (kategori === 'obat-muntah') {
        return e.Kategori === 'Obat Mual/Muntah';
      }
      if (kategori === 'multivitamin') {
        return e.Kategori === 'Multivitamin';
      }
      if (kategori === 'obat-mata') {
        return e.Kategori === 'Obat Mata';
      }
      if (kategori === 'obat-telinga') {
        return e.Kategori === 'Obat Telinga';
      }
      return false;
    });
    setData(dataFilter);
  }, [kategori]);

  return (
    <Container>
      {/* End hero unit */}
      <Grid container spacing={2}>
        {data.map((card) => (
          <Grid item key={card.No} xs={6} sm={6} md={3} >
            <Card component={Link} key={card.No} to={`${url}/${card.No}`}  sx={{ textDecoration: 'none' ,height: '200px', width: '150px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', borderRadius: '5px' }}>
              <CardMedia
                component='img'
                sx={{
                  pt: '20px',
        
                  objectFit:'contain'
                }}
                height={90}
                image={card.GambarObat}
                alt='random'
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography sx={{ textAlign: 'center', fontSize: 16, fontWeight: 600 }}>
                  {card.NamaObat}
                </Typography>
                <Typography sx={{ textAlign: 'center', fontSize: 12, fontWeight: 300 }}>
                  {card.Kemasan}
                  {<br />}
                  {card.BentukObat}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
