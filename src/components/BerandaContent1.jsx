import React from "react";
import { Container, Divider, Grid, Typography } from "@mui/material";
import BgBerandaContent1 from "../assets/images/berandaContent1/BgBerandaContent1.png";
import { Box } from "@mui/system";

function BerandaContent1() {
  return (
    <>
      <div
        style={{
          position: "relative",
          backgroundColor: "#4dbdc9",
          width: "100%",
          minHeight: "750px", // agar warna teal selalu penuh
          overflow: "hidden", // untuk gambar yang meluber
        }}
      >
        <img
          src={BgBerandaContent1} // ini gambar jam kamu
          alt="Jam"
          style={{
            position: "absolute",
            left: -80,
            top: 150,
            height: "85%",
            zIndex: 0,
          }}
        />
        <div style={{ marginLeft: "150px" }}>
          <Container xl>
            <Typography
              sx={{
                color: " rgba(255, 255, 255, 1)",
                fontSize: 65,
                fontWeight: 700,
                textAlign: "end",
                pt: "72px",
                mb: "39px",
              }}
            >
              Kenali Waktu Penggunaan Obat
            </Typography>
            <Grid
              container
              direction="row"
              sx={{
                display: "flex",
                width: "auto",
                justifyContent: "flex-end",
              }}
            >
              <Grid item>
                <Typography
                  sx={{
                    color: " rgba(255, 255, 255, 1)",
                    fontSize: 40,
                    fontWeight: 600,
                    backgroundColor: "rgba(34, 72, 112, 1)",
                    px: "5px",
                    mb: "45px",
                    borderRadius: "8px",
                  }}
                >
                  Beyond Use Date (BUD)
                </Typography>
                <Typography
                  sx={{
                    color: " rgba(255, 255, 255, 1)",
                    fontSize: 20,
                    fontWeight: 700,
                  }}
                >
                  Definisi
                </Typography>
                <Typography
                  sx={{
                    color: " rgba(255, 255, 255, 1)",
                    fontSize: 20,
                    fontWeight: 400,
                    lineHeight: 1.3,
                  }}
                >
                  Batas waktu penggunaan produk obat setelah <br />
                  diracik/disiapkan atau setelah kemasan
                  <br />
                  primernya dibuka/dirusak (ampul, vial, blister,
                  <br />
                  dll yang bersentuhan langsung dengan obat).
                </Typography>
                <Typography>
                  <br />
                </Typography>
                <Typography
                  sx={{
                    color: " rgba(255, 255, 255, 1)",
                    fontSize: 20,
                    fontWeight: 700,
                  }}
                >
                  Kegunaan
                </Typography>
                <Typography
                  sx={{
                    color: " rgba(255, 255, 255, 1)",
                    fontSize: 20,
                    fontWeight: 400,
                    lineHeight: 1,
                  }}
                >
                  Menentukan batasan waktu stabil suatu obat.
                </Typography>
              </Grid>
              <Grid item>
                <Divider
                  sx={{
                    height: 329,
                    m: 1,
                    ml: "10px",
                    mr: "10px",
                    color: "rgba(255, 255, 255, 1)",
                  }}
                  orientation="vertical"
                />
              </Grid>
              <Grid item>
                <Typography
                  sx={{
                    color: " rgba(255, 255, 255, 1)",
                    fontSize: 40,
                    fontWeight: 600,
                    backgroundColor: "rgba(34, 72, 112, 1)",
                    px: "5px",
                    mb: "45px",
                    borderRadius: "8px",
                  }}
                >
                  Expired Date (ED)
                </Typography>
                <Typography
                  sx={{
                    color: " rgba(255, 255, 255, 1)",
                    fontSize: 20,
                    fontWeight: 700,
                  }}
                >
                  Definisi
                </Typography>
                <Typography
                  sx={{
                    color: " rgba(255, 255, 255, 1)",
                    fontSize: 20,
                    fontWeight: 400,
                    lineHeight: 1.3,
                  }}
                >
                  Tanggal terakhir di mana keefektifan
                  <br />
                  dan keamanan produk obat masih
                  <br />
                  terjamin untuk dikonsumsi atau <br />
                  digunakan oleh konsumen.
                </Typography>
                <Typography>
                  <br />
                </Typography>
                <Typography
                  sx={{
                    color: " rgba(255, 255, 255, 1)",
                    fontSize: 20,
                    fontWeight: 700,
                    lineHeight: 1.3,
                  }}
                >
                  Kegunaan
                </Typography>
                <Typography
                  sx={{
                    color: " rgba(255, 255, 255, 1)",
                    fontSize: 20,
                    fontWeight: 400,
                    lineHeight: 1.3,
                  }}
                >
                  Menentukan batasan waktu stabil <br />
                  suatu obat.
                </Typography>
              </Grid>
              <Box sx={{ mr: "85px", width: "762px" }}>
                <Typography
                  sx={{
                    color: " rgba(34, 72, 112, 1)",
                    fontSize: 22,
                    fontWeight: 400,
                    mt: "50px",
                    lineHeight: 1.3,
                  }}
                >
                  Waktu BUD bisa sama atau lebih pendek dibandingkan ED. Karena
                  inilah penting <br /> untuk tenaga kesehatan khususnya{" "}
                  <Box display="inline" fontWeight="700">
                    Apoteker untuk mengetahui ketentuan dan mencantumkan pada
                    kemasan obat.
                  </Box>
                </Typography>
              </Box>
            </Grid>
          </Container>
        </div>
      </div>
    </>
  );
}

export default BerandaContent1;
