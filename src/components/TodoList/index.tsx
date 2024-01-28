import { View, Text, FlatList, Alert } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles'
import Input from '../Input'
import Button from '../Button'
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { theme } from '../../styles/theme'
import Task, { TaskType } from '../Task'

export default function TodoList() {
    const [tasks, setTasks] = useState<TaskType[]>([]);

    const [newTask, setNewTask] = useState('')

    const handleAddTask = (text: string) => {
        setNewTask('')
        if (tasks.some(task => task.text === text)) {
            return Alert.alert("Task already exists.", "You can't create duplicated tasks.");
        }
        setTasks(prev => [...prev, { text, isCompleted: false }])
    }

    const handleDeleteTask = () => {
        console.log('Delete task')
    }

    const handleCompleteTask = () => {
        console.log('Complete task')
    }

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <Input value={newTask} onChange={setNewTask} placeholder='Add a new task' />
                <Button onPress={() => handleAddTask(newTask)}>
                    <MaterialIcons name="add-circle-outline" size={24} color={theme.colors.gray100} />
                </Button>
            </View>
            <View style={[styles.statusContainer, tasks.length === 0 && { borderBottomColor: theme.colors.gray400 }]}>
                <View style={styles.status}>
                    <Text style={[styles.statusText, { color: theme.colors.blue }]}>Created</Text>
                    <View style={styles.statusNumberContainer}>
                        <Text style={styles.statusNumber}>21</Text>
                    </View>
                </View>
                <View style={styles.status}>
                    <Text style={[styles.statusText, { color: theme.colors.purple }]}>Finished</Text>
                    <View style={styles.statusNumberContainer}>
                        <Text style={styles.statusNumber}>5</Text>
                    </View>
                </View>
            </View>

            <FlatList
                data={tasks}
                keyExtractor={(item) => item.text}
                renderItem={({ item }) => (
                    <Task task={item} handleComplete={handleCompleteTask} handleDelete={handleDeleteTask} />
                )}
                ListEmptyComponent={() =>
                    <View style={styles.emptyStateContainer}>
                        <Feather name="clipboard" size={56} color={theme.colors.gray300} />
                        <View>
                            <Text style={[styles.emptyStateText, { fontFamily: theme.typography.boldText }]}>
                                You don't have any tasks.
                            </Text>
                            <Text style={[styles.emptyStateText, { fontFamily: theme.typography.regularText }]}>
                                Create your tasks and get organized.
                            </Text>
                        </View>
                    </View>
                }
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}