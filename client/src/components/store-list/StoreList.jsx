
import {Box} from "@mui/material";
import StoreItem from "../store-item/StoreItem";

export default function StoreList() {
    return (
        <Box
            sx={{
                // border: '1px dashed red'
            }}
        >
        <StoreItem 
            name="Kroger"
            address="2342 Road Drive, San Jose CA 8234"
            price="$3.50"
        />
        <hr />
         <StoreItem 
            name="Ralphs"
            address="2342 Green Drive, San Jose CA 8234"
            price="$2.50"
        />
        </Box>
    );
    

}