import { Box, IconButton } from "@mui/material";
import TuneIcon from '@mui/icons-material/Tune';
import MapIcon from '@mui/icons-material/Map';

export default function Toolbar() {
    
    function handleFilterClick() {
        console.log('filter open!');
    }
    function handleMapClick() {
        console.log('map click!')
    }
 
    return (
        <Box
            sx={{
                // border: '1px dashed blue',
                display: 'flex'
            }}
        >
            <IconButton
                 aria-label="Open Filter Button"
                 onClick={handleFilterClick}
            >
                <TuneIcon />
            </IconButton>
            <IconButton
                aria-label="Toggle map button"
                onClick={handleMapClick}
            >
                <MapIcon />
            </IconButton>
        </Box>
    );
}