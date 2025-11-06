import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { FiBriefcase, FiUser, FiHome, FiFileText } from 'react-icons/fi';

export default function Sidebar(){
  const { user, logout } = useAuth();
  return (
    <aside className='sidebar'>
      <div className='logo'>
        <div className='logo-circle'>U</div>
        <div>
          <div style={{fontWeight:700}}>Uni-Place</div>
          <div style={{fontSize:12,opacity:0.9}}>Placement Connect</div>
        </div>
      </div>
      <nav style={{display:'flex',flexDirection:'column',gap:6,marginTop:6}}>
        <NavLink to='/' className={({isActive})=> 'nav-link mat' + (isActive? ' active':'')} end> Dashboard</NavLink>
        <NavLink to='/jobs' className={({isActive})=> 'nav-link mat' + (isActive? ' active':'')}> Jobs</NavLink>
        <NavLink to='/applications' className={({isActive})=> 'nav-link mat' + (isActive? ' active':'')}> Applications</NavLink>
        {user?.role === 'placement_officer' && <NavLink to='/reports' className={({isActive})=> 'nav-link mat' + (isActive? ' active':'')}> Reports</NavLink>}
      </nav>
      <div style={{marginTop:'auto'}}>
        <div style={{fontSize:12,opacity:0.9}}>Signed in as</div>
        <div style={{fontWeight:700}}>{user?.name || 'Guest'}</div>
        <div className='footer-note'>Role: {user?.role || 'Guest'}</div>
        <div style={{marginTop:10}}><button className='btn btn-light btn-sm' onClick={logout}>Logout</button></div>
      </div>
    </aside>
  );
}
