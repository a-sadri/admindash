import { useState } from 'react';
import { Box, useMediaQuery } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Navbar from 'components/Navbar';

const index = () => {
  return <Box width='100%' height='100%'></Box>;
};

export default index;
