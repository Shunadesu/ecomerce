import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../features/user/userSlice';

export default function Login({ switchToRegister }) {
  const dispatch = useDispatch();
  const [form, setForm] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(form));
    setForm({ email: '', password: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold">Login</h2>

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
        className="bg-blue-600 px-4 py-2 text-white rounded w-full"
      >
        Login
      </button>

      <p
        className="text-sm text-center text-blue-500 cursor-pointer"
        onClick={switchToRegister}
      >
        Don't have an account? Register
      </p>
    </form>
  );
}
