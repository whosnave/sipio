import React from 'react'
import { Container, Grid, Typography, Box } from '@mui/material'
import ImgDagusibu from '../assets/images/berandaContent3/ImgDagusibu.svg';
import ImgTanyaLimao from '../assets/images/berandaContent3/ImgTanyaLimao.svg';
import ImgGunakanObat from '../assets/images/berandaContent3/ImgGunakanObat.svg';


function BerandaContent3() {
    return (
        <>
        <div style={{ width: 'auto', height:'419px', backgroundColor:'rgba(246, 244, 242, 1)'}}>
            <Container>
            <Typography justify='center' sx={{ fontSize:20, textAlign: 'center', lineHeight:1.3, pt:'18px', pb:'34px', fontWeight:700,color: 'rgba(31, 161, 158, 1)'}}>Baca Poster Berikut Yuk<br/>Agar kita Semakin Mengenal Obat</Typography>
            <Grid container>
                <Grid item xs={7}>
                <img src={ImgDagusibu} width='auto' height='279' alt='ImgDagusibu' />
                </Grid>
                <Grid item xs={5} >
                <img src={ImgTanyaLimao} width='auto' height='130' alt='ImgDagusibu' />
                <Box sx={{mt:'15px'}}/>
                <img src={ImgGunakanObat} width='auto' height='130' alt='ImgDagusibu' />
                </Grid>
            </Grid>
            </Container>
        </div>
            
        </>
    )
}

export default BerandaContent3
