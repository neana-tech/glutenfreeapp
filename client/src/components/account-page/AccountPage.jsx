import { Box, Typography } from '@mui/material';
import ProfilePicture from '../profile-picture/ProfilePicture';
import AccountInfoForm from '../account-info-form/AccountInfoForm';

export default function AccountPage() {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <Typography variant='h6'>
                Account Info
            </Typography>
            <Box
                sx={{
                    mt: 2,
                    mb: 4,
                }}
            >
                <ProfilePicture />
            </Box>
            <AccountInfoForm />
        </Box>
    );

}