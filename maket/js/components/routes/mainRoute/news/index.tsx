import React, { useEffect } from 'react';
import style from './style';
import Item from './item';
import { userApi } from '@js/api/user/indexQuery';
import useAppSelector from '@js/hooks/useAppSelector';

type Tprops = {};

export default ({}: Tprops) => {
    const {
        Container,
        Title,
        Main,
        BackCircle,
        BackCircleMain,
        BackCircleYellow,
        BackCircleGray,
        ImageAbsolute,
    } = style();

    const userToken = useAppSelector(state => state.userState.token);
    const newsList = userApi.useGetNewsQuery(userToken);

    const activeNews = useAppSelector(state => state.activeSectionState.activeNews);

    return (
        <Container>
            <Title>PIMS News</Title>
            <BackCircle>
                <BackCircleMain>
                    <BackCircleYellow />
                    <BackCircleGray />
                </BackCircleMain>
            </BackCircle>

            {activeNews ? (
                <ImageAbsolute
                    style={{
                        top: '5.5em',
                        left: '0.5em',
                    }}
                    className="icon-Good-news"
                />
            ) : (
                <>
                    <ImageAbsolute
                        style={{
                            top: '0.5em',
                            left: '0.5em',
                        }}
                        className="icon-whats-up-out-there"
                    />
                    <ImageAbsolute
                        style={{
                            top: '5.5em',
                            right: '0.5em',
                        }}
                        className="icon-insider-news"
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
