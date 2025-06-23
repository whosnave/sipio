import React, { useState } from "react";
import { Container, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
// import { Divider, IconButton, InputBase, Paper } from '@mui/material';
// import SearchIcon from '@mui/icons-material/Search';
import GambarHeaderKanan from "../assets/images/header/GambarHeaderKanan.png";
import logoPuskemasPamulang from "../assets/images/header/LogoPuskesmasPamulang2.png";
import BgHeader from "../assets/images/header/BgHeader.png";
import BtBerandaFarmasi from "../assets/images/header/mainButton/BerandaFarmasi/BtBerandaFarmasi.svg";
import IcBerandaFarmasi from "../assets/images/header/mainButton/BerandaFarmasi/IcBerandaFarmasi.svg";
import BtBerandaFarmasiSelected from "../assets/images/header/mainButton/BerandaFarmasi/BtBerandaFarmasiSelected.svg";
import IcBerandaFarmasiSelected from "../assets/images/header/mainButton/BerandaFarmasi/IcBerandaFarmasiSelected.svg";
import BtDirInformasiObat from "../assets/images/header/mainButton/DirInformasiObat/BtDirInformasiObat.svg";
import BtDirInformasiObatSelected from "../assets/images/header/mainButton/DirInformasiObat/BtDirInformasiObatSelected.svg";
import IcDirInformasiObat from "../assets/images/header/mainButton/DirInformasiObat/IcDirInformasiObat.svg";
import IcDirInformasiObatSelected from "../assets/images/header/mainButton/DirInformasiObat/IcDirInformasiObatSelected.svg";
import BtArtikelObat from "../assets/images/header/mainButton/ArtikelObat/BtArtikelObat.svg";
import IcArtikelObat from "../assets/images/header/mainButton/ArtikelObat/IcArtikelObat.svg";
import BtFAQ from "../assets/images/header/mainButton/FAQ/BtFAQ.svg";
import BtFAQSelected from "../assets/images/header/mainButton/FAQ/BtFAQSelected.svg";
import IcFAQ from "../assets/images/header/mainButton/FAQ/IcFAQ.svg";
import IcFAQSelected from "../assets/images/header/mainButton/FAQ/IcFAQSelected.svg";
import BtTanyaApoteker from "../assets/images/header/mainButton/TanyaApoteker/BtTanyaApoteker.svg";
import BtTanyaApotekerSelected from "../assets/images/header/mainButton/TanyaApoteker/BtTanyaApotekerSelected.svg";
import IcTanyaApoteker from "../assets/images/header/mainButton/TanyaApoteker/IcTanyaApoteker.svg";
import IcTanyaApotekerSelected from "../assets/images/header/mainButton/TanyaApoteker/IcTanyaApotekerSelected.svg";

function Header() {
  const [activeMenu, setActiveMenu] = useState(0);

  const selectMenu = (no) => {
    setActiveMenu(no);
  };

  return (
    <>
      {/* <div style={{ width: '100%', height: , backgroundImage: `url(${BgHeader})`, backgroundSize: 'cover', backgroundColor: 'rgba(255,255,255,0.85)', backgroundBlendMode: 'overlay' }}> */}
      <div
        style={{
          width: "100%",
          height: "auto",
          backgroundImage: `url(${BgHeader})`,
          backgroundSize: "cover",
          backgroundColor: "rgba(255,255,255,0.85)",
          backgroundBlendMode: "overlay",
        }}
      >
        <Container>
          <Grid container sx={{ mb: "32px", pt: "36px", alignItems: "center" }}>
            <Grid item xs={6}>
              <img
                src={logoPuskemasPamulang}
                width="auto"
                height="80"
                alt="Logo Puskesmas"
              />
            </Grid>
            <Grid item xs={6}>
              {/* <Stack direction='row' spacing={1}>
                <Button disabled>
                  <Typography sx={{ color: 'rgba(0, 0, 0, 0.3)', fontSize: 22, fontWeight: 400, textTransform: 'none' }}>Beranda</Typography>
                </Button>
                <Button disabled>
                  <Typography sx={{ color: 'rgba(0, 0, 0, 0.3)', fontSize: 22, fontWeight: 400, textTransform: 'none' }}>Profil</Typography>
                </Button>
                <Button href='/'>
                  <Typography sx={{ color: 'rgba(31, 161, 158, 1)', fontSize: 22, fontWeight: 700, textTransform: 'none' }}>Layanan</Typography>
                </Button>
                <Button disabled>
                  <Typography sx={{ color: 'rgba(0, 0, 0, 0.3)', fontSize: 22, fontWeight: 400, textTransform: 'none' }}>Berita</Typography>
                </Button>
                <Button disabled>
                  <Typography sx={{ color: 'rgba(0, 0, 0, 0.3)', fontSize: 22, fontWeight: 400, textTransform: 'none' }}>Kegiatan</Typography>
                </Button>
                <Button disabled>
                  <Typography sx={{ color: 'rgba(0, 0, 0, 0.3)', fontSize: 22, fontWeight: 400, textTransform: 'none' }}>Kontak</Typography>
                </Button>
              </Stack> */}
            </Grid>
          </Grid>
          <Grid container direction={"row"}>
            <Grid item xs={6}>
              <Typography
                sx={{
                  color: "rgba(31, 161, 158, 1)",
                  fontSize: "4rem",
                  fontWeight: 700,
                  lineHeight: 1.4,
                }}
              >
                Pelayanan <br></br> Informasi Obat
              </Typography>
              <Typography
                sx={{
                  color: " rgba(0, 0, 0, 1)",
                  fontSize: 20,
                  fontWeight: 700,
                  lineHeight: 1.5,
                }}
              >
                <br></br>Selamat datang di website Pelayanan Informasi Obat UPT{" "}
                <br></br>
                Puskesmas Pamulang!
              </Typography>
              <Typography
                sx={{
                  color: " rgba(0, 0, 0, 1)",
                  fontSize: 20,
                  fontWeight: 400,
                  lineHeight: 1.5,
                  mb: "40px",
                }}
              >
                <br></br>Anda dapat mencari informasi terkait obat yang
                diberikan di <br /> UPT Puskesmas Pamulang di situs ini yang
                disusun oleh Tim <br /> Farmasi Apotek UPT Puskesmas Pamulang.
                Layanan ini <br /> bertujuan untuk meningkatkan pengetahuan
                masyarakat dan <br /> tenaga kesehatan dalam penggunaan
                obat-obatan yang <br /> rasional.
              </Typography>
              {/* <Paper component='form' sx={{ p: '2px 10px', display: 'flex', alignItems: 'center', width: 551, height: 63, borderRadius: 25 }}>
                <InputBase disabled sx={{ ml: 1, flex: 1 }} placeholder='ketik nama obat disini untuk dapatkan informasi' inputProps={{ 'aria-label': 'search drugs name' }} />
                <Divider sx={{ height: 28, m: 0.5 }} orientation='vertical' />
                <IconButton color='primary' sx={{ p: '10px' }} aria-label='directions'>
                  <SearchIcon />
                </IconButton>
              </Paper> */}
            </Grid>
            <img
              src={GambarHeaderKanan}
              alt="Gambar Header Kanan"
              style={{
                width: "auto",
                height: "100%",
                marginLeft: "578px",
                marginTop: "-520px",
              }}
            />
          </Grid>
          <Grid container direction={"row"} sx={{ mt: "75px" }}>
            {/* === BERANDA FARMASI === */}
            <Grid
              component={Link}
              to="/"
              onClick={() => selectMenu(0)}
              item
              direction="column"
              sx={{
                textDecoration: "none",
                background:
                  activeMenu === 0
                    ? "linear-gradient(135deg, #1fa19e 0%, #3086B9 100%)"
                    : "#fff",
                borderBottomLeftRadius: "12px",
                borderBottomRightRadius: "12px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                width: 186,
                height: 186,
                mr: "10px",
                transition: "all 0.3s ease-in-out",
                borderTop: "3px solid teal",
              }}
            >
              <img
                src={
                  activeMenu === 0 ? IcBerandaFarmasiSelected : IcBerandaFarmasi
                }
                alt="IcBerandaFarmasi"
                width={53}
                height={53}
                style={{
                  marginTop: "26px",
                  marginLeft: "65px",
                  marginRight: "auto",
                }}
              />
              <Typography
                sx={{
                  color: activeMenu === 0 ? "#fff" : "rgba(48, 134, 185, 1)",
                  mt: "12px",
                  fontSize: 20,
                  fontWeight: 700,
                  textTransform: "none",
                  textAlign: "center",
                }}
              >
                Beranda Farmasi
              </Typography>
              <Typography
                sx={{
                  color:
                    activeMenu === 0
                      ? "rgba(255, 255, 255, 0.68)"
                      : "rgba(80, 80, 80, 1)",
                  mt: "6px",
                  fontSize: 13,
                  fontWeight: 100,
                  textTransform: "none",
                  textAlign: "center",
                  lineHeight: 1,
                }}
              >
                Laman utama <br /> layanan informasi obat <br /> UPT Puskesmas
                Pamulang
              </Typography>
            </Grid>

            {/* === DIREKTORI OBAT === */}
            <Grid
              component={Link}
              to="/direktori-obat/antivirus"
              onClick={() => selectMenu(1)}
              item
              direction="column"
              sx={{
                textDecoration: "none",
                background:
                  activeMenu === 1
                    ? "linear-gradient(135deg, #1fa19e 0%, #3086B9 100%)"
                    : "#fff",
                borderBottomLeftRadius: "12px",
                borderBottomRightRadius: "12px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                width: 268,
                height: 186,
                mr: "10px",
                transition: "all 0.3s ease-in-out",
                borderTop: "3px solid teal",
              }}
            >
              <img
                src={
                  activeMenu === 1
                    ? IcDirInformasiObatSelected
                    : IcDirInformasiObat
                }
                alt="IcDirInformasiObat"
                width={53}
                height={53}
                style={{
                  marginTop: "26px",
                  marginLeft: "105px",
                  marginRight: "auto",
                }}
              />
              <Typography
                sx={{
                  color: activeMenu === 1 ? "#fff" : "rgba(48, 134, 185, 1)",
                  mt: "12px",
                  fontSize: 20,
                  fontWeight: 700,
                  textTransform: "none",
                  textAlign: "center",
                }}
              >
                Direktori & Informasi Obat
              </Typography>
              <Typography
                sx={{
                  color: "rgba(0, 0, 0, 0.41)",
                  mt: "6px",
                  fontSize: 13,
                  fontWeight: 100,
                  textTransform: "none",
                  textAlign: "center",
                  lineHeight: 1,
                }}
              >
                Baca dan ketahui
                <br />
                deskripsi, cara minum, dan hal lainnya <br />
                mengenai obat yang anda gunakan
              </Typography>
            </Grid>

            {/* === ARTIKEL OBAT === */}
            <Grid
              onClick={() => selectMenu(2)}
              item
              direction="column"
              sx={{
                textDecoration: "none",
                background:
                  activeMenu === 2
                    ? "linear-gradient(135deg, #1fa19e 0%, #3086B9 100%)"
                    : "#fff",
                borderBottomLeftRadius: "12px",
                borderBottomRightRadius: "12px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                cursor: "pointer",
                width: 218,
                height: 186,
                mr: "10px",
                transition: "all 0.3s ease-in-out",
                borderTop: "3px solid teal",
              }}
            >
              <img
                src={IcArtikelObat}
                alt="IcArtikelObat"
                width={53}
                height={53}
                style={{
                  marginTop: "26px",
                  marginLeft: "80px",
                  marginRight: "auto",
                }}
              />
              <Typography
                sx={{
                  color: activeMenu === 2 ? "#fff" : "rgba(48, 134, 185, 1)",
                  mt: "12px",
                  fontSize: 20,
                  fontWeight: 700,
                  textTransform: "none",
                  cursor: "pointer",
                  textAlign: "center",
                }}
              >
                Artikel Obat
              </Typography>
              <Typography
                sx={{
                  color: "rgba(0, 0, 0, 0.41)",
                  mt: "6px",
                  cursor: "pointer",
                  fontSize: 13,
                  fontWeight: 300,
                  textTransform: "none",
                  textAlign: "center",
                  lineHeight: 1,
                }}
              >
                Baca dan ketahui
                <br />
                artikel tentang obat
              </Typography>
            </Grid>

            {/* === FAQ === */}
            <Grid
              component={Link}
              to="/faq"
              onClick={() => selectMenu(3)}
              item
              direction="column"
              sx={{
                textDecoration: "none",
                background:
                  activeMenu === 3
                    ? "linear-gradient(135deg, #1fa19e 0%, #3086B9 100%)"
                    : "#fff",
                borderBottomLeftRadius: "12px",
                borderBottomRightRadius: "12px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                width: 218,
                height: 186,
                mr: "10px",
                transition: "all 0.3s ease-in-out",
                borderTop: "3px solid teal",
              }}
            >
              <img
                src={activeMenu === 3 ? IcFAQSelected : IcFAQ}
                alt="IcFAQ"
                width={53}
                height={53}
                style={{
                  marginTop: "26px",
                  marginLeft: "90px",
                  marginRight: "auto",
                }}
              />
              <Typography
                sx={{
                  color: activeMenu === 3 ? "#fff" : "rgba(48, 134, 185, 1)",
                  mt: "12px",
                  fontSize: 20,
                  fontWeight: 700,
                  textTransform: "none",
                  textAlign: "center",
                }}
              >
                F.A.Q
              </Typography>
              <Typography
                sx={{
                  color: "rgba(0, 0, 0, 0.41)",
                  mt: "6px",
                  fontSize: 13,
                  fontWeight: 300,
                  textTransform: "none",
                  textAlign: "center",
                  lineHeight: 1,
                }}
              >
                Baca dan ketahui
                <br />
                hal yang sering ditanyakan
                <br />
                mengenai obat
              </Typography>
            </Grid>

            <Grid
              component={Link}
              to="/tanya-apoteker"
              onClick={() => selectMenu(4)}
              item
              direction="column"
              sx={{
                textDecoration: "none",
                background:
                  activeMenu === 4
                    ? "linear-gradient(135deg, #1fa19e 0%, #3086B9 100%)"
                    : "#fff",
                borderBottomLeftRadius: "12px",
                borderBottomRightRadius: "12px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                width: 210,
                height: 186,
                transition: "all 0.3s ease-in-out",
                borderTop: "3px solid teal",
              }}
            >
              <img
                src={
                  activeMenu === 4 ? IcTanyaApotekerSelected : IcTanyaApoteker
                }
                alt="IcTanyaApoteker"
                width={43}
                height={44}
                style={{
                  marginTop: "33px",
                  marginLeft: "80px",
                  marginRight: "auto",
                }}
              />
              <Typography
                sx={{
                  color: activeMenu === 4 ? "#fff" : "rgba(48, 134, 185, 1)",
                  mt: "12px",
                  fontSize: 20,
                  fontWeight: 700,
                  textTransform: "none",
                  textAlign: "center",
                }}
              >
                Tanya Apoteker
              </Typography>
              <Typography
                sx={{
                  color: "rgba(0, 0, 0, 0.41)",
                  mt: "6px",
                  fontSize: 13,
                  fontWeight: 300,
                  textTransform: "none",
                  textAlign: "center",
                  lineHeight: 1,
                }}
              >
                Ada pertanyaan seputar obat <br />
                yang belum terjawab
                <br />
                Tanya kami disini
              </Typography>
            </Grid>

            {/* LETAKAN KOMPONEN BARU DI SINI  */}

          </Grid>
        </Container>
      </div>
    </>
  );
}

export default Header;
