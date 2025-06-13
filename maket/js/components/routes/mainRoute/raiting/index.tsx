import React from 'react';
import style from './style';
import Item from './item';
import { userApi } from '@js/api/user/indexQuery';
import useAppSelector from '@js/hooks/useAppSelector';

// @ts-ignore: Unreachable code error
import AbcoluteImg1 from '@maket/img/icon/absoluteImg/cat1.png';
// @ts-ignore: Unreachable code error
import AbcoluteImg4 from '@maket/img/icon/absoluteImg/cat2.png';

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
        ImageAbsoluteDiv,
    } = style();

    const userToken = useAppSelector(state => state.userState.token);
    const newsList = userApi.useGetLocationQuery(userToken);

    return (
        <Container className="allow-scroll">
            <Title>Locations Rating</Title>
            <BackCircle>
                <BackCircleMain>
                    <BackCircleYellow />
                    <BackCircleGray />
                </BackCircleMain>
            </BackCircle>

            <ImageAbsoluteDiv
                style={{
                    bottom: '8em',
                    left: '50%',
                    transform: 'translate(-50%)',
                }}
                className="icon-Your-location-is-colored"
            />
            <ImageAbsolute
                style={{
                    top: '0em',
                    right: '0',
                    height: '7em',
                }}
                src={AbcoluteImg1}
            />
            <ImageAbsolute
                style={{
                    bottom: '10em',
                    left: '0',
                    height: '12em',
                }}
                src={AbcoluteImg4}
            />

            <Main>
                {newsList.data?.content.map((el, i) => <Item key={i} item={el} itemNum={i + 1} />)}
            </Main>
        </Container>
    );
};
