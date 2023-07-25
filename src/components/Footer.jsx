/* eslint-disable no-unused-vars */
import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/logo-img.jpg';

const Footer = () => (
     <Box mt="80px" bgcolor="linear-gradient(to right, #ee0979, #ff6a00)" style={{ border: "1px solid #fff" }}>
          <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
               <img src={Logo} alt="logo" style={{ width: '200px', height: '80px', backgroundColor: "#fff", borderRadius: "50%" }} />
          </Stack>
          <Typography variant="h4" sx={{ fontSize: { lg: '28px', xs: '20px' } }} mt="30px" textAlign="center" pb="20px" style={{ fontFamily: "fantasy" }}>Made with ❤️ by devEmma</Typography>
     </Box>
);

export default Footer;


