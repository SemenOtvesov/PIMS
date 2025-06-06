import React from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';

import { Theme, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Chip from '@mui/material/Chip';

// @ts-ignore: Unreachable code error
import cardAdminBack from '@maket/img/cardAdminBack.png';
import { Button } from '@mui/material';
import useAppDispatch from '@js/hooks/useAppDispatch';
import addLocationAward from '@js/api/admin/addLocationAward';
import useAppSelector from '@js/hooks/useAppSelector';
import adduserAward from '@js/api/admin/adduserAward';

export default ({
    content,
    actions,
    names,
    typeCard,
    initChip,
    confirmButton,
    list,
}: {
    content: { title: string; text: string; text2?: string; image?: string };
    names?: Array<{ title: string; id: string; targetId: string }>;
    initChip?: Array<string>;
    typeCard?: 'user' | 'location';
    actions?: boolean;
    list?: boolean;
    confirmButton?: { confirmFn: () => void; rejectFn: () => void };
}) => {
    return (
        <Card
            sx={{
                flex: list ? '1 1' : '0 0 19vw',
                width: '80vw',
                minWidth: '19vw',
                maxWidth: list ? '100%' : '19vw',
                display: 'flex',
                flexDirection: list ? 'row' : 'column',
            }}
        >
            <CardActionArea>
                {!list && (
                    <CardMedia
                        component="img"
                        height="140"
                        image={content.image ? content.image : cardAdminBack}
                        alt="green iguana"
                    />
                )}
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {content.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {content.text}
                    </Typography>
                    {content.text2 && (
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            {content.text2}
                        </Typography>
                    )}
                </CardContent>
            </CardActionArea>
            {actions && names ? (
                <CardActions style={{ width: list ? '50vw' : '', paddingRight: '1.5em' }}>
                    <SelectChip names={names} initChip={initChip} typeCard={typeCard} list={list} />
                </CardActions>
            ) : (
                ''
            )}
            {confirmButton ? <Butons confirmButton={confirmButton} /> : ''}
        </Card>
    );
};

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        },
    },
};

function getStyles(name: string, personName: readonly string[], theme: Theme) {
    return {
        fontWeight: personName.includes(name)
            ? theme.typography.fontWeightMedium
            : theme.typography.fontWeightRegular,
    };
}

function SelectChip({
    names,
    initChip,
    typeCard,
    list,
}: {
    names: Array<{ title: string; id: string; targetId: string }>;
    initChip?: Array<string>;
    typeCard?: 'user' | 'location';
    list?: boolean;
}) {
    const theme = useTheme();
    const dispatch = useAppDispatch();
    const adminToken = useAppSelector(state => state.adminState.token);
    const [personName, setPersonName] = React.useState<string[]>(initChip || []);

    const handleChange = (event: SelectChangeEvent<typeof personName>) => {
        const {
            target: { value },
        } = event;

        const award = names.find(el => el.title == value[value.length - 1]);
        const awardId = award?.id;
        const targetId = award?.targetId;
        if (awardId && targetId) {
            if (typeCard == 'user') {
                adduserAward(dispatch, adminToken, awardId, targetId);
            } else {
                addLocationAward(dispatch, adminToken, awardId, targetId);
            }
        }

        setPersonName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    return (
        <div>
            <FormControl sx={{ m: 1, width: list ? '40vw' : 'calc(19vw - 2em)' }}>
                <InputLabel id="demo-multiple-chip-label">Chip</InputLabel>
                <Select
                    labelId="demo-multiple-chip-label"
                    id="demo-multiple-chip"
                    multiple
                    value={personName}
                    onChange={handleChange}
                    input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                    renderValue={selected => (
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                            {selected.map(value => (
                                <Chip key={value} label={value} />
                            ))}
                        </Box>
                    )}
                    MenuProps={MenuProps}
                >
                    {names.map(name => (
                        <MenuItem
                            key={name.id}
                            value={name.title}
                            style={getStyles(name.title, personName, theme)}
                        >
                            {name.title}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}

function Butons({
    confirmButton,
}: {
    confirmButton: { confirmFn: () => void; rejectFn: () => void };
}) {
    return (
        <div style={{ display: 'flex', gap: '2em', margin: '1em' }}>
            <Button
                style={{ flex: '1 1' }}
                onClick={() => {
                    confirmButton.confirmFn();
                }}
                variant="contained"
                color="success"
            >
                Подтвердить
            </Button>
            <Button
                style={{ flex: '1 1' }}
                onClick={() => {
                    confirmButton.rejectFn();
                }}
                variant="contained"
                color="error"
            >
                Отклонить
            </Button>
        </div>
    );
}
