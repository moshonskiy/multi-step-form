import React from 'react';
import { useNavigate  } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import { Typography } from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import MainContainer from '../../components/MainContainer';
import InputComponent from '../../components/Input';
import Form from '../../components/Form';
import PrimaryButton from '../../components/PrimaryButton';
import { addFirstStepData } from './formSlice';


const schema = yup.object().shape({
    firstName: yup
        .string()
        .required('First name is a required Field')
        .matches(/^([^0-9]*)$/, { message: 'No numbers allowed' }),
    lastName: yup
        .string()
        .matches(/^([^0-9]*)$/, { message: 'No numbers allowed' })
        .required('Last name is a required Field')
})

const Step1 = () => {
    const dispatch = useDispatch();
    const { firstName, lastName } = useSelector((state) => state.formState);

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        mode: 'onBlur',
        defaultValues: {
            firstName,
            lastName,
        }
    });
    const navigate = useNavigate ();

    const onSubmit = (data) => {
        dispatch(addFirstStepData(data));
        navigate('/step2')
    }

    return (
        <MainContainer>
            <Typography component="h2" variant="h5">
                Step 1
            </Typography>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <InputComponent
                    type="text"
                    placeholder="First Name"
                    name="firstName"
                    {...register('firstName', {
                        required: true,
                    })}
                    label="First name"
                    error={!!errors?.firstName}
                    helperText={errors?.firstName?.message}
                />

                <InputComponent
                    type="text"
                    placeholder="Last Name"
                    name="lastName"
                    {...register('lastName', {
                        required: true,
                    })}
                    error={!!errors?.lastName}
                    helperText={errors?.lastName?.message}
                />
                <PrimaryButton>Next</PrimaryButton>
            </Form>
        </MainContainer>
    );
}

export default Step1;
