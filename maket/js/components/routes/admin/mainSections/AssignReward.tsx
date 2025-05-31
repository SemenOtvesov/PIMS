import React from 'react';
import style from './style';
import { Box, Divider, Stack, TextField, Typography } from '@mui/material';
import { Tlocation } from '@js/types/state/location';
import Card from '@js/components/middleComponents/card';

import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import useAppDispatch from '@js/hooks/useAppDispatch';
import { Control, SubmitHandler, useForm, useFormState } from 'react-hook-form';
import addLocations from '@js/api/addLocations';
import useAppSelector from '@js/hooks/useAppSelector';

type Tprops = {};

export default ({}: Tprops) => {
    const { Container, Item, ItemTitle, CardList } = style();

    //какой то стейт с локациями
    const locations: Array<Tlocation> = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];

    return (
        <Container>
            <Divider style={{ marginBottom: '-3em' }} />

            <Item>
                <Typography variant="h5">Локации</Typography>
                <Divider />
                <Typography>Создать новую</Typography>
                <CreateForm />
                <Divider />
                <Typography>Список существующих</Typography>
                <CardList>
                    {locations.map(el => (
                        <Card actions />
                    ))}
                </CardList>
            </Item>
            <Item>
                <Typography variant="h5">Сотрудники</Typography>
                <CardList>
                    {locations.map(el => (
                        <Card actions />
                    ))}
                </CardList>
            </Item>
        </Container>
    );
};

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

type Inputs = {
    name: string;
    description: string;
    photo: File;
};
function CreateForm() {
    const adminToken = useAppSelector(state => state.adminState.token);
    const dispatch = useAppDispatch();
    const { FromWrapper, FormLoginBox } = style();

    const form = useForm<Inputs>();
    const { handleSubmit, register, control } = form;

    const onSubmit: SubmitHandler<Inputs> = data => {
        addLocations(dispatch, adminToken, data.name, data.description, data.photo);
    };

    return (
        <Box
            component="form"
            sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit(onSubmit)}
        >
            <FromWrapper>
                <TextField
                    style={{ width: '40vw', margin: '0' }}
                    label="Название"
                    id="outlined-size-small"
                    defaultValue="Название"
                    size="small"
                    {...register('name', { required: true })}
                />
                <TextField
                    style={{ width: '40vw', margin: '0' }}
                    label="Описание"
                    id="outlined-size-small"
                    defaultValue="Описание"
                    size="small"
                    {...register('description', { required: true })}
                />
                <Button
                    style={{ width: '40vw' }}
                    component="label"
                    role={undefined}
                    variant="contained"
                    tabIndex={-1}
                    startIcon={<CloudUploadIcon />}
                >
                    Добавить фото
                    <VisuallyHiddenInput
                        type="file"
                        {...register('photo', { required: true })}
                        multiple
                    />
                </Button>
                <IsoleteBtn control={control} />
            </FromWrapper>
        </Box>
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
                Создать
            </Button>
        </Stack>
    );
}
