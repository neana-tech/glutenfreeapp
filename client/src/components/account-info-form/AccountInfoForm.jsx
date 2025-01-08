import { Box, Button, TextField, Typography } from '@mui/material';
import { useState } from 'react';

export default function AccountInfoForm() {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
    });

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }

    function handleSubmit() {

    }

    return (
        <Box
            component={"form"}
            onSubmit={handleSubmit}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                // maxWidth: 400,
                margin: "0 auto",
                // border: '1px dashed green',
                width: '100%',
                // mt: 4,
                // p: 2,
            }}
        >
            <TextField
                label='First Name'
                name='firstName'
                value={formData.firstName}
                onChange={handleChange}
                required
                fullWidth
            />
            <TextField
                label='Last Name'
                name='lastName'
                value={formData.lastName}
                onChange={handleChange}
                required
                fullWidth
            />
            <TextField
                label='Phone Number'
                name='phoneNumber'
                value={formData.phoneNumber}
                onChange={handleChange}
                required
                fullWidth
            />
            <TextField
                label='Email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                required
                fullWidth
            />
            <Button
                type="submit"
                variant='contained'
                color='error'
            >
                Save
            </Button>
            <Button
                variant='contained'
                color='secondary'
            >
                Logout
            </Button>
        </Box>
    );
}