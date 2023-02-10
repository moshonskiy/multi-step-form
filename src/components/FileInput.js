import { CloudUpload, InsertDriveFile } from '@material-ui/icons';
import { ListItemIcon, ListItemText } from '@mui/material';
import { List, ListItem, Paper } from '@mui/material';
import React from 'react';
import Dropzone from 'react-dropzone';
import { Controller, useController } from 'react-hook-form';

const styles = {
    root: {
        backgroundColor: '#eee',
        textAlign: 'center',
        cursor: 'pointer',
        color: '#333',
        padding: '10px',
        marginTop: '20px'
    },
    icon: {
        marginTop: '16px',
        color: '#888',
        fontSize: '42px',
    }
};

const FileInput = ({ control, name }) => {
    const { field, } = useController({
        name,
        control,
    });

    return (
        <Controller
            control={control}
            name={name}
            defaultValue={[]}
            render={() => (
                <>
                    <Dropzone onDrop={field.onChange}>
                        {({ getRootProps, getInputProps }) => (
                            <Paper
                                sx={styles.root}
                                variant="outlined"
                                { ...getRootProps() }
                            >
                                <CloudUpload sx={styles.icon} />
                                <input
                                    name={name}
                                    multiple
                                    onBlur={field.onBlur}
                                    { ...getInputProps() }
                                />
                                <p>Drag 'n' drop files here, or click to select files</p>
                            </Paper>
                        )}
                    </Dropzone>
                    <List>
                        {field.value.map((file, index) => (
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
        />
    );
};

export default FileInput;
