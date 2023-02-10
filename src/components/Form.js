import React from 'react';

const styles = {
    width: '100%',
    marginTop: '10px',
}

const Form = ({ children, ...props }) => {
    return (
        <form className={styles} noValidate {...props}>
            {children}
        </form>
    )
};

export default Form;
