import React from 'react';
import Container from '@mui/material/Container';

const styles = {
    marginTop: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
};

const MainContainer = ({ children, ...props }) => {
    return (
        <Container sx={styles} component="main" maxWidth="xs" {...props}>
            {children}
        </Container>
    )
}

export default MainContainer;
