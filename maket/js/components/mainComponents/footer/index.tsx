import React, { memo, useEffect, useRef } from 'react';
import style from './style';

import useAppSelector from '@js/hooks/useAppSelector';
import useAppDispatch from '@js/hooks/useAppDispatch';
import { setActiveNews, setSection } from '@js/state/activeSection/activeSectionState';

export default memo(
    () => {
        const dispatch = useAppDispatch();
        const { Container, Item, IconBox, Icon, ItemText } = style();
        const section = useAppSelector(state => state.activeSectionState.section);

        const newsRef = useRef<HTMLDivElement>(null);
        const raitingRef = useRef<HTMLDivElement>(null);
        const profileRef = useRef<HTMLDivElement>(null);

        useEffect(() => {
            setTimeout(() => {
                if (section == 'news') {
                    newsRef.current?.classList.add('active');
                    raitingRef.current?.classList.remove('active');
                    profileRef.current?.classList.remove('active');
                }
                if (section == 'raiting') {
                    newsRef.current?.classList.remove('active');
                    raitingRef.current?.classList.add('active');
                    profileRef.current?.classList.remove('active');
                }
                if (section == 'profile') {
                    newsRef.current?.classList.remove('active');
                    raitingRef.current?.classList.remove('active');
                    profileRef.current?.classList.add('active');
                }
            }, 300);
        });

        return (
            <Container>
                <Item
                    ref={newsRef}
                    onClick={() => {
                        dispatch(setSection('news'));
                        dispatch(setActiveNews(null));
                    }}
                >
                    <IconBox>
                        <Icon className="icon-news"></Icon>
                    </IconBox>
                    <ItemText>Новости</ItemText>
                </Item>
                <Item
                    ref={raitingRef}
                    onClick={() => {
                        dispatch(setSection('raiting'));
                    }}
                >
                    <IconBox>
                        <Icon className="icon-profile"></Icon>
                    </IconBox>
                    <ItemText>Рейтинг</ItemText>
                </Item>
                <Item
                    ref={profileRef}
                    onClick={() => {
                        dispatch(setSection('profile'));
                    }}
                >
                    <IconBox>
                        <Icon className="icon-raiting"></Icon>
                    </IconBox>
                    <ItemText>Профиль</ItemText>
                </Item>
            </Container>
        );
    },
    () => true,
);
