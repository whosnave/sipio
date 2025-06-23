import React, { useEffect, useState } from 'react';
import { Container, Divider, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useParams } from 'react-router';
import db_obat from '../data/db_obat';
import kategori_obat from '../data/kategori_obat';
import obt_K from '../assets/images/IconGolonganObat/Ic-obt-K.svg';
import obt_BT from '../assets/images/IconGolonganObat/Ic-obt-BT.svg';
import obt_BJ from '../assets/images/IconGolonganObat/Ic-obt-BJ.svg';
import obt_B from '../assets/images/IconGolonganObat/Ic-obt-B.svg';
import pengAntibiotik from '../assets/images/ImgCaraPenggunaanObat/ImgPengAntibiotik.png';
import pengObtTetes from '../assets/images/ImgCaraPenggunaanObat/ImgPengObtTetes.png';
import pengObtTetesMata from '../assets/images/ImgCaraPenggunaanObat/ImgPengObtTetesMata.png';
import pengSalepMata from '../assets/images/ImgCaraPenggunaanObat/ImgPengSalepMata.png';
import pengSuppositoria from '../assets/images/ImgCaraPenggunaanObat/ImgPengSuppositoria.png';
import pengtabletSublingual from '../assets/images/ImgCaraPenggunaanObat/ImgPengTabletSublingual.png';
import icCircleCatObat from '../assets/images/iconKategoriObat/IcCircleCatObat.svg';

export default function DetailObatMobile() {
  const [detail, setDetail] = useState({});

  const { id } = useParams();

  const imgKategoriObat = () => {
    for (let i = 0; i < kategori_obat.length; i++) {
      const element = kategori_obat[i];
      if (element.name === detail.Kategori) {
        return element.image;
      }
    }
  };

  useEffect(() => {
    let detailObat = db_obat.find((e) => e.No.toString() === id.toString());
    setDetail(detailObat);
  }, [id]);

  imgKategoriObat();
  return (
    <Container sx={{ backgroundColor: 'rgba(255, 255, 255, 1)', borderRadius: 2, p: '20px', boxShadow: '0px 2px 4px 1px rgba(0,0,0,0.4)' }}>
      <Grid item xs={12} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img src={detail.GambarObat} alt={detail.NamaObat} height={166} width={'auto'} />
      </Grid>
      <Container>
        <Typography sx={{ fontSize: 22, fontWeight: 600, textAlign: 'center' }}>{detail.NamaObat}</Typography>
        <Typography sx={{ fontSize: 14, fontWeight: 300, textAlign: 'center' }}>{detail.Kemasan}</Typography>
        <Typography sx={{ fontSize: 14, fontWeight: 300, textAlign: 'center' }}>{detail.BentukObat}</Typography>
      </Container>
      <Box sx={{ height: '20px' }} />
      <Grid container xs={12} direction={'row'}>
        <Grid item xs={6}>
          <Typography sx={{ fontSize: 14, fontWeight: 700 }}>Kategori</Typography>
          <Grid xs={12} direction={'row'} sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ display: 'flex', position: 'relative', justifyContent: 'center', alignItems: 'center' }}>
              <img src={imgKategoriObat()} alt={detail.Kategori} style={{ position: 'absolute' }} width={19} height={19} />
              <img src={icCircleCatObat} alt='Ic Circle' width={31} height={31} />
            </Box>
            <Typography sx={{ fontSize: 14, fontWeight: 400, color: 'rgba(48, 134, 185, 1)', pl: '8px' }}>{detail.Kategori}</Typography>
          </Grid>
          <Box sx={{ height: '20px' }} />
        </Grid>
        <Grid item xs={6}>
          <Typography sx={{ fontSize: 14, fontWeight: 700 }}>Golongan Obat</Typography>
          <Grid xs={12} direction={'row'} sx={{ display: 'flex', alignItems: 'center' }}>
            <img alt={detail.Golongan} src={detail.Golongan === 'Obat Keras' ? obt_K : detail.Golongan === 'Obat Bebas' ? obt_B : detail.Golongan === 'Jamu' ? obt_BJ : obt_BT} width={31} height={31} />
            <Typography
              sx={{
                pl: '8px',
                fontSize: 14,
                fontWeight: 400,
                color: detail.Golongan === 'Obat Keras' ? 'rgba(218, 37, 29, 1)' : detail.Golongan === 'Obat Bebas' ? 'rgba(59, 181, 74, 1)' : detail.Golongan === 'Jamu' ? 'rgba(21, 161, 81, 1)' : 'rgba(57, 84, 164, 1)',
              }}>
              {detail.Golongan}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Box sx={{ height: '10px' }} />
      <Divider />
      <Box sx={{ height: '10px' }} />
      <Grid xs={12}>

          <Typography sx={{ fontSize: 14, fontWeight: 600 }}>Deskripsi</Typography>
          <Typography sx={{ fontSize: 14, fontWeight: 300, whiteSpace: 'pre-line', verticalAlign: 'bottom' }}>{detail.Deskripsi ? detail.Deskripsi : '-'}</Typography>
          <Box sx={{ height: '12px' }} />
          <Typography sx={{ fontSize: 14, fontWeight: 600 }}>Indikasi Umum</Typography>
          <Typography sx={{ fontSize: 14, fontWeight: 300, whiteSpace: 'pre-line', verticalAlign: 'bottom' }}>{detail.IndikasiUmum ? detail.IndikasiUmum : '-'}</Typography>
          <Box sx={{ height: '12px' }} />
          <Typography sx={{ fontSize: 14, fontWeight: 600 }}>Komposisi</Typography>
          <Typography sx={{ fontSize: 14, fontWeight: 300, whiteSpace: 'pre-line', verticalAlign: 'bottom' }}>{detail.Komposisi ? detail.Komposisi : '-'}</Typography>
          <Box sx={{ height: '12px' }} />
          <Typography sx={{ fontSize: 14, fontWeight: 600 }}>Kategori Kehamilan</Typography>
          <Typography sx={{ fontSize: 14, fontWeight: 300, whiteSpace: 'pre-line', verticalAlign: 'bottom' }}>{detail.KategoriKehamilan ? detail.KategoriKehamilan : '-'}</Typography>
          <Box sx={{ height: '12px' }} />
          <Typography sx={{ fontSize: 14, fontWeight: 600 }}>Dosis</Typography>
          <Typography sx={{ fontSize: 14, fontWeight: 300, whiteSpace: 'pre-line', verticalAlign: 'bottom' }}>{detail.Dosis ? detail.Dosis : '-'}</Typography>
          <Box sx={{ height: '12px' }} />
          <Typography sx={{ fontSize: 14, fontWeight: 600 }}>Aturan Pakai</Typography>
          <Typography sx={{ fontSize: 14, fontWeight: 300, whiteSpace: 'pre-line', verticalAlign: 'bottom' }}>{detail.AturanPakai ? detail.AturanPakai : '-'}</Typography>
          <Box sx={{ height: '12px' }} />
          <Typography sx={{ fontSize: 14, fontWeight: 600 }}>Kontraindikasi</Typography>
          <Typography sx={{ fontSize: 14, fontWeight: 300, whiteSpace: 'pre-line', verticalAlign: 'bottom' }}>{detail.KontraIndikasi ? detail.KontraIndikasi : '-'}</Typography>
          <Box sx={{ height: '12px' }} />
          <Typography sx={{ fontSize: 14, fontWeight: 600 }}>Perhatian</Typography>
          <Typography sx={{ fontSize: 14, fontWeight: 300, whiteSpace: 'pre-line', verticalAlign: 'bottom' }}>{detail.Perhatian ? detail.Perhatian : '-'}</Typography>
          <Box sx={{ height: '12px' }} />
          <Typography sx={{ fontSize: 14, fontWeight: 600 }}>Efek Samping</Typography>
          <Typography sx={{ fontSize: 14, fontWeight: 300, whiteSpace: 'pre-line', verticalAlign: 'bottom' }}>{detail.EfekSamping ? detail.EfekSamping : '-'}</Typography>
          <Box sx={{ height: '12px' }} />
   
      </Grid>
      <Box sx={{ height: '12px' }} />
      <Grid xs={12} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {detail.CaraTepatPenggunaan && (
          <img
            src={
              detail.CaraTepatPenggunaan === 'Antibiotik'
                ? pengAntibiotik
                : detail.CaraTepatPenggunaan === 'Tablet Sublingual'
                ? pengtabletSublingual
                : detail.CaraTepatPenggunaan === 'Suppositoria'
                ? pengSuppositoria
                : detail.CaraTepatPenggunaan === 'Salep Mata'
                ? pengSalepMata
                : detail.CaraTepatPenggunaan === 'Obat tetes Telinga'
                ? pengObtTetes
                : pengObtTetesMata
            }
            alt={detail.CaraTepatPenggunaan}
            width={299}
            height={'auto'}
          />
        )}
      </Grid>
    </Container>
  );
}
