import React from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';

export default function Login(){
  return (
    <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', height:'70vh'}}>
      <div className='glass' style={{width:420, padding:28}}>
        <Typography variant="h6" sx={{fontWeight:700, marginBottom:1}}>Welcome back</Typography>
        <Typography variant="body2" color="text.secondary" sx={{marginBottom:2}}>Sign in to continue to Uniplace Pro</Typography>
        <TextField fullWidth label="Email" variant="filled" sx={{mb:2, background:'rgba(255,255,255,0.02)'}} />
        <TextField fullWidth label="Password" type="password" variant="filled" sx={{mb:2, background:'rgba(255,255,255,0.02)'}} />
        <Button fullWidth className='neon-btn'>Login</Button>
      </div>
    </Box>
  );
}
