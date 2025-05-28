import React from 'react';
import style from './style';
import { Divider } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Tlocation } from '@js/types/state/location';
import Card from '@js/components/middleComponents/card';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Stack from '@mui/material/Stack';

type Tprops = {};

export default ({}: Tprops) => {
    const { Container, Item, ItemTitle, CardList } = style();

    const locations: Array<Tlocation> = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];
    return (
        <Container>
            <Divider style={{ marginBottom: '-3em' }} />
            <Item>
                <Typography variant="h5">Создать новость</Typography>
                <CreateForm />
            </Item>
            <Item>
                <Typography variant="h5">Уже существующие новости</Typography>
                <CardList>
                    {locations.map(el => (
                        <Card />
                    ))}
                </CardList>
            </Item>
        </Container>
    );
};

function CreateForm() {
    const { FromWrapper } = style();
    return (
        <Box
            component="form"
            sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
            noValidate
            autoComplete="off"
        >
            <FromWrapper>
                <TextField
                    style={{ width: '40vw', margin: '0' }}
                    label="Название"
                    id="outlined-size-small"
                    defaultValue="Название"
                    size="small"
                />
                <TextField
                    style={{ width: '40vw', margin: '0' }}
                    label="Описание"
                    id="outlined-size-small"
                    defaultValue="Описание"
                    size="small"
                />

                <Stack direction="row" spacing={2}>
                    <Button style={{ width: '40vw' }} variant="contained" disabled>
                        Создать
                    </Button>
                </Stack>
            </FromWrapper>
        </Box>
    );
}
