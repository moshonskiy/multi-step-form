import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { Typography } from '@mui/material';

import Form from '../../components/Form';
import MainContainer from '../../components/MainContainer';
import PrimaryButton from '../../components/PrimaryButton';
import FileInput from '../../components/FileInput';
import { addThirdStepData } from './formSlice';

const Step3 = () => {
    const dispatch = useDispatch();
    const { files } = useSelector((state) => state.formState);

    const navigate = useNavigate();
    const { control, handleSubmit } = useForm({
        defaultValues: {
            files,
        }
    });

    const onSubmit = (data) => {
        dispatch(addThirdStepData(data.files));
        navigate('/result');
    }

    return (
        <MainContainer>
            <Typography component="h2" variant="h5">
                Step 3
            </Typography>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <FileInput name="files" control={control} />

                <PrimaryButton>Next</PrimaryButton>
            </Form>
        </MainContainer>
    )
}

export default Step3;
