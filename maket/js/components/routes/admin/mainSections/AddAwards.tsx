import React from 'react';
import style from './style';
import { Divider, Stack } from '@mui/material';
import Typography from '@mui/material/Typography';
import Card from '@js/components/middleComponents/card';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import useAppSelector from '@js/hooks/useAppSelector';
import useAppDispatch from '@js/hooks/useAppDispatch';
import { Control, SubmitHandler, useForm, useFormState } from 'react-hook-form';
import addAward from '@js/api/admin/addAward';
import { adminApi } from '@js/api/admin/indexQuery';

type Tprops = {};

export default ({}: Tprops) => {
    const { Container, Item, ItemTitle, CardList } = style();

    const adminToken = useAppSelector(state => state.adminState.token);
    const { data, refetch } = adminApi.useGetAwardsQuery(adminToken) || [];
    return (
        <Container>
            <Divider style={{ marginBottom: '-3em' }} />
            <Item>
                <Typography variant="h5">Создать новую награду</Typography>
                <CreateForm refetch={refetch} />
            </Item>
            <Item>
                <Typography variant="h5">Уже существующие награды</Typography>
                <CardList>
                    {data?.content.length == 0 && <>Пока что пусто</>}
                    {data?.content.map(el => (
                        <Card
                            key={el.id}
                            content={{
                                title: el.name,
                                text: el.description,
                                image: 'data:image/jpeg;base64,' + el.awardImage,
                                id: el.id,
                            }}
                            typeCard="addAwards"
                            refetch={refetch}
                        />
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
    // photo: [File];
};
function CreateForm({ refetch }: { refetch: any }) {
    const adminToken = useAppSelector(state => state.adminState.token);
    const dispatch = useAppDispatch();
    const { FromWrapper, FormLoginBox } = style();

    const form = useForm<Inputs>();
    const { handleSubmit, register, control } = form;

    const onSubmit: SubmitHandler<Inputs> = data => {
        addAward(dispatch, adminToken, data.name, data.description, /*data.photo,*/ refetch);
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
                    size="small"
                    {...register('name', { required: true })}
                />
                <TextField
                    style={{ width: '40vw', margin: '0' }}
                    label="Описание"
                    id="outlined-size-small"
                    size="small"
                    {...register('description', { required: true })}
                />
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
