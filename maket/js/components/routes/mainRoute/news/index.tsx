import React, { useEffect } from 'react';
import style from './style';
import Item from './item';
import { userApi } from '@js/api/user/indexQuery';
import useAppSelector from '@js/hooks/useAppSelector';

// @ts-ignore: Unreachable code error
import AbcoluteImg1 from '@maket/img/icon/absoluteImg/whats up out there__.png';
// @ts-ignore: Unreachable code error
import AbcoluteImg2 from '@maket/img/icon/absoluteImg/insider news.png';
// @ts-ignore: Unreachable code error
import AbcoluteImg3 from '@maket/img/icon/absoluteImg/Good news.png';

type Tprops = {};

export default ({}: Tprops) => {
    const { Container, Title, Main, BackCircle, ImageAbsolute } = style();

    const userToken = useAppSelector(state => state.userState.token);
    const newsList = userApi.useGetNewsQuery(userToken);

    const activeNews = useAppSelector(state => state.activeSectionState.activeNews);

    return (
        <Container>
            <Title>PIMS News</Title>
            <BackCircle />

            {activeNews ? (
                <ImageAbsolute
                    style={{
                        top: '6.25em',
                        left: '0.5em',
                    }}
                    src={AbcoluteImg3}
                />
            ) : (
                <>
                    <ImageAbsolute
                        style={{
                            top: '0.5em',
                            left: '0.5em',
                        }}
                        src={AbcoluteImg1}
                    />
                    <ImageAbsolute
                        style={{
                            top: '5.5em',
                            right: '0.5em',
                        }}
                        src={AbcoluteImg2}
                    />
                </>
            )}

            <Main>
                {activeNews ? (
                    <Item item={activeNews} full />
                ) : (
                    newsList.data?.content.map((el, i) => <Item key={i} item={el} />)
                )}
            </Main>
        </Container>
    );
};
