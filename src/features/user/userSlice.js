import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  userInfo: null,
  users: [], // [{ name, email, password }]
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    registerUser(state, action) {
      state.users.push(action.payload);
    },
    login(state, action) {
      const { email, password } = action.payload;
      const found = state.users.find(
        (user) => user.email === email && user.password === password
      );

      if (found) {
        state.isLoggedIn = true;
        state.userInfo = found;
      } else {
        alert('Invalid credentials');
      }
    },
    logout(state) {
      state.isLoggedIn = false;
      state.userInfo = null;
    },
  },
});

export const { registerUser, login, logout } = userSlice.actions;
export default userSlice.reducer;
