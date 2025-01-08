import { IconButton, InputAdornment, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import RoomIcon from '@mui/icons-material/Room';

export default function LocationInput() {
    function handleSearchAction() {
        console.log('searched');
    }
    return (
        <>
            <TextField
                id="outlined-basic"
                aria-label="Location input box"
                // label="Search"
                variant="outlined"
                fullWidth
                slotProps={{
                    input: {
                        startAdornment: (
                            <InputAdornment position="start">
                                <RoomIcon />
                            </InputAdornment>
                        )
                    }
                }}
            />
        </>
    );
}