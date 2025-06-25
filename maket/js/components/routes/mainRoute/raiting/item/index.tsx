import React, { useEffect } from 'react';
import style from './style';

import { TlocationUser } from '@js/types/state/location';

type Tprops = { item: TlocationUser; itemNum: number };

export default ({ item, itemNum }: Tprops) => {
    const { Container, TextBox, Title, Text, MainContent, TitleNum } = style();

    useEffect(() => {
        calcSize();
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
                    id="textBlock"
                    onClick={(e: any) => {
                        if (e.target.className.includes('hide')) {
                            e.target.classList.add('open');
                            e.target.classList.remove('hide');
                            calcSize();
                        } else {
                            e.target.classList.remove('open');
                            e.target.classList.add('hide');
                            setTimeout(() => {
                                calcSize();
                            }, 300);
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

function calcSize() {
    const items = document.querySelectorAll('[data-raiting-item]');
    items.forEach(el => {
        const textBlock = el.querySelector('#textBlock');

        const height = (textBlock?.scrollHeight || 0) + 36;
        el.setAttribute(
            'style',
            `height: ${height}px; min-height: ${height}px ; max-height: ${height}px`,
        );
    });
}
