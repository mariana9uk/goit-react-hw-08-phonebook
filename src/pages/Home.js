import { Box, Container, Typography } from '@mui/material';
// import { Header } from "layout/LayoutStyled"
// import { NavLink } from "react-router-dom"

const Home = () => {
  return (
        <Container maxWidth="fit-content" bgcolor="#cfe8fc" >
<Box
            sx={{
              flexGrow: 1,
              display: {
                xs: 'flex',
                md: 'flex',
               },
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              gap: '15px',
              paddingBottom:'20px'
            }}
          >
      <div>
        <Typography
          variant="h1"
          fontWeight="medium"
          align="center"
          color="#616161"
          marginTop="20px"
        >
          Phonebook
        </Typography>
        <Typography
          align="center"
          fontWeight="medium"
          color="#616161"
          fontSize="25px"
        >
          All your contacts in a one place!
        </Typography>
      </div>
    </Box>
    </Container>
   
  );
};
export default Home;
