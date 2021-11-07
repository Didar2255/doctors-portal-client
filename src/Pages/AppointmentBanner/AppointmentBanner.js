import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import doctor from '../../images/doctor.png'
import bg from '../../images/appointment-bg.png'
import { Container } from '@mui/material';

const appointmentBg = {
    background: `url(${bg})`,
    backgroundColor: 'rgba(45,58,74,0.8)',
    backgroundBlendMode: 'darken, luminosity',
    marginTop: 130,
    padding: '30px'

}
const AppointmentBanner = () => {
    return (
        <Box style={appointmentBg} sx={{ flexGrow: 1 }}>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <img
                            style={{ width: 400, marginTop: '-110px' }}
                            src={doctor} alt="" />
                    </Grid>
                    <Grid item xs={2} md={6} sx={{ display: "flex", justifyContent: 'flex-start', alignItems: 'center', textAlign: "left" }}>
                        <Box>
                            <Typography sx={{ fontWeight: 600, color: '#5CE7ED', mb: 3 }} variant="h6" component="div">
                                APPOINTMENT
                            </Typography>
                            <Typography sx={{ fontWeight: 500, color: 'white' }} variant="h3" component="div">
                                Make an Appointment Today
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'white', mt: 3, lineHeight: 2, m: 1 }}>
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its
                            </Typography>
                            <Button variant='contained' sx={{ backgroundColor: '#5CE7ED', borderRadius: 0, mt: 3, }}>Learn more</Button>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default AppointmentBanner;