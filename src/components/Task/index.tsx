import { View, Text } from 'react-native'
import React, { useState } from 'react'

import { styles } from './styles';
import { theme } from '../../styles/theme';
import Checkbox from '../Checkbox';
import Button from '../Button';
import { MaterialIcons } from '@expo/vector-icons';

type Props = {
    text: string;
    handleDelete: (text: string) => void;
}

export default function Task({ text, handleDelete }: Props) {
    const [isChecked, setIsChecked] = useState(false);

    return (
        <View style={[styles.container, { borderColor: isChecked ? theme.colors.gray500 : theme.colors.gray400 }]}>
            <Checkbox value={isChecked} onChange={setIsChecked} />
            <Text style={[
                styles.text,
                isChecked && {
                    textDecorationLine: 'line-through',
                    textDecorationStyle: 'solid',
                    color: theme.colors.gray300,
                }
            ]}>
                {text}
            </Text>
            <Button onPress={() => handleDelete(text)} type='text'>
                <MaterialIcons name="delete-outline" size={24} color={theme.colors.danger} />
            </Button>
        </View>
    )
}