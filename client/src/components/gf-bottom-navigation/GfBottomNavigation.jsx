
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function GfBottomNavigation({ onChange }) {
    const [value, setValue] = useState(0);
    useEffect(() => {
        onChange(value);
    }, [value]);
    return (
        <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
        >

            <BottomNavigationAction label="For You" icon={<HomeIcon />} />
            <BottomNavigationAction label="Favorites" icon={<FormatListBulletedIcon />} />
            <BottomNavigationAction label="Rewards" icon={<EmojiEventsIcon/>} />
            <BottomNavigationAction label="Account" icon={<AccountCircleIcon/>} />
        </BottomNavigation>
    );
}