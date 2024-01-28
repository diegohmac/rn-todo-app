import { TextInput } from 'react-native'
import React, { useState } from 'react'

import { styles } from './styles';
import { theme } from '../../styles/theme';

type Props = {
    value: string;
    onChange: (text: string) => void;
    placeholder: string;
}

export default function Input({ value, onChange, placeholder, }: Props) {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <TextInput
            style={[styles.input, (isFocused || !!value) && { borderColor: theme.colors.purpleDark, borderWidth: 1 }]}
            placeholder={placeholder} 
            placeholderTextColor={theme.colors.gray300}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            value={value}
            onChangeText={onChange}
        />
    )
}