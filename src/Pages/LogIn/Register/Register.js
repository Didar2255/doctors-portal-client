import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Alert, Button, CircularProgress, Container, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import login from '../../../images/login.png'
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Register = () => {
    const { user, handelCreateUser, isLoading, error } = useAuth()
    const [registerInData, setRegisterInData] = useState({})
    const history = useHistory()

    const handelOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newRegisterInData = { ...registerInData }
        newRegisterInData[field] = value;
        console.log(newRegisterInData)
        setRegisterInData(newRegisterInData)

    }
    const handelForm = (e) => {
        if (registerInData.password !== registerInData.password2) {
            alert('Password are in valid')
            return;
        }
        handelCreateUser(registerInData.email, registerInData.password, registerInData.name, history)
        e.preventDefault()
    }
    return (
        <Container sx={{ m: 8 }}>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Typography variant='h6' sx={{ lineHeight: 6, fontWeight: 500 }}>
                            Register Your Account
                        </Typography>
                        <form onClick={handelForm}>
                            <TextField
                                sx={{ m: 1, width: '75%' }}
                                id="standard-basic"
                                type='Text'
                                name='name'
                                onBlur={handelOnBlur}
                                placeholder='User Name'
                                variant="standard" />
                            <TextField
                                sx={{ m: 1, width: '75%' }}
                                id="standard-basic"
                                type='email'
                                name='email'
                                onBlur={handelOnBlur}
                                placeholder='User Email'
                                variant="standard" />
                            <TextField
                                sx={{ m: 1, width: '75%' }}
                                id="standard-basic"
                                type='password'
                                name='password'
                                onBlur={handelOnBlur}
                                placeholder='User Password'
                                variant="standard" />
                            <TextField
                                sx={{ m: 1, width: '75%' }}
                                id="standard-basic"
                                type='password'
                                name='password2'
                                onBlur={handelOnBlur}
                                placeholder='Re-type password'
                                variant="standard" />
                            <Button variant="contained" sx={{ backgroundColor: '#2CD4ED', borderRadius: 0, m: 1, width: '75%' }} type='submit'>Register Account</Button><br />
                            <NavLink
                                style={{ textDecoration: 'none' }}
                                to='/login'>
                                <Button variant='text'>Already have an account? Please log in.</Button>
                            </NavLink>
                            {isLoading && <CircularProgress />}

                            {
                                user?.email && <Alert severity="success">User created Successfully</Alert>
                            }
                            {
                                error && <Alert severity="error">{error}</Alert>
                            }
                        </form>

                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img src={login} alt="" style={{ width: '500px' }} />
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default Register;