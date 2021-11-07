import React from 'react';
import bg from '../../images/bg.png'
import chair from '../../images/chair.png'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Button, Container } from '@mui/material';

const bannerBackground = {
    background: `url(${bg})`,

};
const verticalAlignment = {
    display: 'flex',
    height: 400,
    alignItems: 'center'
}


const Banner = () => {
    return (
        <Box style={bannerBackground} sx={{ flexGrow: 1 }}>
            <Container>
                <Grid container spacing={8}>
                    <Grid style={{ ...verticalAlignment, textAlign: 'left' }} item xs={12} md={6}>
                        <Box>
                            <Typography sx={{ fontWeight: 500 }} variant="h4" component="div">
                                Your New Smile <br /> Start Here
                            </Typography>
                            <Typography sx={{ fontWeight: 400, my: 3 }} variant="body2" component="div" color='text.secondary'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto aliquid quis vero ut, voluptate officia.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto aliquid quis vero ut, voluptate officia.
                            </Typography>
                            <Button style={{ backgroundColor: "#5CE7ED", color: "white", padding: '10px', marginTop: "26px", borderRadius: 0 }}>Get Appointment</Button>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} style={verticalAlignment}>
                        <img style={{ width: '350px' }} src={chair} alt="" />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Banner;