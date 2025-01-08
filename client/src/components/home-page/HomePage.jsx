import Filters from "../filters/Filters";
import LocationInput from "../location-input/LocationInput";
import SearchBar from "../search-bar/SearchBar";
import { Box } from '@mui/material';
import Toolbar from "../toolbar/Toolbar";
import StoreList from "../store-list/StoreList";

export default function HomePage() {
    return (
        <Box
            sx={{
                // backgroundColor: 'green',
                // width: '100%'
                // border: '1px dashed brown',
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
            }}
        >
            <SearchBar />
            <LocationInput />
            <Toolbar />
            <StoreList />
        </Box>
    )
}