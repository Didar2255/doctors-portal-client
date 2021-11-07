import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Service from '../Service/Service';
import Typography from '@mui/material/Typography';
import fluoride from '../../images/fluoride.png';
import cavity from '../../images/cavity.png';
import whitening from '../../images/whitening.png';

const ServiceItem = [
    {
        name: 'Fluoride Treatment',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit sapiente nulla obcaecati tempora nisi assumenda quidem at eum in illum iusto porro cupiditate ex incidunt, fuga eos!',
        img: fluoride
    },
    {
        name: 'Cavity Filling',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit sapiente nulla obcaecati tempora nisi assumenda quidem at eum in illum iusto porro cupiditate ex incidunt, fuga eos!',
        img: cavity
    },
    {
        name: 'Teeth Whitening',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit sapiente nulla obcaecati tempora nisi assumenda quidem at eum in illum iusto porro cupiditate ex incidunt, fuga eos!',
        img: whitening
    }
]


const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Typography sx={{ fontWeight: 600, color: 'info.main', mt: 5 }} variant="h6" component="div">
                OUR SERVICES
            </Typography>
            <Typography sx={{ fontWeight: 700, lineHeight: 2, mb: 8 }} variant="h4" component="div">
                Services We Provided
            </Typography>
            <Container>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 8, md: 12 }}>
                    {
                        ServiceItem.map(service => <Service
                            key={service.name}
                            service={service}
                        >
                        </Service>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Services;