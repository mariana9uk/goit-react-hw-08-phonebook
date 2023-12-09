import { Box, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { filterByname } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const handleChange = e => {
    dispatch(filterByname(e.target.value.toString()));
  };
  return (
    <div>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <Typography
          variant="h4"
          fontWeight="medium"
          fontSize="25px"
          align="center"
          color="#616161"
          marginBottom="5px"
        >
          Find contact by name
        </Typography>
        <input type="text" onChange={handleChange} />
      </Box>
    </div>
  );
};
