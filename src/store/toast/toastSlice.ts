import { createSlice, isAnyOf, PayloadAction } from '@reduxjs/toolkit';

import { IToastMessage } from '../../types/Toast';

import { authApi } from '../auth/authApi';
import { codeApi } from '../code/codeApi';

const initialState = {
  message: [] as IToastMessage[],
};

export const toastSlice = createSlice({
  name: 'toast',
  initialState,
  reducers: {
    resetMessage: (state) => {
      state.message = initialState.message;
    },
    addToast: (state, action: PayloadAction<IToastMessage>) => {
      state.message.push(action.payload);
    },
    deleteToast: (state, action: PayloadAction<number>) => {
      state.message = state.message.filter(
        (element) => element.id !== action.payload,
      );
    },
  },
  extraReducers(builder) {
    builder
      .addMatcher(codeApi.endpoints.createCode.matchFulfilled, (state) => {
        state.message.push({
          id: Date.now(),
          type: 'success',
          text: 'QR code successfully created ',
        });
      })
      .addMatcher(codeApi.endpoints.deleteCode.matchFulfilled, (state) => {
        state.message.push({
          id: Date.now(),
          type: 'success',
          text: 'QR code successfully deleted ',
        });
      })
      .addMatcher(
        isAnyOf(
          codeApi.endpoints.deleteCode.matchRejected,
          codeApi.endpoints.createCode.matchRejected,
          authApi.endpoints.resendEmail.matchRejected,
        ),
        (state) => {
          state.message.push({
            id: Date.now(),
            type: 'error',
            text: 'The error occurred',
          });
        },
      )
      .addMatcher(
        isAnyOf(authApi.endpoints.resendEmail.matchFulfilled),
        (state) => {
          state.message.push({
            id: Date.now(),
            type: 'success',
            text: 'Email sent to your inbox ',
          });
        },
      );
  },
});

export const toastReducer = toastSlice.reducer;
export const toastAction = toastSlice.actions;
