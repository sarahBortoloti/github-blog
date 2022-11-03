import React, { useState, useReducer } from 'react';
import { ACTION_TYPES } from './constants';


export const initialState = {
	user: '',
	token: '',
	loading: false,
	errorMessage: null,
};

export const AuthReducer = (initialState: any, action: any) => {
	switch (action.type) {
    case ACTION_TYPES.REQUEST_LOGIN:
      return {
        ...initialState,
        loading: true,
      };
    case ACTION_TYPES.LOGIN_SUCCESS:
      return {
        ...initialState,
        user: action.payload.user,
        token: action.payload.auth_token,
        loading: false,
      };
    case ACTION_TYPES.LOGOUT:
      return {
        ...initialState,
        user: "",
        token: "",
      };

    case ACTION_TYPES.LOGIN_ERROR:
      return {
        ...initialState,
        loading: false,
        errorMessage: action.error,
      };

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};
