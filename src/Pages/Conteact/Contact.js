import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import bg from '../../images/appointment-bg.png'
import { Container, Typography } from '@mui/material';


const ContactBg = {
    background: `url(${bg})`,
    backgroundColor: 'rgba(45,58,74,0.8)',
    backgroundBlendMode: 'darken, luminosity',
    marginTop: 80,
    padding: '20px'

}
const Contact = () => {
    return (
        <Box style={ContactBg}>
            <Container>
                <Typography variant='h6' sx={{ color: '#5CE7ED', fontWeight: 500 }}>
                    CONTACT US
                </Typography>
                <Typography variant='h4' sx={{ color: 'white', lineHeight: 2, mb: 2, fontWeight: 600 }}>
                    Always Contact With Us
                </Typography>
                <Box

                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '40%', backgroundColor: 'white' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <div>
                        <TextField
                            id="outlined-size-small"
                            size="small"
                            placeholder='Email Address *'
                        />
                    </div>
                    <div>
                        <TextField
                            id="outlined-size-small"
                            size="small"
                            placeholder='Your Phone Number*'
                        />
                    </div>
                    <div>
                        <TextField
                            id="outlined-size-small"
                            size="small"
                            placeholder='Subject *'
                        />
                    </div>
                    <div>
                        <TextareaAutosize
                            aria-label="minimum height"
                            minRows={5}
                            style={{ width: "40%", marginTop: '10px', padding: '5px' }}
                            placeholder='Your Message *'
                        />
                    </div>
                </Box>
            </Container>
        </Box>
    );
};

export default Contact;