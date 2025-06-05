import React from 'react';
import style from './style';

import { TlocationUser } from '@js/types/state/location';

type Tprops = { item: TlocationUser; itemNum: number };

export default ({ item, itemNum }: Tprops) => {
    const { Container, TextBox, Title, Text, MainContent } = style();
    return (
        <Container>
            <TextBox>
                <Title>
                    {itemNum}.{'  '}
                    {item.name}
                </Title>
                <Text>
                    Награды: {item.locationAwards.length == 0 ? 'Пока нет' : ''}{' '}
                    {item.locationAwards?.map(el => el.awardTitle + ', ')}
                </Text>
            </TextBox>
        </Container>
    );
};
