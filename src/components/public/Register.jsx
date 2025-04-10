import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../features/user/userSlice';

export default function Register({ switchToLogin }) {
  const dispatch = useDispatch();
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(form));
    alert('Registered successfully!');
    setForm({ name: '', email: '', password: '' });
    switchToLogin();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-xl font-bold">Register</h2>

      <input
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
        required
        className="w-full px-3 py-2 border rounded"
      />

      <input
        name="email"
        placeholder="Email"
        type="email"
        value={form.email}
        onChange={handleChange}
        required
        className="w-full px-3 py-2 border rounded"
      />

      <input
        name="password"
        placeholder="Password"
        type="password"
        value={form.password}
        onChange={handleChange}
        required
        className="w-full px-3 py-2 border rounded"
      />

      <button
        type="submit"
        className="bg-green-600 px-4 py-2 text-white rounded w-full"
      >
        Register
      </button>

      <p
        className="text-sm text-center cursor-pointer text-blue-500"
        onClick={switchToLogin}
      >
        Already have an account? Login
      </p>
    </form>
  );
}
