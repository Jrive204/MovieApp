import React from 'react';

import RMDBLogo from '../images/reactMovie_logo.png';
import TMDBLogo from '../images/tmdb_logo.svg';

import {
  StyledHeader,
  StyledRMDBLogo,
  StyledTMDBLogo,
} from '../styles/StyledHeader';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const { pathname } = useLocation();
  console.log(pathname, 'header');

  return (
    <StyledHeader>
      <div className='header-content'>
        <Link
          to='/'
          onClick={() =>
            pathname === '/'
              ? window.location.reload(true)
              : console.log('goodbye')
          }
        >
          <StyledRMDBLogo src={RMDBLogo} alt='rmdb-logo' />
        </Link>
        <StyledTMDBLogo src={TMDBLogo} alt='tmdb-logo' />
      </div>
    </StyledHeader>
  );
};

export default Header;
