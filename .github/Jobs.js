import React from 'react';
import { Box, Typography } from '@mui/material';

export default function Jobs(){
  const jobs = [
    {title:'Frontend Developer', company:'Acme Corp', location:'Remote'},
    {title:'Backend Engineer', company:'Beta LLC', location:'Bangalore'},
    {title:'Product Designer', company:'DesignCo', location:'Hyderabad'}
  ];
  return (
    <Box>
      <Typography variant="h5" className='header-title' gutterBottom>Jobs</Typography>
      <div className='card-grid'>
        {jobs.map(j=>(
          <div className='glass job-card' key={j.title}>
            <div style={{fontWeight:700}}>{j.title}</div>
            <div style={{fontSize:13, color:'#B8A1FF'}}>{j.company} — {j.location}</div>
            <div style={{marginTop:10}}>
              <button className='neon-btn'>View</button>
            </div>
          </div>
        ))}
      </div>
    </Box>
  );
}
