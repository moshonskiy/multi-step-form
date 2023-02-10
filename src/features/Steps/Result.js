import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { TableCell, Typography } from '@mui/material';
import {
    List,
    ListItemIcon,
    ListItem,
    ListItemText,
    Table,
    TableBody,
    TableContainer,
    TableHead,
    TableRow
} from '@material-ui/core';
import { InsertDriveFile } from '@material-ui/icons';
import Swal from 'sweetalert2';
import Confetti from 'react-confetti';

import PrimaryButton from './../../components/PrimaryButton';
import MainContainer from './../../components/MainContainer';

const styles = {
    root: {
        marginBottom: '30px',
    },
    table: {
        marginBottom: '30px',
    }
}

const Result = () => {
    const data = useSelector((state) => state.formState);
    const [success, setSuccess] = useState(false);

    const entries = Object.entries(data).filter((entry) => entry[0] !== 'files');
    const files = data.files;

    const onSubmit = async () => {
        const formData = new FormData();

        if (files) {
            files.forEach((file) => {
                formData.append('files', file, file.name);
            });
        }

        entries.forEach((entry) => {
            formData.append(entry[0], entry[1]);
        });

        const res = await fetch('http://localhost:5000/', {
            method: "POST",
            body: formData,
        });

        console.log('formdata', formData);

        if (res.status === 200) {
            Swal.fire('Great Job!', 'You have submitted data', 'success');
            setSuccess(true);
        }
    }

    if (success) {
        return <Confetti />;
    }

    return (
        <MainContainer>
            <Typography component="h2" variant="h5">
                Form Values
            </Typography>
            <TableContainer sx={styles.root}>
                <Table sx={styles.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Field</TableCell>
                            <TableCell align="right">Value</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {entries.map((entry) => (
                            <TableRow key={entry[0]}>
                                <TableCell>
                                    {entry[0]}
                                </TableCell>
                                <TableCell>
                                    {entry[1].toString()}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            {files.length > 0 && (
                <>
                    <Typography component="h2" variant="h5">
                        Files
                    </Typography>
                    <List>
                        {files.map((file, index) => (
                            <ListItem key={index}>
                                <ListItemIcon>
                                    <InsertDriveFile />
                                </ListItemIcon>
                                <ListItemText primary={file.name} secondary={file.size} />
                            </ListItem>
                        ))}
                    </List>
                </>
            )}
            <PrimaryButton onClick={onSubmit}>Submit</PrimaryButton>
            <Link to="/">Start over</Link>
        </MainContainer>
    );
}

export default Result;
