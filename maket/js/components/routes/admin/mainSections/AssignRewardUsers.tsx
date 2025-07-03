import React, { useEffect, useState } from 'react';
import style from './style';
import { Autocomplete, Box, Divider, Stack, TextField, Typography } from '@mui/material';
import Card from '@js/components/middleComponents/card';

import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import useAppDispatch from '@js/hooks/useAppDispatch';
import { Control, SubmitHandler, useForm, useFormState } from 'react-hook-form';
import addLocations from '@js/api/admin/addLocations';
import useAppSelector from '@js/hooks/useAppSelector';
import { adminApi } from '@js/api/admin/indexQuery';
import { setSearchUser } from '@js/state/inputs/inputsState';

type Tprops = {};

export default ({}: Tprops) => {
    const { Container, Item, ItemTitle, CardList } = style();

    return (
        <Container>
            <Divider style={{ marginBottom: '-3em' }} />

            <Item>
                <Typography variant="h5">Сотрудники</Typography>
                <IsolateInput />
                <IsolateCarlList />
            </Item>
        </Container>
    );
};

function IsolateInput() {
    const dispatch = useAppDispatch();
    const state = useAppSelector(state => state.inputsState.searchUser);
    return (
        <TextField
            style={{ width: '40vw', margin: '0' }}
            label="Название"
            id="outlined-size-small"
            size="small"
            value={state}
            onChange={e => dispatch(setSearchUser(e.target.value))}
        />
    );
}

function IsolateCarlList() {
    const adminToken = useAppSelector(state => state.adminState.token);
    const { data: userData, refetch: usersRefetch } = adminApi.useGetUsersQuery(adminToken) || [];
    const { data: awardsData } = adminApi.useGetAwardsQuery(adminToken) || [];
    const { data: locationsData, refetch: locationsRefetch } =
        adminApi.useGetLocationQuery(adminToken) || [];

    const { Container, Item, ItemTitle, CardList } = style();

    const searchUser = useAppSelector(state => state.inputsState.searchUser);

    const [search, setSearch] = useState(userData?.content || []);
    useEffect(() => {
        setSearch(userData?.content || []);
    }, [userData]);

    useEffect(() => {
        setSearch(p => {
            const serchList = userData?.content || [];
            return serchList.filter(el =>
                (el.firstName + ' ' + el.lastName).toLowerCase().includes(searchUser.toLowerCase()),
            );
        });
    }, [searchUser]);
    return (
        <CardList style={{ flexDirection: 'column' }}>
            {userData?.content.length == 0 && <>Пока что пусто</>}
            {search.map((el, i) => (
                <Card
                    actions
                    key={i}
                    content={{
                        title: el.firstName + ' ' + el.lastName,
                        text: el.phone,
                        id: el.id,
                        location: el.location,
                    }}
                    names={awardsData?.content.map(n => ({
                        title: n.name,
                        id: n.id,
                        targetId: el.id,
                    }))}
                    typeCard="user"
                    list
                    initChip={el.employeeAwards?.map(el => el.awardTitle)}
                    locations={locationsData?.content}
                    refetch={usersRefetch}
                />
            ))}
        </CardList>
    );
}
