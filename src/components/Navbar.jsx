import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import Logo from "../assets/images/logo-img.jpg"

const Navbar = () => {
     return (
          <Stack direction="row" justifyContent="space-around" alignItems="center" sx={{ gap: { sm: "122px", xs: "40px" }, mt: { sm: "32px", xs: "20px" }, justifyContent: "none" }} px="20px">
               <Link to="/">
                    < img src={Logo} alt="logo" style={{ width: "70px", height: "100px", margin: "0 20px", color: "#fff", background: "#fff", borderRadius: "50%" }} />
               </Link >
               <Stack direction="row" gap="40px" fontSize="24px" alignItems="flex-end">
                    <Link to="/" style={{ textDecoration: "none", color: "#fff", borderBottom: "3px solid #FF2625" }}>Home</Link>
                    <a href="#exercises" style={{ textDecoration: 'none', color: '#fff' }}>Exercises</a>
               </Stack>
          </Stack >
     );
}

export default Navbar;