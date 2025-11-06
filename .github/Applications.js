import React from 'react';
import { Box, Typography, Chip } from '@mui/material';

export default function Applications(){
  const apps = [
    {name:'Ravi Kumar', role:'Frontend Developer', status:'Pending'},
    {name:'Sneha R', role:'Product Designer', status:'Accepted'},
    {name:'Arjun', role:'Backend Engineer', status:'Rejected'}
  ];
  const statusColor = s => s==='Accepted' ? 'success' : s==='Rejected' ? 'error' : 'info';
  return (
    <Box>
      <Typography variant="h5" className='header-title' gutterBottom>Applications</Typography>
      <div style={{display:'grid', gap:12}}>
        {apps.map(a=>(
          <div className='glass' key={a.name} style={{display:'flex', justifyContent:'space-between', alignItems:'center', padding:12}}>
            <div>
              <div style={{fontWeight:700}}>{a.name}</div>
              <div style={{fontSize:13, color:'#B8A1FF'}}>{a.role}</div>
            </div>
            <Chip label={a.status} color={statusColor(a.status)} />
          </div>
        ))}
      </div>
    </Box>
  );
}
