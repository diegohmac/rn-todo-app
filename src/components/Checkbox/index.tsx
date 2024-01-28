import ExpoCheckbox from 'expo-checkbox';
import React from 'react'

import { styles } from './styles';
import { theme } from '../../styles/theme';

type Props = {
    value: boolean;
    onChange: (value: boolean) => void;
}

export default function Checkbox({ value, onChange, }: Props) {
    return (
        <ExpoCheckbox
            color={value ? theme.colors.purpleDark : theme.colors.blue}
            style={styles.checkbox}
            value={value}
            onValueChange={onChange}
        />
    )
}