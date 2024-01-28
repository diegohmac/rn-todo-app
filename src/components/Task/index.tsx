import { View, Text } from 'react-native'
import React, { useState } from 'react'

import { styles } from './styles';
import { theme } from '../../styles/theme';
import Checkbox from '../Checkbox';
import Button from '../Button';
import { MaterialIcons } from '@expo/vector-icons';

export type TaskType = {
    text: string;
    isCompleted: boolean;
}

type Props = {
    task: TaskType;
    handleComplete: (newValue: boolean, text: string) => void;
    handleDelete: (text: string ) => void;
}

export default function Task({ task, handleComplete, handleDelete }: Props) {
    return (
        <View style={[styles.container, { borderColor: task.isCompleted ? theme.colors.gray500 : theme.colors.gray400 }]}>
            <Checkbox value={task.isCompleted} onChange={(newValue) => handleComplete(newValue, task.text)} />
            <Text style={[
                styles.text,
                task.isCompleted && {
                    textDecorationLine: 'line-through',
                    textDecorationStyle: 'solid',
                    color: theme.colors.gray300,
                }
            ]}>
                {task.text}
            </Text>
            <Button onPress={() => handleDelete(task.text)} type='text'>
                <MaterialIcons name="delete-outline" size={24} color={theme.colors.danger} />
            </Button>
        </View>
    )
}