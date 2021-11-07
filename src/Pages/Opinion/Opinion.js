import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import { Box } from '@mui/system';

const Opinion = (props) => {
    const { name, address, clientImg, message } = props.opinion
    return (
        <Grid item xs={2} sm={4} md={4}>
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography sx={{ fontWeight: 500, textAlign: 'justify', lineHeight: 2, mb: 3 }} variant="body2" color='text.secondary'>
                        {message}
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <CardMedia
                            component="img"
                            image={clientImg}
                            alt="green iguana"
                            style={{ width: '50px' }}
                        />
                        <Box sx={{ ml: 3 }}>
                            <Typography sx={{ fontWeight: 600, color: '#5CE7ED' }} variant='h6'>
                                {name}
                            </Typography>
                            <Typography variant='body2'>
                                {address}
                            </Typography>
                        </Box>
                    </Box>
                </CardContent>
            </Card>

        </Grid>
    );
};

export default Opinion;