import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function Login() {
  const { login } = useAuth();
  const nav = useNavigate();
  const [form, setForm] = useState({ name: '', email: '', role: 'student' });

  function onChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  // Email validation function
  function isValidEmail(email) {
    // Basic email regex
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  function submit(e) {
    e.preventDefault();

    // Check if email is valid
    if (!isValidEmail(form.email)) {
      alert('Please enter a valid email address.');
      return;
    }

    const user = {
      id: 'u' + Date.now(),
      name: form.name || form.email.split('@')[0],
      email: form.email,
      role: form.role
    };

    login(user);
    nav('/');
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <div style={{ width: 460 }} className="card-elev p-4">
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 12,
              background: '#eef2ff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 700
            }}
          >
            U
          </div>
          <div>
            <h4 style={{ margin: 0 }}>Uni-Place Connect</h4>
            <div className="small-muted">Sign in to continue</div>
          </div>
        </div>
        <form onSubmit={submit} className="mt-3">
          <div className="mb-2">
            <input
              name="name"
              className="form-control"
              placeholder="Full name (demo)"
              value={form.name}
              onChange={onChange}
            />
          </div>
          <div className="mb-2">
            <input
              name="email"
              type="email"
              className="form-control"
              placeholder="Email"
              value={form.email}
              onChange={onChange}
              required
            />
          </div>
          <div className="mb-2 d-flex gap-2">
            <select name="role" value={form.role} onChange={onChange} className="form-select">
              <option value="student">Student</option>
              <option value="company">Company</option>
              <option value="placement_officer">Placement Officer</option>
            </select>
            <button className="btn btn-primary">Sign In</button>
          </div>
          <div className="small-muted">This demo saves data locally.</div>
        </form>
      </div>
    </div>
  );
}
