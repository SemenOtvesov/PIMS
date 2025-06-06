import React from 'react';
import style from './style';
import { TactiveSection } from '@js/types/state/activeSection';

import AssignRewardLocation from './mainSections/AssignRewardLocations';
import AssignRewardUsers from './mainSections/AssignRewardUsers';
import AddAwards from './mainSections/AddAwards';
import News from './mainSections/News';
import ApprovalRegistrations from './mainSections/ApprovalRegistrations';

type Tprops = { activeSection: TactiveSection };

export default ({ activeSection }: Tprops) => {
    const { Container } = style();

    if (activeSection == 'AssignRewardLocations') {
        return (
            <Container>
                <AssignRewardLocation />
            </Container>
        );
    }
    if (activeSection == 'AssignRewardUsers') {
        return (
            <Container>
                <AssignRewardUsers />
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
