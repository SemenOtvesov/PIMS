import React from 'react';
import style from './style';
import { TNews } from '@js/types/state/news';

// @ts-ignore: Unreachable code error
import cardAdminBack from '@maket/img/cardAdminBack.png';
import useAppDispatch from '@js/hooks/useAppDispatch';
import { setActiveNews } from '@js/state/activeSection/activeSectionState';

type Tprops = { item: TNews; full?: boolean };

export default ({ item, full }: Tprops) => {
    const dispatch = useAppDispatch();
    const { Container, Image, TextBox, Title, Text, MainContent } = style();
    return (
        <Container
            onClick={() => {
                dispatch(setActiveNews(item));
            }}
        >
            <Image
                src={
                    item.images && item.images[0]
                        ? 'data:image/jpeg;base64,' + item.images[0]
                        : cardAdminBack
                }
            ></Image>
            <TextBox>
                <Title>{item.title}</Title>
                <Text>{item.publishDate?.split('T')[0] || 'Дата не указана'}</Text>
                {full && <MainContent>{item.content}</MainContent>}
            </TextBox>
        </Container>
    );
};
