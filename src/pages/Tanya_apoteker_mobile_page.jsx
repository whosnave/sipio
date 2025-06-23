import React, { useEffect, useState } from 'react';
import { server } from '../services/axios';
import { Container, Typography, Box, TextField, RadioGroup, FormControlLabel, Radio, Button, Grid } from '@mui/material';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { format } from 'date-fns';
import idLocale from 'date-fns/locale/id';
import Swal from 'sweetalert2';
import MobileDatePicker from '@mui/lab/MobileDatePicker';

function Tanya_apoteker_mobile_page() {
  const [name, setName] = useState('');
  const [birthDate, setBirthDate] = useState(null);
  const [weight, setWeight] = useState('');
  const [phoneNum, setPhoneNum] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('Laki-laki');
  const [isPregnant, setIsPregnant] = useState(false);
  const [pregnancy, setPregnancy] = useState(1);
  const [isBreastFeed, setIsBreastFeed] = useState('Tidak');
  const [question, setQuestion] = useState('');

  const payload = {
    token: 'G9ywqFM8L7W1Wnmm4fY2vQhCoJkHVkTN4mjHq1AiCq8U2mBrxh4rel0HMcaB25C0HsMZD3',
    name: name,
    birthdate: format(new Date(birthDate), 'dd/MM/yyyy'),
    weight: ` ${weight} Kg`,
    phone: phoneNum,
    email: email,
    gender: gender,
    pregnancy: isPregnant ? `${pregnancy} bulan` : 'Tidak',
    isBreastFeeding: isBreastFeed,
    question: question,
  };

  const onSubmit = (e) => {
    e.preventDefault();
    postQuestion()
      .then((res) => {
        const { data } = res;
        if (data.message === 'success') {
          Swal.fire({
            icon: 'success',
            title: 'Pesan kamu telah terkirim!',
            text: 'Pesan kamu akan kami balas dalam waktu secepatnya. Mohon cek email kamu secara berkala untuk mengetahui respon dari kami.!',
          });
          resetField()
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ada yang salah! Pesan kamu gagal terkirim. Silahkan dicoba beberapa saat lagi.',
          });
          console.log(data);
        }
      })
      .catch((err) => console.log(err))

  };

  const resetField = () => {
    setName('');
    setBirthDate(null);
    setWeight('');
    setPhoneNum('');
    setEmail('');
    setGender('Laki-laki');
    setIsPregnant(false);
    setPregnancy(1);
    setIsBreastFeed('Tidak');
    setQuestion('');
  };

  const pingServer = () => {
    return server({
      url: `/`,
      method: 'get',
    });
  };

  const postQuestion = () => {
    return server({
      url: '/sendEmail',
      method: 'post',
      data: payload,
    });
  };

  useEffect(() => {
    pingServer()
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }, [isPregnant]);

  return (
    <>
      <div style={{ width: 'auto', height: 'auto', backgroundColor: 'rgba(31, 161, 158, 1)' }}>
        <Container>
          <Box sx={{ pt: '15px' }} />
          <Typography sx={{ fontSize: 20, fontWeight: 700, textAlign: 'center', color: 'rgba(255,255,255, 1)' }}>Tanya Apoteker</Typography>
          <Typography sx={{ fontSize: 14, fontWeight: 300, textAlign: 'center', color: 'rgba(0,0,0, 1)' }}>Ada hal yang masih kamu tanyakan mengenai obat?</Typography>
          <Typography sx={{ fontSize: 8, fontWeight: 300, textAlign: 'center', color: 'rgba(0,0,0, 1)' }}>disusun oleh Tim Farmasi Apotek UPT Puskesmas Pamulang</Typography>
          <Box sx={{ pt: '20px' }} />
          <form onSubmit={onSubmit}>
            <Box component={Grid} sx={{ display: 'flex', flexDirection: 'column', backgroundColor: 'white', borderRadius: 2, px: '10px', py: '10px' }}>
              <Grid container item direction={'row'} sx={{ justifyContent: 'center', alignItems: 'center' }}>
                <Grid item xs={3}>
                  <Typography sx={{ fontSize: 11, fontWeight: 400, color: 'rgba(0,0,0, 1)' }}>Nama Lengkap</Typography>
                </Grid>
                <Grid item xs={9}>
                  <TextField required autoFocus size='small' name='name' value={name} id='name' onChange={(e) => setName(e.target.value)} label='isi nama lengkap' variant='outlined' sx={{ width: '100%' }} />
                </Grid>
              </Grid>
              <Box sx={{ pt: '15px' }} />
              <Grid container item direction={'row'} sx={{ justifyContent: 'center', alignItems: 'center' }}>
                <Grid item xs={3}>
                  <Typography sx={{ fontSize: 11, fontWeight: 400, color: 'rgba(0,0,0, 1)' }}>Tanggal Lahir</Typography>
                </Grid>
                <Grid item xs={9}>
                  <LocalizationProvider dateAdapter={AdapterDateFns} locale={idLocale}>
                    <MobileDatePicker
                      mask='__/__/____'
                      required
                      disableFuture
                      value={birthDate}
                      onChange={(newValue) => {
                        setBirthDate(newValue);
                      }}
                      renderInput={(params) => <TextField {...params} size='small'/>}
                    />
                  </LocalizationProvider>
                </Grid>
              </Grid>
              <Box sx={{ pt: '15px' }} />
              <Grid container item direction={'row'} sx={{ justifyContent: 'center', alignItems: 'center' }}>
                <Grid item xs={3}>
                  <Typography sx={{ fontSize: 11, fontWeight: 400, color: 'rgba(0,0,0, 1)' }}>Berat Badan</Typography>
                </Grid>
                <Grid item xs={9}>
                  <TextField required type='number' size='small' name='weight' value={weight} id='weight' onChange={(e) => setWeight(e.target.value)} label='isi berat badan (Kg)' variant='outlined' sx={{ width: 'auto' }} />
                </Grid>
              </Grid>
              <Box sx={{ pt: '15px' }} />
              <Grid container item direction={'row'} sx={{ justifyContent: 'center', alignItems: 'center' }}>
                <Grid item xs={3}>
                  <Typography sx={{ fontSize: 11, fontWeight: 400, color: 'rgba(0,0,0, 1)' }}>No. Telepon/Hp</Typography>
                </Grid>
                <Grid item xs={9}>
                  <TextField
                    required
                    size='small'
                    type='number'
                    value={phoneNum}
                    id='phoneNum'
                    onChange={(e) => setPhoneNum(e.target.value)}
                    label='No. Telepon/Hp'
                    variant='outlined'
                    sx={{ width: 'auto' }}
                  />
                </Grid>
              </Grid>
              <Box sx={{ pt: '15px' }} />
              <Grid container item direction={'row'} sx={{ justifyContent: 'center', alignItems: 'center' }}>
                <Grid item xs={3}>
                  <Typography sx={{ fontSize: 11, fontWeight: 400, color: 'rgba(0,0,0, 1)' }}>Email</Typography>
                </Grid>
                <Grid item xs={9}>
                  <TextField size='small' type='email' required value={email} id='email' onChange={(e) => setEmail(e.target.value)} label='email' variant='outlined' sx={{ width: 'auto' }} />
                </Grid>
              </Grid>
              <Box sx={{ pt: '15px' }} />
              <Grid container item direction={'row'} sx={{ justifyContent: 'center', alignItems: 'center' }}>
                <Grid item xs={3}>
                  <Typography sx={{ fontSize: 11, fontWeight: 400, color: 'rgba(0,0,0, 1)' }}>Jenis Kelamin</Typography>
                </Grid>
                <Grid item xs={9}>
                  <RadioGroup
                  size='small'
                    required
                    row
                    aria-label='gender'
                    name='gender'
                    value={gender}
                    onChange={(e) => {
                      setGender(e.target.value);
                      if (e.target.value === 'Laki-laki') {
                        setIsPregnant(false);
                        setIsBreastFeed('Tidak');
                        setPregnancy(1)
                      }
                    }}>
                    <FormControlLabel value='Laki-laki' control={<Radio size='small' />} label='Laki-laki' />
                    <FormControlLabel value='Perempuan' control={<Radio size='small'/>} label='Perempuan' />
                  </RadioGroup>
                </Grid>
              </Grid>
              <Box sx={{ pt: '15px' }} />
              <Grid container item direction={'row'} sx={{ justifyContent: 'center', alignItems: 'center' }}>
                <Grid item xs={3}>
                  <Typography sx={{ fontSize: 11, fontWeight: 400, color: 'rgba(0,0,0, 1)' }}>Kehamilan</Typography>
                </Grid>
                <Grid item xs={9}>
                  <RadioGroup size='small' required value={isPregnant} onChange={(e) => {setIsPregnant(e.target.value)
                  
                  }} sx={{ alignItems: 'center' }} row aria-label='kehamilan' name='isPregnant'>
                    <FormControlLabel disabled={gender === 'Laki-laki'} value={false} control={<Radio  size='small'  />} label='Tidak' />
                    <FormControlLabel disabled={gender === 'Laki-laki'} value={true} control={<Radio  size='small'  />} label='Ya' />
                    <Typography sx={{ fontSize: 11, fontWeight: 400, color: 'rgba(0,0,0, 1)', alignItems: 'center', ml:'-10px' }}>dengan usia</Typography>
                    <TextField
                    size='small'
                      type='number'
                      InputProps={{ inputProps: { min: 1 } }}
                      disabled={ gender === 'Laki-laki' || isPregnant === false}
                      value={pregnancy}
                      onChange={(e) => setPregnancy(e.target.value)}
                      id='pregnancy'
                      label='bulan'
                      variant='outlined'
                      sx={{ width: 50, ml: '5px' }}
                    />
                  </RadioGroup>
                </Grid>
              </Grid>
              <Box sx={{ pt: '15px' }} />
              <Grid container item direction={'row'} sx={{ justifyContent: 'center', alignItems: 'center' }}>
                <Grid item xs={3}>
                  <Typography sx={{ fontSize: 11, fontWeight: 400, color: 'rgba(0,0,0, 1)' }}>Sedang menyusui</Typography>
                </Grid>
                <Grid item xs={9}>
                  <RadioGroup  size='small'  required value={isBreastFeed} onChange={(e) => setIsBreastFeed(e.target.value)} row aria-label='menyusui' name='menyusui'>
                    <FormControlLabel disabled={gender === 'Laki-laki'} value='Tidak' control={<Radio  size='small'   />} label='Tidak' />
                    <FormControlLabel disabled={gender === 'Laki-laki'} value='Ya' control={<Radio   size='small' />} label='Ya' />
                  </RadioGroup>
                </Grid>
              </Grid>
              <Box sx={{ pt: '15px' }} />
              <Grid container item direction={'row'} sx={{ justifyContent: 'center', alignItems: 'center' }}>
                <Grid item xs={3}>
                  <Typography sx={{ fontSize: 11, fontWeight: 400, color: 'rgba(0,0,0, 1)' }}>Pertanyaan</Typography>
                </Grid>
                <Grid item xs={9}>
                  <TextField        size='small' required value={question} onChange={(e) => setQuestion(e.target.value)} id='pertanyaan' label='Pertanyaan' multiline rows={4} sx={{ width:'100%' }} />
                </Grid>
              </Grid>
              <Box sx={{ pt: '10px' }} />
              <Grid container item direction={'row'} sx={{ justifyContent: 'center', alignItems: 'center' }}>
                <Grid item xs={3} />
                <Grid item xs={9}>
                  <Button type='submit'  size='small'  variant='contained' sx={{ width: 200, textTransform: 'none' }}>
                    Kirimkan Pertanyaan
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </form>
          <Box sx={{ pt: '30px' }} />
        </Container>
      </div>
    </>
  );
}

export default Tanya_apoteker_mobile_page;
