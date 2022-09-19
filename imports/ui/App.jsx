import { AdapterMoment } from '@mui/x-date-pickers-pro/AdapterMoment';
import { Hello } from './Hello.jsx';
import { Info } from './Info.jsx';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import React from 'react';

export const App = () => (
  <div>
    <h1>Welcome to Meteor!</h1>
    <Hello/>


    <LocalizationProvider dateAdapter={AdapterMoment}>
      <Info/>
    </LocalizationProvider>
  </div>
);
