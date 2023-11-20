// Example for HomeScreen.js
import MainLayout from '../layouts/MainLayout';
// ... [other imports and code] ...

const HomeScreen = ({navigation}) => {
    // ... [existing logic] ...

    return (
        <MainLayout>
            <View>
                <ToDoList tasks={tasks} />
                <ToDoForm addTask={addTask} />
                <Button
                    title="Go to About"
                    onPress={() => navigation.navigate('About')}
                />
            </View>
        </MainLayout>
    );
};
