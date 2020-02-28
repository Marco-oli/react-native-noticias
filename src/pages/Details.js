import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    Button,
} from 'react-native';

export default class Details extends Component {
    render() {

        const noticia = this.props.navigation.getParam('noticia')

        return (
            <View style={styles.container}>
                <Text style={styles.title}>{noticia.title}</Text>
                <Text style={styles.description}>{noticia.description}</Text>
                <Image
                    source={{ uri: noticia.image_url }}
                    style={styles.image}
                />
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 5,
        padding: 5,
        justifyContent: 'space-around',
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
        marginBottom: 10,
        textAlign: 'center',
    },
    image: {
        width: 300,
        height: 130,
        alignItems: 'center',
        justifyContent: 'center',
    
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: 300
    },
});