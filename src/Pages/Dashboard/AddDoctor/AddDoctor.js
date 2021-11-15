import { Button, Input, TextField } from '@mui/material';
import React, { useState } from 'react';

const AddDoctor = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [image, setImage] = useState(null)
    const [success, setSuccess] = useState(false)

    const handelSubmitForm = e => {
        e.preventDefault()
        if (!image) {
            return;
        }
        const formData = new FormData()
        formData.append('name', name)
        formData.append('email', email)
        formData.append('image', image)

        fetch('https://stormy-mesa-33638.herokuapp.com/doctors', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setSuccess('Doctor added successfully')
                }
            })
    }
    return (
        <div>
            <h2>Add Doctor</h2>
            <form onSubmit={handelSubmitForm}>
                <TextField
                    sx={{ width: '40%' }}
                    label='name'
                    required
                    type='text'
                    onChange={e => setName(e.target.value)}
                    variant="standard"
                />
                <br />
                <TextField
                    sx={{ width: '40%' }}
                    label='email'
                    type='email'
                    onChange={e => setEmail(e.target.value)}
                    required
                    variant="standard"
                />
                <br />
                <br />
                <label htmlFor="contained-button-file">
                    <Input
                        accept="image/*"
                        onChange={e => setImage(e.target.files[0])}
                        type="file"
                    />
                    <br />
                    <br />
                    <Button variant="contained" type='submit' >
                        Add Doctor
                    </Button>
                </label>
            </form>
            {success && <p>{success}</p>}
        </div>
    );
};

export default AddDoctor;