import { Grid, Typography } from '@mui/material';
import React from 'react';

const Doctor = ({ doctor }) => {
    const { name, email, image } = doctor
    return (
        <Grid item xs={12} sm={6} md={3}>
            <img
                style={{ width: '80px', borderRadius: '50%', height: '80px' }}
                src={`data:image/png;base64,${image}`}
                className='img-fluid'
                alt=""
            />
            <Typography variant='h6'>
                {name}
            </Typography>
            <Typography variant='body2'>
                MBBS doctor from usa
            </Typography>
            <Typography variant='body2'>
                {email}
            </Typography>
        </Grid>
    );
};

export default Doctor;