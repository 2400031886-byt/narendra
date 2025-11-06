import React from 'react';
import { useAuth } from '../contexts/AuthContext';
export default function Topbar(){
  const { user } = useAuth();
  return (
    <div className='topbar'>
      <div>
        <h4 style={{margin:0}}>Welcome{user ? ', ' + user.name : ''}</h4>
        <div className='small-muted'>Good to see you — here's the placements overview</div>
      </div>
      <div className='controls'>
        <div className='small-muted1'> <button className='btn btn-light btn-sm' onClick={logout}>Profile</button></div>
        <div style={{width:12}}></div>
        <div style={{width:36,height:36,borderRadius:10,background:'#eef2ff',display:'flex',alignItems:'center',justifyContent:'center'}}>U</div>
      </div>
    </div>
  );
}
