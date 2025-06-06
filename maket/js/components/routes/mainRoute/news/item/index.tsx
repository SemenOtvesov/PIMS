import React from 'react';
import style from './style';
import { TNews } from '@js/types/state/news';

// @ts-ignore: Unreachable code error
import cardAdminBack from '@maket/img/cardAdminBack.png';
import useAppDispatch from '@js/hooks/useAppDispatch';
import { setActiveNews } from '@js/state/activeSection/activeSectionState';

type Tprops = { item: TNews; full?: boolean };

const monthsObj = {
    '01': 'Января',
    '02': 'Февраля',
    '03': 'Марта',
    '04': 'Апреля',
    '05': 'Мая',
    '06': 'Июня',
    '07': 'Июля',
    '08': 'Августа',
    '09': 'Сентября',
    '10': 'Октября',
    '11': 'Ноября',
    '12': 'Декабря',
};

export default ({ item, full }: Tprops) => {
    const dispatch = useAppDispatch();
    const { Container, Image, TextBox, Title, Text, MainContent } = style();

    const date = item.publishDate?.split('T')[0].split('-');
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
                <Text>
                    {`${date ? date[2] : ''} ${date ? monthsObj[date[1]] : ''} ${
                        date ? date[0] : ''
                    }` || 'Дата не указана'}
                </Text>
                {full && <MainContent>{item.content}</MainContent>}
            </TextBox>
        </Container>
    );
};
