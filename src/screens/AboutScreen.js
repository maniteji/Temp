import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function AboutScreen() {
    const getCurrentDateAndTime = () => {
        const now = new Date();
        return now.toLocaleString(); // Adjusts to local date and time format
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Manjot Singh Teji</Text>
            <Text style={styles.text}>Lab App</Text>
            <Text style={styles.text}>Current Date and Time: {getCurrentDateAndTime()}</Text>
        </View>
    );
}

// ... [styles definition] ...

export default AboutScreen;
