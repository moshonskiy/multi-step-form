import React from 'react';
import Typography from '@mui/material/Typography';

const styles = {
    margin: '10px 10px 10px',
    fontFamily: 'Permanent Marker',
    textAlign: 'center',
    fontSize: '40px',
    color: 'deeppink',
    textShadow: '1px 1px darkmagenta',
};

const Header = () => {
    return (
        <Typography sx={styles}>
            Multi step form
        </Typography>
    )
}

export default Header;
