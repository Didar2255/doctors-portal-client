import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js'
import CheckOutFrom from './CheckOutFrom';

const stripePromise = loadStripe('pk_test_51JvmdxK1m0zkPuoVdtMKN8JANDJJAAXvXRUVVgYJKg1nuaDQw3owZVuFsLjH8zPdcX9KUlU4ndPOk05B325MPASH00adqnS96v');

const Payment = () => {
    const { appointmentId } = useParams()
    const [appointment, setAppointment] = useState({})
    useEffect(() => {
        fetch(`https://stormy-mesa-33638.herokuapp.com/appointment/${appointmentId}`)
            .then(res => res.json())
            .then(data => setAppointment(data))
    }, [appointmentId])
    return (
        <div>
            <h2>Please pay for : {appointment.patientName} for date {appointment.date}</h2>
            {appointment?.price && <Elements stripe={stripePromise}>
                <CheckOutFrom
                    appointment={appointment}
                />
            </Elements>}
        </div>
    );
};

export default Payment;