import React, { memo } from 'react';
import style from './style';

import useAppSelector from '@js/hooks/useAppSelector';

export default memo(
    () => {
        const { Container, Item, IconBox, Icon, ItemText } = style();
        const section = useAppSelector(state => state.activeSectionState.section);
        return (
            <Container>
                <Item>
                    <IconBox>
                        <Icon></Icon>
                    </IconBox>
                    <ItemText>Новости</ItemText>
                </Item>
                <Item>
                    <IconBox>
                        <Icon></Icon>
                    </IconBox>
                    <ItemText>Рейтинг</ItemText>
                </Item>
                <Item>
                    <IconBox>
                        <Icon></Icon>
                    </IconBox>
                    <ItemText>Профиль</ItemText>
                </Item>
            </Container>
        );
    },
    () => true,
);
