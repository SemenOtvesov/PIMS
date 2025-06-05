import React from 'react';

import style from './style';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { Control, SubmitHandler, useForm, UseFormReturn, useFormState } from 'react-hook-form';
import adminAuth from '@js/api/admin/adminAuth';
import useAppDispatch from '@js/hooks/useAppDispatch';

type Inputs = {
    userName: string;
    pass: string;
};
export default function CreateForm() {
    const dispatch = useAppDispatch();
    const { FromWrapper, FormLoginBox } = style();

    const form = useForm<Inputs>();
    const { handleSubmit, register, control } = form;

    const onSubmit: SubmitHandler<Inputs> = data => {
        adminAuth(dispatch, data.userName, data.pass);
    };

    return (
        <FormLoginBox>
            <Box
                component="form"
                sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit(onSubmit)}
            >
                <FromWrapper>
                    <Typography variant="h5">Авторизация</Typography>
                    <TextField
                        style={{ width: '40vw', margin: '0' }}
                        label="Имя пользователя"
                        id="outlined-size-small"
                        size="small"
                        {...register('userName', { required: true })}
                    />
                    <TextField
                        style={{ width: '40vw', margin: '0' }}
                        label="Пароль"
                        id="outlined-size-small"
                        size="small"
                        {...register('pass', { required: true })}
                    />

                    <IsoleteBtn control={control} />
                </FromWrapper>
            </Box>
        </FormLoginBox>
    );
}

function IsoleteBtn({ control }: { control: Control<Inputs, any, Inputs> }) {
    const formState = useFormState({ control: control });
    return (
        <Stack direction="row" spacing={2}>
            <Button
                type="submit"
                style={{ width: '40vw' }}
                variant="contained"
                disabled={!formState.isValid}
            >
                Войти
            </Button>
        </Stack>
    );
}
