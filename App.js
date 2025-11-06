import React, {useState} from 'react';
import { ThemeProvider, createTheme, CssBaseline, Box } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import Topbar from './workflows/Topbar';
import Sidebar from './workflows/Sidebar';
import Dashboard from './workflows/Dashboard';
import Jobs from './workflows/Jobs';
import Applications from './workflows/Applications';
import Login from './workflows/Login';

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: { default: '#0E0E10', paper: '#121218' },
    primary: { main: '#7A2EFF' },
    secondary: { main: '#00BFFF' },
    text: { primary: '#E5E5E5' }
  },
  typography: { fontFamily: 'Inter, Poppins, Arial' }
});

export default function App(){
  const [open, setOpen] = useState(true);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box className='app-shell'>
        <Sidebar open={open} />
        <Box sx={{flex:1}}>
          <Topbar onToggleSidebar={()=>setOpen(!open)} />
          <Box className='main-content'>
            <Routes>
              <Route path='/' element={<Dashboard/>} />
              <Route path='/jobs' element={<Jobs/>} />
              <Route path='/applications' element={<Applications/>} />
              <Route path='/login' element={<Login/>} />
            </Routes>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
