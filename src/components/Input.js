import { TextField } from '@mui/material';
import React, { forwardRef } from 'react';

const styles = {
    marginBottom: 2,
}

const InputComponent = forwardRef((props, ref) => {

return (
    <TextField
        fullWidth
        variant="outlined"
        inputRef={ref}
        sx={styles}
        margin="dense"
        {...props}
    />
)
});

export default InputComponent;
