import Box from '@mui/material/Box';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { LinksCollection } from '../api/links';
import React from 'react';
import TextField from '@mui/material/TextField';

export const Info = () => {
  const [value, setValue] = React.useState([null, null]);

  return (
    <div>
      <DateRangePicker
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(startProps, endProps) => (
          <React.Fragment>
            <TextField {...startProps} />
            <Box sx={{ mx: 2 }}> to </Box>
            <TextField {...endProps} />
          </React.Fragment>
        )}
      />
    </div>
  );
};
