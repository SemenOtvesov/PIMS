import React from 'react';
import style from './style';
import { Divider, Typography } from '@mui/material';
import { Tlocation } from '@js/types/state/location';
import Card from '@js/components/middleComponents/card';

type Tprops = {};

export default ({}: Tprops) => {
    const { Container, Item, ItemTitle, CardList } = style();

    //какой то стейт с локациями
    const locations: Array<Tlocation> = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];

    return (
        <Container>
            <Divider style={{ marginBottom: '-3em' }} />
            <Item>
                <Typography variant="h5">Не подтверждённые пользователи</Typography>
                <CardList>
                    {locations.map(el => (
                        <Card confirmButton />
                    ))}
                </CardList>
            </Item>
        </Container>
    );
};
