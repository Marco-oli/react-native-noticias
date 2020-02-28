import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image
} from 'react-native';

export default class Favorites extends Component {
    render() {

        return (
            <View style={styles.container}>
                <Text style={styles.title}>Bla</Text>
                <Text style={styles.description}>Bla</Text>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 5,
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 15,
        textAlign: 'center',
    },
    description: {
        fontSize: 16,
        marginBottom: 30,
        textAlign: 'center',
    },
    image: {
        width: 300, 
        height: 200,
        alignItems: 'center',
        justifyContent: 'center',
    }
});