import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../features/user/userSlice';
import { useState } from 'react';

import Login from './Login'
import Register from './Register'

export default function AuthPage() {
  const dispatch = useDispatch();
  const { isLoggedIn, userInfo } = useSelector((state) => state.user);

  const [isRegistering, setIsRegistering] = useState(false);

  const switchToLogin = () => setIsRegistering(false);
  const switchToRegister = () => setIsRegistering(true);

  return (
    <div className="p-6 max-w-md mx-auto">
      {isLoggedIn ? (
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-2">
            Welcome, {userInfo.name}
          </h2>
          <button
            className="bg-red-500 px-4 py-2 text-white rounded"
            onClick={() => dispatch(logout())}
          >
            Logout
          </button>
        </div>
      ) : isRegistering ? (
        <Register switchToLogin={switchToLogin} />
      ) : (
        <Login switchToRegister={switchToRegister} />
      )}
    </div>
  );
}
