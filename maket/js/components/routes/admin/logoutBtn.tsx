import * as React from 'react';
import Button from '@mui/material/Button';
import LogoutIcon from '@mui/icons-material/Logout';
import Stack from '@mui/material/Stack';
import useLogoutAdmin from '@js/hooks/admin/useLogoutAdmin';

export default function IconLabelButtons() {
    const logout = useLogoutAdmin();
    return (
        <Stack direction="row" spacing={2}>
            <Button
                onClick={() => {
                    logout();
                }}
                variant="contained"
                endIcon={<LogoutIcon />}
            >
                Выйти
            </Button>
        </Stack>
    );
}
