import React from 'react';
import style from './style';
import { Divider, Stack } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Tlocation } from '@js/types/state/location';
import Card from '@js/components/middleComponents/card';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

type Tprops = {};

export default ({}: Tprops) => {
    const { Container, Item, ItemTitle, CardList } = style();

    const locations: Array<Tlocation> = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];
    return (
        <Container>
            <Divider style={{ marginBottom: '-3em' }} />
            <Item>
                <Typography variant="h5">Создать новую награду</Typography>
                <CreateForm />
            </Item>
            <Item>
                <Typography variant="h5">Уже существующие награды</Typography>
                <CardList>
                    {locations.map(el => (
                        <Card />
                    ))}
                </CardList>
            </Item>
        </Container>
    );
};

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

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
                <Button
                    style={{ width: '40vw' }}
                    component="label"
                    role={undefined}
                    variant="contained"
                    tabIndex={-1}
                    startIcon={<CloudUploadIcon />}
                >
                    Добавить фото
                    <VisuallyHiddenInput
                        type="file"
                        onChange={event => console.log(event.target.files)}
                        multiple
                    />
                </Button>
                <Stack direction="row" spacing={2}>
                    <Button style={{ width: '40vw' }} variant="contained" disabled>
                        Создать
                    </Button>
                </Stack>
            </FromWrapper>
        </Box>
    );
}
