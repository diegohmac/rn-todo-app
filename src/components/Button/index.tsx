import { TouchableOpacity } from 'react-native'
import React from 'react'

import { theme } from '../../styles/theme';

type Props = {
    children: React.ReactNode;
    size?: 'small' | 'default';
    onPress: () => void;
    type?: "filled" | "text";
}

export default function Button({ children, size = "default", onPress, type = "filled" }: Props) {
    return (
        <TouchableOpacity
            style={{
                width: size === 'small' ? 32 : 52,
                height: size === 'small' ? 32 : 52,
                backgroundColor: type === "filled" ? theme.colors.blueDark : 'transparent',
                borderRadius: 6,
                alignItems: 'center',
                justifyContent: 'center',
            }}
            onPress={onPress}
        >
            {children}
        </TouchableOpacity>
    )
}