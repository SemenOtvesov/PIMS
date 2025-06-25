import React, { memo, useEffect, useLayoutEffect, useRef, useState } from 'react';
import style from './style';

import useAppSelector from '@js/hooks/useAppSelector';
import useAppDispatch from '@js/hooks/useAppDispatch';
import { setActiveNews, setSection } from '@js/state/activeSection/activeSectionState';

let checkRender = false;

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
            setTimeout(() => {
                checkRender = false;
                document.body.classList.remove('liteBlur');
                setTimeout(() => {
                    document.body.classList.remove('notPointer');
                }, 150);
            }, 300);
        });

        return (
            <Container>
                <Item
                    ref={newsRef}
                    onClick={() => {
                        checkRender = true;
                        document.body.classList.add('notPointer');
                        document.body.classList.add('liteBlur');

                        setTimeout(() => {
                            dispatch(setSection('news'));
                            dispatch(setActiveNews(null));

                            setTimeout(() => {
                                clear();
                            }, 500);
                        }, 300);
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
                        checkRender = true;
                        document.body.classList.add('notPointer');
                        document.body.classList.add('liteBlur');
                        setTimeout(() => {
                            dispatch(setSection('raiting'));
                            setTimeout(() => {
                                clear();
                            }, 500);
                        }, 300);
                    }}
                >
                    <IconBox>
                        <Icon className="icon-raiting"></Icon>
                    </IconBox>
                    <ItemText>Рейтинг</ItemText>
                </Item>
                <Item
                    ref={profileRef}
                    onClick={() => {
                        checkRender = true;
                        document.body.classList.add('notPointer');
                        document.body.classList.add('liteBlur');
                        setTimeout(() => {
                            dispatch(setSection('profile'));
                            setTimeout(() => {
                                clear();
                            }, 500);
                        }, 300);
                    }}
                >
                    <IconBox>
                        <Icon className="icon-profile"></Icon>
                    </IconBox>
                    <ItemText>Профиль</ItemText>
                </Item>
            </Container>
        );
    },
    () => true,
);

function clear() {
    if (checkRender) {
        checkRender = false;
        document.body.classList.remove('liteBlur');
        setTimeout(() => {
            document.body.classList.remove('notPointer');
        }, 150);
    }
}
