import React from 'react';
import Typography from '@mui/material/Typography';
import { Button, Container } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import image from '../../images/treatment.png'

const Feature = () => {
    return (
        <Container sx={{ my: 5 }}>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <img src={image} alt="" style={{ width: '300px' }} />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography variant='h4' sx={{ textAlign: 'left', fontWeight: 700, marginY: 2 }}>
                            Exceptional Dental <br /> Care ,On Your Terms
                        </Typography>
                        <Typography variant='body2' sx={{ textAlign: 'left', fontWeight: 500, lineHeight: 2, color: 'text.secondary' }}>
                            Department of Dental & Maxillofacial Surgery of Evercare Hospital Dhaka offers full scope of the dental specialty, including general dentistry and specialized services in oral & maxillofacial surgery, orthodontics and restorative dentistry (endodontics and prosthodontics).
                        </Typography>
                        <Button variant="contained" sx={{ backgroundColor: '#5CE7ED', borderRadius: 0, mt: 3, }}>Learn More</Button>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default Feature;