import React from 'react';
import style from './style';
import Item from './item';

type Tprops = {};

export default ({}: Tprops) => {
    const { Container, Title, Main } = style();

    const newsList = [{}, {}, {}, {}, {}];

    return (
        <Container>
            <Title>Новости PIMS</Title>
            <Main>
                {newsList.map(el => (
                    <Item></Item>
                ))}
            </Main>
        </Container>
    );
};
