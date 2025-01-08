import { Avatar, Box } from "@mui/material";

export default function ProfilePicture() {
    return (
        <Box
            sx={{
                display: 'flex',
                // justifyContent: 'center',
                // alignItems: 'center',
                // height: '100vh',
                // border: '1px dashed black',
            }}
        >
            <Avatar
                alt="Profile Picture"
                src="https://via.placeholder.com/150"
                sx={{
                    width: 100,
                    height: 100,
                }}
            >
            </Avatar>
        </Box>
    )
}