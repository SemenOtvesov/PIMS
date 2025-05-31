import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { TactiveSection } from '@js/types/state/activeSection';
import Main from './main';
import useAppSelector from '@js/hooks/useAppSelector';

import LogoutBtn from './logoutBtn';

import FormAuth from './formAuth';

const drawerWidth = 240;

const drawerEl = ['Присвоить награду', 'Доп. Награды', 'Новости', 'Одобрение регистраций'];
const drawerElLink: ['AssignReward', 'AddAwards', 'News', 'ApprovalRegistrations'] = [
    'AssignReward',
    'AddAwards',
    'News',
    'ApprovalRegistrations',
];

export default function ClippedDrawer() {
    const [activeSection, setactiveSection] = React.useState<TactiveSection>('AssignReward');

    const adminToken = useAppSelector(state => state.adminState.token);

    if (adminToken == '') {
        return <FormAuth />;
    }

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" sx={{ zIndex: theme => theme.zIndex.drawer + 1 }}>
                <Toolbar style={{ justifyContent: 'space-between' }}>
                    <Typography variant="h6" noWrap component="div">
                        Админ панель
                    </Typography>
                    <LogoutBtn />
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
                }}
            >
                <Toolbar />
                <Box sx={{ overflow: 'auto' }}>
                    <List>
                        {drawerEl.map((text, index) => (
                            <ListItem
                                key={text}
                                disablePadding
                                onClick={() => {
                                    setactiveSection(drawerElLink[index]);
                                }}
                            >
                                <ListItemButton>
                                    <ListItemIcon>
                                        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                    </ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, overflow: 'auto', maxHeight: 'caLC(100vh - 64px)' }}
                className="scrollbar"
            >
                <Toolbar />
                <Typography variant="h4" sx={{ marginBottom: 2 }}>
                    {drawerEl[drawerElLink.findIndex(el => el == activeSection)]}
                </Typography>

                <Main activeSection={activeSection} />
            </Box>
        </Box>
    );
}
