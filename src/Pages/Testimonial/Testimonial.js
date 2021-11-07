import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';

const Testimonial = () => {
    return (
        <Container>
            <Box sx={{ flexGrow: 1, my: 5 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Typography variant='h6' sx={{ color: '#5CE7ED', fontWeight: '600', textAlign: 'left' }}>
                            TESTIMONIAL
                        </Typography>
                        <Typography variant='h4' sx={{ fontWeight: '700', textAlign: 'left' }}>
                            What's Our Patients <br /> Says
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>

                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default Testimonial;