import {Box, Typography} from "@mui/material";

export default function StoreItem({name, address, price}) {
    return (
        <Box
            sx={{
                // border: '1px dashed yellow'
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                <Typography sx={{fontSize: '1.1em'}}>
                    {name}
                </Typography>
                <Typography>
                    {price}
                </Typography>
            </Box>
            <Typography>
                {address}
            </Typography>
        </Box>
    )
}