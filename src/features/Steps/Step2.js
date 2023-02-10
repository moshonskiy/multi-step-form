import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { Checkbox, FormControlLabel, Typography } from '@mui/material';

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { parsePhoneNumberFromString } from 'libphonenumber-js';

import Form from '../../components/Form';
import MainContainer from '../../components/MainContainer';
import InputComponent from '../../components/Input';
import { addSecondStepData } from './formSlice';
import PrimaryButton from '../../components/PrimaryButton';


const schema = yup.object().shape({
    email: yup
        .string()
        .email('Email should have correct format')
        .required('Email is a required field'),
});

const normalizePhoneNumber = (value) => {
    const phoneNumber = parsePhoneNumberFromString(value);

    if (!phoneNumber) {
        return value;
    }

    return phoneNumber.formatInternational();
}

const Step2 = () => {
    const dispatch = useDispatch();
    const { email, hasPhone: hasPhoneValue, phoneNumber } = useSelector((state) => state.formState);

    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            email,
            hasPhone: hasPhoneValue,
            phoneNumber,
        },
        mode: 'onBlur'
    });

    const navigate = useNavigate();

    const hasPhone = watch('hasPhone')

    const onSubmit = (data) => {
        dispatch(addSecondStepData(data));
        navigate('/step3');
    }

    return (
        <MainContainer>
            <Typography component="h2" variant="h5">
                Step 2
            </Typography>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <InputComponent
                    type="email"
                    label="Email"
                    {...register('email', {
                        required: true,
                    })}
                    error={!!errors?.email}
                    helperText="Phone number should have correct format"
                />

                <FormControlLabel control={(
                        <Checkbox
                            defaultValue={hasPhone}
                            checked={hasPhone}
                            color="primary"
                        />
                    )}
                    label="Do you have a phone"
                    {...register('hasPhone')}

                />

                {hasPhone && (
                    <InputComponent
                        label="Phone number"
                        type="tel"
                        {...register('phoneNumber')}
                        onChange={(e) => {
                            e.target.value = normalizePhoneNumber(e.target.value)
                        }}
                    />
                )}

                <PrimaryButton>Next</PrimaryButton>
            </Form>
        </MainContainer>
    );
}

export default Step2;
