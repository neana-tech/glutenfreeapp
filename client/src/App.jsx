import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { useState } from 'react'
import GfBottomNavigation from './components/gf-bottom-navigation/GfBottomNavigation';
import { Box } from '@mui/material';
import HomePage from './components/home-page/HomePage';
import FavoritesPage from './components/favorites-page/FavoritesPage';
import RewardsPage from './components/rewards-page/RewardsPage';
import AccountPage from './components/account-page/AccountPage';

const HOME_PAGE_INDEX = 0;
const FAVORITES_PAGE_INDEX = 1;
const REWARDS_PAGE_INDEX = 2;
const ACCOUNT_PAGE_INDEX = 3;


function App() {
  const [pageIndex, setPageIndex] = useState(0);

  function handleNavigationChange(index) {
    setPageIndex(index);
  }
  return (
    <Box
      sx={{
        display: 'flex',
      }}
    >
      <Box
        sx={{
          m: 2
        }}
      >
        {
          pageIndex === HOME_PAGE_INDEX &&
          <>
            <HomePage />
          </>
        }
        {
          pageIndex === FAVORITES_PAGE_INDEX &&
          <>
            <FavoritesPage />
          </>
        }
        {
          pageIndex === REWARDS_PAGE_INDEX &&
          <>
            <RewardsPage/>
          </>
        }
        {
          pageIndex === ACCOUNT_PAGE_INDEX &&
          <>
            <AccountPage />
          </>
        }
       </Box>
      <Box
          sx={{
              position: 'fixed',
              bottom: 0,
              left: 0, 
              right: 0
          }}
      >
          <GfBottomNavigation onChange={handleNavigationChange} />
      </Box>
    </Box>
  )
}

export default App
