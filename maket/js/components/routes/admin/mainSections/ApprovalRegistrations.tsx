import React from 'react';
import style from './style';
import { Divider, Typography } from '@mui/material';
import Card from '@js/components/middleComponents/card';
import useAppSelector from '@js/hooks/useAppSelector';
import { adminApi } from '@js/api/admin/indexQuery';
import useAppDispatch from '@js/hooks/useAppDispatch';
import aproveUser from '@js/api/admin/aproveUser';
import declineUser from '@js/api/admin/declineUser';

type Tprops = {};

export default ({}: Tprops) => {
    const dispatch = useAppDispatch();
    const { Container, Item, ItemTitle, CardList } = style();

    const adminToken = useAppSelector(state => state.adminState.token);
    const { data: dataUsers, refetch: usersRefetch } = adminApi.useGetUsersQuery(adminToken) || [];
    const { data, refetch } = adminApi.useGetPendingApprovalsQuery(adminToken) || [];
    const { data: locationsData, refetch: locationsRefetch } =
        adminApi.useGetLocationQuery(adminToken) || [];

    return (
        <Container>
            <Divider style={{ marginBottom: '-3em' }} />
            <Item>
                <Typography variant="h5">Не подтверждённые пользователи</Typography>
                <CardList>
                    {data?.length == 0 && <>Пока что пусто</>}
                    {data?.map((el, i) => (
                        <Card
                            key={i}
                            confirmButton={{
                                confirmFn: () => {
                                    aproveUser(dispatch, adminToken, el.id, refetch);
                                },
                                rejectFn: () => {
                                    declineUser(dispatch, adminToken, el.id, refetch);
                                },
                            }}
                            content={{
                                title:
                                    el.firstName + ' ' + (el.middleName || '') + ' ' + el.lastName,
                                text: el.phone,
                                image: `https://t.me/i/userpic/160/${el.telegramId}.jpg`,
                                id: el.id,
                                location: el.location,
                            }}
                            typeCard="addUser"
                            locations={locationsData?.content}
                            refetch={usersRefetch}
                        />
                    ))}
                </CardList>
            </Item>
        </Container>
    );
};
