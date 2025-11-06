import React from 'react';
import { Box, Grid, Typography } from '@mui/material';

export default function Dashboard(){
  const stats = [
    {label:'Open Jobs', value:24},
    {label:'Applications', value:328},
    {label:'Interviews', value:16},
    {label:'Hires', value:4}
  ];
  return (
    <Box>
      <Typography variant="h5" gutterBottom className='header-title'>Overview</Typography>
      <Grid container spacing={2}>
        {stats.map(s=>(
          <Grid item xs={12} sm={6} md={3} key={s.label}>
            <div className='glass job-card'>
              <div style={{fontSize:12, color:'#B8A1FF'}}>{s.label}</div>
              <div style={{fontSize:28, fontWeight:700}}>{s.value}</div>
            </div>
          </Grid>
        ))}
      </Grid>
      <Box mt={3}>
        <div className='glass' style={{padding:20}}>
          <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
            <div style={{fontWeight:700}}>Recent Activity</div>
            <button className='neon-btn'>Add Job</button>
          </div>
          <div style={{marginTop:12}}>Placeholder for charts and activity feed.</div>
        </div>
      </Box>
    </Box>
  );
}
