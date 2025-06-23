import React, { useState } from 'react';
import { Typography, Box } from '@mui/material';
import kategori_obat from '../data/kategori_obat';
import { Link, useLocation } from 'react-router-dom';

const ButtonGroup = ({ doSomeThing }) => {
  const location = useLocation();
  const basePath = location.pathname;

  const [clickedId, setClickedId] = useState(0);

  const handleClick = (event, id) => {
    setClickedId(id);
    // doSomeThing(event);
  };

  return (
    <>
      {kategori_obat.map((kategoriLabel, i) => (
        <React.Fragment key={i}>
          <Box
            name={kategoriLabel.name}
            component={Link}
            to={`${basePath}/${kategoriLabel.url}`}
            onClick={(event) => handleClick(event, i)}
            sx={{
              display: 'flex',
              textDecoration: 'none',
              borderTopLeftRadius: 20,
              borderBottomLeftRadius: 20,
              flexDirection: 'row',
              boxShadow:
                i === clickedId ? '0px 6px 4px 0px rgba(0, 0, 0, 0.25)' : null,
            }}
          >
            <Box
              sx={{
                display: 'flex',
                borderTopLeftRadius: 20,
                borderBottomLeftRadius: 20,
                width: 51,
                height: 51,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'white',
              }}
            >
              <img
                src={kategoriLabel.image}
                alt={kategoriLabel.name}
                width={31}
                height={31}
              />
            </Box>
            <Box
              sx={{
                width: i === clickedId ? 319 : 294,
                height: 51,
                background:
                  i === clickedId
                    ? 'linear-gradient(to right, #3086B9, #44CFCB)'
                    : 'linear-gradient(to right, #E7E7E7, #F6F4F2)',
              }}
            >
              <Typography
                sx={{
                  pl: '20px',
                  pt: '10px',
                  fontSize: 22,
                  fontWeight: i === clickedId ? 600 : 400,
                  color:
                    i === clickedId
                      ? 'rgba(255,255,255, 1)'
                      : 'rgba(80,80,80,1)',
                  textAlign: 'start',
                  textTransform: 'none',
                }}
              >
                {kategoriLabel.name}
              </Typography>
            </Box>
          </Box>
          <Box sx={{ pt: '10px' }} />
        </React.Fragment>
      ))}
    </>
  );
};

export default ButtonGroup;
