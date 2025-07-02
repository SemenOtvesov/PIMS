import React, { useEffect, useState } from 'react';
import style from './style';
import { Box, Divider, Stack, TextField, Typography } from '@mui/material';
import Card from '@js/components/middleComponents/card';

import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import useAppDispatch from '@js/hooks/useAppDispatch';
import { Control, SubmitHandler, useForm, useFormState } from 'react-hook-form';
import addLocations from '@js/api/admin/addLocations';
import useAppSelector from '@js/hooks/useAppSelector';
import { adminApi } from '@js/api/admin/indexQuery';
import { setSearchLocation } from '@js/state/inputs/inputsState';

type Tprops = {};

export default ({}: Tprops) => {
    const { Container, Item, ItemTitle, CardList } = style();

    const adminToken = useAppSelector(state => state.adminState.token);
    const { data: locationData, refetch } = adminApi.useGetLocationQuery(adminToken) || [];
    const { data: awardsData } = adminApi.useGetAwardsQuery(adminToken) || [];

    return (
        <Container>
            <Divider style={{ marginBottom: '-3em' }} />

            <Item>
                <Typography variant="h5">Локации</Typography>
                <Divider />
                <Typography>Создать новую</Typography>
                <CreateForm refetch={refetch} />
                <Divider />
                <Typography>Список существующих</Typography>
                <IsolateInput />
                <CardList>
                    {locationData?.content.length == 0 && <>Пока что пусто</>}
                    <IsolateCarlList />
                </CardList>
            </Item>
        </Container>
    );
};

function IsolateInput() {
    const dispatch = useAppDispatch();
    const state = useAppSelector(state => state.inputsState.searchLocation);
    return (
        <TextField
            style={{ width: '40vw', margin: '0' }}
            label="Название"
            id="outlined-size-small"
            size="small"
            value={state}
            onChange={e => dispatch(setSearchLocation(e.target.value))}
        />
    );
}

function IsolateCarlList() {
    const adminToken = useAppSelector(state => state.adminState.token);
    const { data: userData } = adminApi.useGetUsersQuery(adminToken) || [];
    const { data: awardsData } = adminApi.useGetAwardsQuery(adminToken) || [];
    const { data: locationData, refetch: locationsRefetch } =
        adminApi.useGetLocationQuery(adminToken) || [];

    const { Container, Item, ItemTitle, CardList } = style();

    const searchUser = useAppSelector(state => state.inputsState.searchLocation);

    const [search, setSearch] = useState(locationData?.content || []);
    useEffect(() => {
        setSearch(locationData?.content || []);
    }, [userData]);

    useEffect(() => {
        setSearch(p => {
            const serchList = locationData?.content || [];
            return serchList.filter(el => el.name.toLowerCase().includes(searchUser.toLowerCase()));
        });
    }, [searchUser]);

    console.log(search);

    return search?.map((el, i) => (
        <Card
            key={el.name + i}
            actions
            content={{
                title: el.name,
                text: el.address,
                image: 'data:image/jpeg;base64,' + el.locationImage,
                id: el.id,
            }}
            names={awardsData?.content.map(n => ({
                title: n.name,
                id: n.id,
                targetId: el.id,
            }))}
            initChip={el.locationAwards?.map(el => el.awardTitle)}
            typeCard="location"
            refetch={locationsRefetch}
        />
    ));
}

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
function CreateForm({ refetch }: { refetch: any }) {
    const adminToken = useAppSelector(state => state.adminState.token);
    const dispatch = useAppDispatch();
    const { FromWrapper, FormLoginBox } = style();

    const form = useForm<Inputs>();
    const { handleSubmit, register, control } = form;

    const onSubmit: SubmitHandler<Inputs> = data => {
        addLocations(dispatch, adminToken, data.name, data.description, data.photo, refetch);
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
