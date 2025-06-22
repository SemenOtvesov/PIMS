import React, { useEffect } from 'react';
import style from './style';

import { TlocationUser } from '@js/types/state/location';

type Tprops = { item: TlocationUser; itemNum: number };

export default ({ item, itemNum }: Tprops) => {
    const { Container, TextBox, Title, Text, MainContent, TitleNum } = style();

    useEffect(() => {
        const items = document.querySelectorAll('[data-raiting-item]');
        items.forEach(el => {
            el.setAttribute(
                'style',
                `height: ${el.scrollHeight}px; min-height: ${el.scrollHeight}px ; max-height: ${el.scrollHeight}px`,
            );
        });
    });
    return (
        <Container data-raiting-item>
            <TextBox data-raiting-item>
                <Title>
                    <TitleNum>
                        {itemNum}.{'  '}
                    </TitleNum>
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
                    Награды: {item.locationAwards.length == 0 ? 'пока нет' : ''}{' '}
                    {item.locationAwards?.map((el, i) =>
                        i == 0 ? el.awardTitle : ', ' + el.awardTitle,
                    )}
                </Text>
            </TextBox>
        </Container>
    );
};
