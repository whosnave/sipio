import React from 'react'
import { Container, Grid, Typography, Box } from '@mui/material'
import ImgDagusibu from '../assets/images/berandaContent3/ImgDagusibu.svg';
import ImgTanyaLimao from '../assets/images/berandaContent3/ImgTanyaLimao.svg';
import ImgGunakanObat from '../assets/images/berandaContent3/ImgGunakanObat.svg';


function BerandaContent3() {
    return (
        <>
        <div style={{ width: 'auto', height:'1305px', backgroundColor:'rgba(246, 244, 242, 1)'}}>
            <Container xl>
            <Typography justify='center' sx={{ fontSize:65, textAlign: 'center', lineHeight:1.3, pt:'53px', pb:'25px', fontWeight:700,color: 'rgba(31, 161, 158, 1)'}}>Baca Poster Berikut Yuk<br/>Agar kita Semakin Mengenal Obat</Typography>
            <Grid container xl>
                <Grid item xs={7}>
                <img src={ImgDagusibu} width='auto' height='962' alt='ImgDagusibu' />
                </Grid>
                <Grid item xs={5} >
                <Box sx={{mt:5}}/>
                <img src={ImgTanyaLimao} width='auto' height='448' alt='ImgDagusibu' />
                <Box sx={{mt:3}}/>
                <img src={ImgGunakanObat} width='auto' height='450' alt='ImgDagusibu' />
                </Grid>
            </Grid>
            </Container>
        </div>
            
        </>
    )
}

export default BerandaContent3
