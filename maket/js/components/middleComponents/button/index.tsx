import React, { HTMLAttributes } from 'react';
import style from './style';

interface Tprops extends HTMLAttributes<HTMLButtonElement> {
    type: 'big' | 'normal';
    children: any;
    disabled?: boolean;
}

export default ({ type, children, disabled, ...props }: Tprops) => {
    const { Button } = style(type, disabled);
    return (
        <Button disabled={disabled} {...props}>
            {children}
        </Button>
    );
};
