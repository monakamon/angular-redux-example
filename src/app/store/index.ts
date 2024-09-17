import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter-slice'
import {injectDispatch, injectSelector} from "@reduxjs/angular-redux";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const injectAppDispatch = injectDispatch.withTypes<AppDispatch>();
export const injectAppSelector = injectSelector.withTypes<RootState>();
