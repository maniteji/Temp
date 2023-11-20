import React, { useState } from 'react';
import { View, Button } from 'react-native';
import ToDoList from '../components/ToDoList';
import ToDoForm from '../components/ToDoForm';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainLayout from '../layouts/MainLayout';

export default function HomeScreen({navigation}) {
    const [tasks, setTasks] = useState([
        'Do laundry',
        'Go to gym',
        'Walk dog'
    ]);
    const addTask = (taskText) => {
        if (!tasks.includes(taskText)) {
            setTasks([...tasks, taskText]);
        }
    };

    return (
        <View>
            <ToDoList tasks={tasks} />
            <ToDoForm addTask={addTask} />
            <Button
                title="Go to About"
                onPress={() => navigation.navigate('About')}
            />
        </View>
       
    );
}
