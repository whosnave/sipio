import React, { useState } from 'react';
import { Container, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import GambarHeaderKanan from '../assets/images/header/GambarHeaderKanan.png';
import logoPuskemasPamulang from '../assets/images/header/LogoPuskesmasPamulang2.png';
// import BgHeader from '../assets/images/header/BgHeader.svg';
import IcBerandaFarmasi from '../assets/images/header/mainButton/BerandaFarmasi/IcBerandaFarmasi.svg';
import IcBerandaFarmasiSelected from '../assets/images/header/mainButton/BerandaFarmasi/IcBerandaFarmasiSelected.svg';
import IcDirInformasiObat from '../assets/images/header/mainButton/DirInformasiObat/IcDirInformasiObat.svg';
import IcDirInformasiObatSelected from '../assets/images/header/mainButton/DirInformasiObat/IcDirInformasiObatSelected.svg';
import IcArtikelObat from '../assets/images/header/mainButton/ArtikelObat/IcArtikelObat.svg';
import IcFAQ from '../assets/images/header/mainButton/FAQ/IcFAQ.svg';
import IcFAQSelected from '../assets/images/header/mainButton/FAQ/IcFAQSelected.svg';
import IcTanyaApoteker from '../assets/images/header/mainButton/TanyaApoteker/IcTanyaApoteker.svg';
import IcTanyaApotekerSelected from '../assets/images/header/mainButton/TanyaApoteker/IcTanyaApotekerSelected.svg';

function Header() {
  const [activeMenu, setActiveMenu] = useState(0);

  const selectMenu = (no) => {
    setActiveMenu(no);
  };

  return (
    <>
      <Container component='div' sx={{ pl: '20px', pr: '20px', width: 'auto', height: 258, backgroundImage: `url(${BgHeader})`, backgroundSize: 'cover', backgroundColor: 'rgba(255,255,255,0.85)', backgroundBlendMode: 'overlay' }}>
        <Grid sx={{ pt: '10px' }}>
          <img src={logoPuskemasPamulang} width='auto' height='34' alt='Logo Puskesmas' />
        </Grid>
        <Grid container direction={'row'} sx={{ pt: '32px' }}>
          <Grid item xs={7.5}>
            <Typography sx={{ color: 'rgba(31, 161, 158, 1)', fontSize: 20, fontWeight: 700, lineHeight: 1.2 }}>
              Pelayanan <br /> Informasi Obat
            </Typography>
            <Typography sx={{ color: ' rgba(0, 0, 0, 1)', fontSize: 7, fontWeight: 700, lineHeight: 1.4 }}>
              <br />
              Selamat datang di website Pelayanan Informasi Obat UPT <br />
              Puskesmas Pamulang!
            </Typography>
            <Typography sx={{ color: ' rgba(0, 0, 0, 1)', fontSize: 7, fontWeight: 400, lineHeight: 1.4, pr: '15px' }}>
              <br />
              Anda dapat mencari informasi terkait obat yang diberikan di UPT Puskesmas Pamulang di situs ini yang disusun oleh Tim Farmasi Apotek UPT Puskesmas Pamulang. Layanan ini bertujuan untuk meningkatkan pengetahuan masyarakat dan
              tenaga kesehatan dalam penggunaan obat-obatan yang rasional.
            </Typography>
          </Grid>
          <Grid item xs={4.5} sx={{ display: 'flex', justifyContent: 'center' }}>
            <img src={GambarHeaderKanan} width={134} height={139} alt='Gambar Header Kanan' />
          </Grid>
        </Grid>
      </Container>
      <Container sx={{ background: 'linear-gradient(to right, #1FA09E, #3086B9)', width: 'auto', height: 88, pt: '6px', pb: '8px', pr: '20px', pl: '20px' }}>
        <Grid container direction={'row'} sx={{ display: 'flex', justifyContent: 'space-around' }}>
          <Grid
            component={Link}
            to='/'
            onClick={() => selectMenu(0)}
            item
            direction='column'
            sx={{
              display: 'flex',
              alignItems: 'center',
              pl: '3px',
              pr: '3px',
              textDecoration: 'none',
              backgroundColor: activeMenu === 0 ? 'rgba(48, 134, 185, 1)' : 'rgba(255, 255, 255, 1)',
              width: 57,
              height: 74,
              borderRadius: '3px',
              boxShadow: `-1px 1px 2px 1px rgba(0,0,0,0.1) `,
            }}>
            <img src={activeMenu === 0 ? IcBerandaFarmasiSelected : IcBerandaFarmasi} alt='IcBerandaFarmasi' width={18} height={18} style={{ marginTop: '8px' }} />
            <Typography sx={{ color: activeMenu === 0 ? 'rgba(255, 255, 255, 1)' : 'rgba(48, 134, 185, 1)', mt: '3px', fontSize: 6.5, fontWeight: 700, textTransform: 'none', textAlign: 'center' }}>
              Beranda
              <br />
              Farmasi
            </Typography>
            <Typography sx={{ color: activeMenu === 0 ? 'rgba(255, 255, 255, 1)' : 'rgba(48, 134, 185, 1)', mt: '5px', fontSize: 4.5, fontWeight: 300, textTransform: 'none', textAlign: 'center', lineHeight: 1.2 }}>
              Laman utama <br /> layanan informasi obat <br /> UPT Puskesmas Pamulang
            </Typography>
          </Grid>
          <Grid
            component={Link}
            to='/direktori-obat'
            onClick={() => selectMenu(1)}
            item
            direction='column'
            sx={{
              display: 'flex',
              alignItems: 'center',
              pl: '3px',
              pr: '3px',
              textDecoration: 'none',
              backgroundColor: activeMenu === 1 ? 'rgba(48, 134, 185, 1)' : 'rgba(255, 255, 255, 1)',
              width: 57,
              height: 74,
              borderRadius: '3px',
              boxShadow: `-1px 1px 2px 1px rgba(0,0,0,0.1) `,
            }}>
            <img src={activeMenu === 1 ? IcDirInformasiObatSelected : IcDirInformasiObat} alt='IcDirInformasiObat' width={18} height={18} style={{ marginTop: '8px' }} />
            <Typography sx={{ color: activeMenu === 1 ? 'rgba(255, 255, 255, 1)' : 'rgba(48, 134, 185, 1)', mt: '3px', fontSize: 6.5, fontWeight: 700, textTransform: 'none', textAlign: 'center' }}>
              Direktori &<br />
              Informasi Obat
            </Typography>
            <Typography sx={{ color: activeMenu === 1 ? 'rgba(255, 255, 255, 1)' : 'rgba(48, 134, 185, 1)', mt: '5px', fontSize: 4.5, fontWeight: 300, textTransform: 'none', textAlign: 'center', lineHeight: 1.2 }}>
              Baca dan ketahui
              <br />
              mengenai obat yang Anda
              <br />
              gunakan
            </Typography>
          </Grid>
          <Grid
            item
            direction='column'
            sx={{ display: 'flex', alignItems: 'center', pl: '3px', pr: '3px', textDecoration: 'none', backgroundColor: 'rgba(255, 255, 255, 1)', width: 57, height: 74, borderRadius: '3px', boxShadow: `-1px 1px 2px 1px rgba(0,0,0,0.1) ` }}>
            <img src={IcArtikelObat} alt='IcArtikelObat' width={18} height={18} style={{ marginTop: '8px' }} />
            <Typography sx={{ color: 'rgba(48, 134, 185, 1)', mt: '3px', fontSize: 6.5, fontWeight: 700, textTransform: 'none', textAlign: 'center' }}>
              Artikel
              <br />
              Obat
            </Typography>
            <Typography sx={{ color: 'rgba(48, 134, 185, 1)', mt: '5px', fontSize: 4.5, fontWeight: 300, textTransform: 'none', textAlign: 'center', lineHeight: 1.2 }}>
              Baca dan ketahui
              <br />
              artikel tentang obat
            </Typography>
          </Grid>
          <Grid
            component={Link}
            to='/faq'
            onClick={() => selectMenu(3)}
            item
            direction='column'
            sx={{
              display: 'flex',
              alignItems: 'center',
              pl: '3px',
              pr: '3px',
              textDecoration: 'none',
              backgroundColor: activeMenu === 3 ? 'rgba(48, 134, 185, 1)' : 'rgba(255, 255, 255, 1)',
              width: 57,
              height: 74,
              borderRadius: '3px',
              boxShadow: `-1px 1px 2px 1px rgba(0,0,0,0.1) `,
            }}>
            <img src={activeMenu === 3 ? IcFAQSelected : IcFAQ} alt='IcFAQ' width={18} height={18} style={{ marginTop: '8px' }} />
            <Typography sx={{ color: activeMenu === 3 ? 'rgba(255, 255, 255, 1)' : 'rgba(48, 134, 185, 1)', mt: '3px', fontSize: 6.5, fontWeight: 700, textTransform: 'none', textAlign: 'center' }}>F.A.Q</Typography>
            <Typography sx={{ color: activeMenu === 3 ? 'rgba(255, 255, 255, 1)' : 'rgba(48, 134, 185, 1)', mt: '13px', fontSize: 4.5, fontWeight: 300, textTransform: 'none', textAlign: 'center', lineHeight: 1.2 }}>
              Baca dan ketahui
              <br />
              hal yang sering ditanyakan
              <br />
              mengenai obat
            </Typography>
          </Grid>
          <Grid
            component={Link}
            to='/tanya-apoteker'
            onClick={() => selectMenu(4)}
            item
            direction='column'
            sx={{
              display: 'flex',
              alignItems: 'center',
              pl: '2px',
              pr: '2px',
              textDecoration: 'none',
              backgroundColor: activeMenu === 4 ? 'rgba(48, 134, 185, 1)' : 'rgba(255, 255, 255, 1)',
              width: 57,
              height: 74,
              borderRadius: '3px',
              boxShadow: `-1px 1px 2px 1px rgba(0,0,0,0.1) `,
            }}>
            <img src={activeMenu === 4 ? IcTanyaApotekerSelected : IcTanyaApoteker} alt='IcTanyaApoteker' width={18} height={18} style={{ marginTop: '8px' }} />
            <Typography sx={{ color: activeMenu === 4 ? 'rgba(255, 255, 255, 1)' : 'rgba(48, 134, 185, 1)', mt: '3px', fontSize: 6.5, fontWeight: 700, textTransform: 'none', textAlign: 'center' }}>
              Tanya
              <br />
              Apoteker
            </Typography>
            <Typography sx={{ color: activeMenu === 4 ? 'rgba(255, 255, 255, 1)' : 'rgba(48, 134, 185, 1)', mt: '5px', fontSize: 4.5, fontWeight: 300, textTransform: 'none', textAlign: 'center', lineHeight: 1.2 }}>
              Ada pertanyaan seputar obat <br />
              yang belum terjawab
              <br />
              Tanya kami disini
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Header;
