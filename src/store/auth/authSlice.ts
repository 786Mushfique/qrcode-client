// import { createSlice, isAnyOf, PayloadAction } from '@reduxjs/toolkit';

// import { authApi } from './authApi';

// import { IUser } from '../../types/User';
// import { IToken } from '../../types/Token';

// interface IAuthState {
//   user: IUser | Record<string, never>;
//   token: IToken | Record<string, never>;
//   isAuth: boolean;
// }

// const initialState: IAuthState = {
//   user: JSON.parse(localStorage.getItem('currentUser') || '{}'),
//   token: JSON.parse(localStorage.getItem('token') || '{}'),
//   isAuth: !!localStorage.getItem('currentUser'),
// };

// export const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {
//     setToken: (state, action: PayloadAction<IToken>) => {
//       localStorage.setItem('token', JSON.stringify(action.payload));
//       state.token = action.payload;
//     },
//     loggedOut: (state) => {
//       state.user = {};
//       state.token = {};
//       state.isAuth = false;

//       localStorage.removeItem('token');
//       localStorage.removeItem('currentUser');
//     },
//   },
//   extraReducers(builder) {
//     builder
//       .addMatcher(
//         isAnyOf(
//           authApi.endpoints.signIn.matchFulfilled,
//           authApi.endpoints.signUp.matchFulfilled,
//           authApi.endpoints.checkAuth.matchFulfilled,
//         ),
//         (state, action) => {
//           const { accessToken, user } = action.payload;

//           state.user = user;
//           state.token = accessToken;
//           state.isAuth = true;

//           localStorage.setItem('token', JSON.stringify(accessToken));
//           localStorage.setItem('currentUser', JSON.stringify(user));
//         },
//       )
//       .addMatcher(
//         isAnyOf(
//           authApi.endpoints.checkAuth.matchRejected,
//           authApi.endpoints.logout.matchFulfilled,
//         ),
//         (state) => {
//           state.user = {};
//           state.token = {};
//           state.isAuth = false;

//           localStorage.removeItem('token');
//           localStorage.removeItem('currentUser');
//         },
//       );
//   },
// });

// export const authReducer = authSlice.reducer;
// export const authAction = authSlice.actions;

import { createSlice, isAnyOf, PayloadAction } from '@reduxjs/toolkit';
import { authApi } from './authApi';
import { IUser } from '../../types/User';
import { IToken } from '../../types/Token';

interface IAuthState {
  user: IUser | Record<string, never>;
  token: IToken | Record<string, never>;
  isAuth: boolean;
}

// Helper function to safely parse JSON from localStorage
const safeParse = <T>(key: string): T | Record<string, never> => {
  try {
    const item = localStorage.getItem(key);
    return item ? (JSON.parse(item) as T) : {};
  } catch (error) {
    console.error(`Failed to parse JSON for key "${key}":`, error);
    localStorage.removeItem(key); // Remove corrupted data
    return {};
  }
};

const initialState: IAuthState = {
  user: safeParse<IUser>('currentUser'),
  token: safeParse<IToken>('token'),
  isAuth: !!localStorage.getItem('currentUser'),
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<IToken>) => {
      try {
        localStorage.setItem('token', JSON.stringify(action.payload));
        state.token = action.payload;
      } catch (error) {
        console.error('Failed to store token:', error);
      }
    },
    loggedOut: (state) => {
      state.user = {};
      state.token = {};
      state.isAuth = false;

      localStorage.removeItem('token');
      localStorage.removeItem('currentUser');
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        isAnyOf(
          authApi.endpoints.signIn.matchFulfilled,
          authApi.endpoints.signUp.matchFulfilled,
          authApi.endpoints.checkAuth.matchFulfilled,
        ),
        (state, action) => {
          try {
            const { accessToken, user } = action.payload;

            state.user = user;
            state.token = accessToken;
            state.isAuth = true;

            localStorage.setItem('token', JSON.stringify(accessToken));
            localStorage.setItem('currentUser', JSON.stringify(user));
          } catch (error) {
            console.error('Failed to store user data:', error);
          }
        },
      )
      .addMatcher(
        isAnyOf(
          authApi.endpoints.checkAuth.matchRejected,
          authApi.endpoints.logout.matchFulfilled,
        ),
        (state) => {
          state.user = {};
          state.token = {};
          state.isAuth = false;

          localStorage.removeItem('token');
          localStorage.removeItem('currentUser');
        },
      );
  },
});

export const authReducer = authSlice.reducer;
export const authAction = authSlice.actions;
