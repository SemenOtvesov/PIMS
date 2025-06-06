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
                <Text
                    onClick={(e: any) => {
                        if (e.target.className.includes('hide')) {
                            e.target.classList.add('open');
                            e.target.classList.remove('hide');
                        } else {
                            e.target.classList.remove('open');
                            e.target.classList.add('hide');
                        }
                    }}
                    className="hide"
                >
                    Награды: {item.locationAwards.length == 0 ? 'Пока нет' : ''}{' '}
                    {item.locationAwards?.map(el => el.awardTitle + ', ')}
                </Text>
            </TextBox>
        </Container>
    );
};
