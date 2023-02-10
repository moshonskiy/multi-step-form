import React from 'react';
import { Button } from '@mui/material';

const styles = {
    margin: '25px 0',
};

const PrimaryButton = ({ children, ...props }) => {
    return (
        <Button
            sx={styles}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            {...props}>
            {children}
        </Button>
    )
};

export default PrimaryButton;
