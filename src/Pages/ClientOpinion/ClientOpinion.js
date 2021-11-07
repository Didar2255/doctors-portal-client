import { Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import img1 from '../../images/people-1.png'
import img2 from '../../images/people-2.png'
import img3 from '../../images/people-3.png'
import Opinion from '../Opinion/Opinion';

const clientOpinions = [
    { id: 1, name: 'Winson Herry', address: 'California', message: 'It is a long establish fact that by the readable content of a lot layout.The point of using lorem a more or less normal distribution ot using content here.', clientImg: img1 },
    { id: 2, name: 'Debit Herry', address: 'California', message: 'It is a long establish fact that by the readable content of a lot layout.The point of using lorem a more or less normal distribution ot using content here.', clientImg: img2 },
    { id: 3, name: 'Willumson', address: 'California', message: 'It is a long establish fact that by the readable content of a lot layout.The point of using lorem a more or less normal distribution ot using content here.', clientImg: img3 },
]

const ClientOpinion = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 8, md: 12 }} >
                    {
                        clientOpinions.map(opinion => <Opinion
                            key={opinion.id}
                            opinion={opinion}
                        ></Opinion>)
                    }
                </Grid>
            </Container>
        </Box >
    );
};

export default ClientOpinion;