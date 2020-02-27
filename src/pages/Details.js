import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    ScrollView,
    Image
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
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 15,
        borderBottomColor: '#ccc',
        textAlign: 'center',
    },
    description: {
        fontSize: 15,
        marginBottom: 10,
        textAlign: 'center',
        marginBottom: 50
    },
    image: {
        width: 300, 
        height: 200,
        alignItems: 'center',
        justifyContent: 'center',
    }
});