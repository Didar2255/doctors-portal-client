import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Alert, Button, CircularProgress, Container, Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import login from '../../../images/login.png'
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const LogIn = () => {
    const { user, processLogin, isLoading, error, googleLogIn } = useAuth()

    const [logInData, setLogInData] = useState({})
    const location = useLocation()
    const history = useHistory()
    const handelOnChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...logInData }
        newLoginData[field] = value;
        setLogInData(newLoginData)

    }
    const handelForm = (e) => {
        processLogin(logInData.email, logInData.password, location, history)
        e.preventDefault()
    }
    const handelGoogleLogin = () => {
        googleLogIn(location, history)
    }
    return (
        <Container sx={{ m: 8 }}>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Typography variant='h6' sx={{ lineHeight: 6, fontWeight: 500 }}>
                            Login
                        </Typography>
                        <form onClick={handelForm}>
                            <Stack
                                component="form"
                                sx={{
                                    width: '75%', backgroundColor: 'white'
                                }}
                                spacing={5}
                                noValidate
                                autoComplete="off"
                            >
                                <TextField
                                    id="standard-basic"
                                    type='email'
                                    name='email'
                                    onBlur={handelOnChange}
                                    placeholder='User Email'
                                    variant="standard" />
                                <TextField
                                    id="standard-basic"
                                    type='password'
                                    name='password'
                                    onBlur={handelOnChange}
                                    placeholder='User Password'
                                    variant="standard" />
                                <Button variant="contained" sx={{ backgroundColor: '#2CD4ED', borderRadius: 0, my: 5, }} type='submit'>Sign in</Button>

                                {
                                    isLoading && <CircularProgress />
                                }
                                {
                                    user.email && <Alert severity="success">Log-in Successfully</Alert>
                                }
                                {
                                    error && <Alert severity="error">{error}</Alert>
                                }
                                <NavLink
                                    style={{ textDecoration: 'none' }}
                                    to='/register'>
                                    <Button variant='text'>New member ? Register here .</Button>
                                </NavLink>

                            </Stack>

                        </form>
                        <p>---------------------------</p>
                        <Button variant='contained' onClick={handelGoogleLogin}>Log-in with Google</Button>

                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img src={login} alt="" style={{ width: '500px' }} />
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default LogIn;