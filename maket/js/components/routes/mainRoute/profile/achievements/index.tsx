import React from 'react';
import style from './style';
import { TuserUser } from '@js/types/state/users';

export default ({ user }: { user: TuserUser | undefined }) => {
    const { Container, Title, Main, Achievement, AchievementTitle, AchievementText } = style();

    const styleList = user?.employeeAwards.map((el, i) => numberText(i + 1));

    return (
        <Container>
            <Title>Your achievements</Title>
            {user?.employeeAwards.length == 0 && (
                <div style={{ textAlign: 'center', width: '100%' }}>Пока что здесь пусто</div>
            )}
            <Main>
                {user?.employeeAwards?.map((el, i) => (
                    <Achievement className={`type${styleList[i]}`}>
                        <AchievementTitle
                            className={`${Number.isNaN(+el.awardTitle) ? '' : 'number'}`}
                        >
                            {el.awardTitle}
                        </AchievementTitle>
                        <AchievementText>{el.awardDescription}</AchievementText>
                    </Achievement>
                ))}
            </Main>
        </Container>
    );
};

function numberText(num: number) {
    let retVal = 1;
    if ([0].includes(num % 6)) {
        retVal = 1;
    }
    if ([1].includes(num % 6)) {
        retVal = 1;
    }
    if ([2].includes(num % 6)) {
        retVal = 2;
    }
    if ([3].includes(num % 6)) {
        retVal = 2;
    }

    if ([4].includes(num % 6)) {
        retVal = 5;
    }
    if ([5].includes(num % 6)) {
        retVal = 3;
    }
    if ([6].includes(num % 6)) {
        retVal = 3;
    }
    if ([7].includes(num % 6)) {
        retVal = 2;
    }

    return retVal;
}
