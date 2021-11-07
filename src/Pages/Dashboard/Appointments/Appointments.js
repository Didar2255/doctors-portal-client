import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';

const Appointments = ({ date }) => {
    const { user, token } = useAuth()
    const [appointments, setAppointments] = useState([])
    useEffect(() => {
        const url = `https://stormy-mesa-33638.herokuapp.com/appointments?email=${user.email}&date=${date.toLocaleDateString()}`
        fetch(url, {
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                setAppointments(data)
            })
    }, [user.email, date, token])
    return (
        <div>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 5 }}>
                <Typography variant='h6' sx={{ color: '#42D7E1', fontWeight: 700 }}>
                    Appointments
                </Typography>

                <Typography variant='body2' sx={{ color: 'text.secondary', fontWeight: 500 }}>
                    {date.toDateString()}
                </Typography>
            </Box>
            <TableContainer component={Paper}>
                <Table aria-label="Appointment table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="right">Patient Name</TableCell>
                            <TableCell align="right">Service Name</TableCell>
                            <TableCell align="right">Appointment Time</TableCell>
                            <TableCell align="right">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {appointments.map((appointment) => (
                            <TableRow
                                key={appointment._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {appointment.patientName}
                                </TableCell>
                                <TableCell align="right">{appointment.serviceName}</TableCell>
                                <TableCell align="right">{appointment.time}</TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default Appointments;