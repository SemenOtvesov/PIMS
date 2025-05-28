import React from 'react';
import style from './style';
import { TactiveSection } from '@js/types/state/activeSection';

import AssignReward from './mainSections/AssignReward';
import AddAwards from './mainSections/AddAwards';
import News from './mainSections/News';
import ApprovalRegistrations from './mainSections/ApprovalRegistrations';

type Tprops = { activeSection: TactiveSection };

export default ({ activeSection }: Tprops) => {
    const { Container } = style();

    if (activeSection == 'AssignReward') {
        return (
            <Container>
                <AssignReward />
            </Container>
        );
    }
    if (activeSection == 'AddAwards') {
        return (
            <Container>
                <AddAwards />
            </Container>
        );
    }
    if (activeSection == 'News') {
        return (
            <Container>
                <News />
            </Container>
        );
    }
    if (activeSection == 'ApprovalRegistrations') {
        return (
            <Container>
                <ApprovalRegistrations />
            </Container>
        );
    }
};
