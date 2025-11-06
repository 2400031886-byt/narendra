import React from 'react';
export default function JobCard({job, onApply, role}){
  return (
    <div className='job-card'>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <div>
          <div style={{fontWeight:700}}>{job.title}</div>
          <div className='small-muted'>{job.description}</div>
        </div>
        <div style={{textAlign:'right'}}>
          <div className='badge-primary'>{job.salary || 'N/A'}</div>
          <div style={{height:6}}></div>
          {role === 'student' && <button className='btn btn-primary btn-sm' onClick={()=>onApply(job.id)}>Apply</button>}
        </div>
      </div>
    </div>
  );
}
