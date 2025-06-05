import React from 'react';
import style from './style';
import { TuserUser } from '@js/types/state/users';

export default ({ user }: { user: TuserUser | undefined }) => {
    const { Container, Title, Main, Achievement, AchievementTitle, AchievementText } = style();
    console.log(user);
    return (
        <Container>
            <Title>Your achievements</Title>
            <Main>
                {user?.employeeAwards?.map(el => (
                    <Achievement>
                        <AchievementTitle>{el.awardTitle}</AchievementTitle>
                        <AchievementText>{el.awardDescription}</AchievementText>
                    </Achievement>
                ))}
            </Main>
        </Container>
    );
};
