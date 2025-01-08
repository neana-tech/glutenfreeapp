
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function GfBottomNavigation({ onChange }) {
    const [value, setValue] = useState(3);
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

            <BottomNavigationAction aria-label="Bottom Navigation Home Button" label="For You" icon={<HomeIcon />} />
            <BottomNavigationAction aria-label="Bottom Navigation Favorites Button" label="Favorites" icon={<FormatListBulletedIcon />} />
            <BottomNavigationAction aria-label="Bottom Navigation Rewards Button" label="Rewards" icon={<EmojiEventsIcon/>} />
            <BottomNavigationAction aria-label="Bottom Navigation Account Button" label="Account" icon={<AccountCircleIcon/>} />
        </BottomNavigation>
    );
}