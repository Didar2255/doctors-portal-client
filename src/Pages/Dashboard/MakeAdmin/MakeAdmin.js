import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Alert, Button } from '@mui/material';
import useAuth from '../../../Hooks/useAuth';

const MakeAdmin = () => {
    const [email, setEmail] = useState('')
    const [success, setSuccess] = useState(false)
    const { token } = useAuth()

    const handelOnBlur = (e) => {
        setEmail(e.target.value)
    }
    const handelAdminSubmit = (e) => {
        const user = { email };
        fetch('https://stormy-mesa-33638.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)

        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setSuccess(true)
                }
            })
        e.preventDefault()
    }
    return (
        <div>
            <h2>Make an Admin</h2>
            <form onSubmit={handelAdminSubmit}>
                <TextField
                    sx={{ width: '40%' }}
                    label="Email"
                    type='email'
                    onBlur={handelOnBlur}
                    variant="standard" />
                <Button type='submit' variant='contained'>Make Admin</Button>
            </form>
            {success && <Alert severity="success">Made admin Successfully</Alert>}
        </div>
    );
};

export default MakeAdmin;