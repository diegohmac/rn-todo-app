import { View } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles'
import Input from '../Input'
import Button from '../Button'
import { MaterialIcons } from '@expo/vector-icons';
import { theme } from '../../styles/theme'

export default function TodoList() {
    const [tasks, setTasks] = useState<string[]>([]);
    const [newTask, setNewTask] = useState('')

    const handleAddTask = () => {
        console.log('Add task')
    }

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <Input value={newTask} onChange={setNewTask} placeholder='Add a new task' />
                <Button onPress={handleAddTask}>
                    <MaterialIcons name="add-circle-outline" size={24} color={theme.colors.gray100} />
                </Button>
            </View>
        </View>
    )
}