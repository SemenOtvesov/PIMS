import React, { useEffect, useState } from 'react';
import style from './style';
import { Divider } from '@mui/material';
import Typography from '@mui/material/Typography';
import Card from '@js/components/middleComponents/card';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Stack from '@mui/material/Stack';
import useAppSelector from '@js/hooks/useAppSelector';
import useAppDispatch from '@js/hooks/useAppDispatch';
import { Control, SubmitHandler, useForm, useFormState } from 'react-hook-form';
import addNews from '@js/api/admin/addNews';
import { adminApi } from '@js/api/admin/indexQuery';

type Tprops = {};

export default ({}: Tprops) => {
    const { Container, Item, ItemTitle, CardList } = style();

    const adminToken = useAppSelector(state => state.adminState.token);
    const { data, refetch } = adminApi.useGetNewsQuery(adminToken) || [];

    return (
        <Container>
            <Divider style={{ marginBottom: '-3em' }} />
            <Item>
                <Typography variant="h5">Создать новость</Typography>
                <CreateForm refetch={refetch} />
            </Item>
            <Item>
                <Typography variant="h5">Уже существующие новости</Typography>
                <CardList>
                    {data?.content.length == 0 && <>Пока что пусто</>}
                    {data?.content.map(el => (
                        <Card
                            key={el.id}
                            content={{
                                title: el.title,
                                text: el.content,
                                text2: el.creator,
                                image: 'data:image/jpeg;base64,' + (el.images ? el.images[0] : ''),

                                id: el.id,
                            }}
                            typeCard="news"
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
    creator: string;
    photo: Array<File>;
};
function CreateForm({ refetch }: { refetch: any }) {
    const adminToken = useAppSelector(state => state.adminState.token);

    const dispatch = useAppDispatch();
    const { FromWrapper, FormLoginBox } = style();

    const form = useForm<Inputs>();
    const { handleSubmit, register, control, setValue } = form;

    const onSubmit: SubmitHandler<Inputs> = data => {
        addNews(
            dispatch,
            adminToken,
            data.name,
            data.description,
            data.creator,
            data.photo,
            refetch,
        );
    };

    const [selectedFiles, setSelectedFiles] = useState([]);

    useEffect(() => {
        setValue('photo', selectedFiles);
    }, [selectedFiles]);
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
                <TextField
                    style={{ width: '40vw', margin: '0' }}
                    label="Автор"
                    id="outlined-size-small"
                    size="small"
                    {...register('creator', { required: true })}
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
                        // {...register('photo', { required: true })}
                        onChange={e => {
                            const files = Array.from(e.target.files);
                            setSelectedFiles(p => [...p, files[0]]);
                        }}
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
