import { IconButton, InputAdornment, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBar() {
    function handleSearchAction() {
        console.log('searched');
    }
    return (
        <>
            <TextField
                id="outlined-basic"
                label="Search"
                variant="outlined"
                fullWidth
                slotProps={{
                    input: {
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="search"
                                    edge="end"
                                    onClick={handleSearchAction}
                                >
                                    <SearchIcon />
                                </IconButton>
                            </InputAdornment>
                        )
                    }
                }}
            />
        </>
    );
}