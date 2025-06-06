import React from 'react';
import style from './style';
import { TuserUser } from '@js/types/state/users';

export default ({ user }: { user: TuserUser | undefined }) => {
    const { Container, Title, Main, Achievement, AchievementTitle, AchievementText } = style();

    const styleList = user?.employeeAwards.map(el => getWeightedRandom());

    return (
        <Container>
            <Title>Your achievements</Title>
            <Main>
                {user?.employeeAwards?.map((el, i) => (
                    <Achievement className={`type${styleList[i]}`}>
                        <AchievementTitle>{el.awardTitle}</AchievementTitle>
                        <AchievementText>{el.awardDescription}</AchievementText>
                    </Achievement>
                ))}
            </Main>
        </Container>
    );
};

function getWeightedRandom() {
    const numbers = [1, 1, 1, 2, 2, 3, 4, 5]; // 1 и 2 встречаются в 3 раза чаще
    const randomIndex = Math.floor(Math.random() * numbers.length);
    return numbers[randomIndex];
}
