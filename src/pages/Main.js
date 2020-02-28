import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    FlatList,
    Button,
} from 'react-native';

export default class Main extends Component {

    constructor(props){
        super(props);
        this.state = {
            data: []
        }
    }

    loadUsers = () => {
        fetch("https://demo5125412.mockable.io/news")
        .then(response => response.json())
        .then(r => {
            this.setState({
                data: r
            })
        })
    }

    componentDidMount() {
        this.loadUsers();
    }

    render() {
        return (
            <View style={styles.containerCard}>
                <FlatList 
                    data={this.state.data}
                    renderItem={({item}) => (
                        <View style={styles.containerCard}>
                        <Text style={styles.title}>{item.title}</Text>
                        <Image 
                        source={{ uri: item.image_url }}
                        style={styles.image} 
                        />
                        <Button style={styles.button} title='Ver Mais!' onPress={() => {this.props.navigation.navigate("Details", {noticia: item} )}}></Button>
                    </View> 
                    )}
                />
                
            </View>
        );
    }
}



const styles = StyleSheet.create({
    containerCard: {
        flex: 1,
        margin: 3,
        padding: 3,
        alignItems: 'center',
        justifyContent: 'space-around',
        height: 530,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center'
    },
    image: {
        width: 300, 
        height: 280,
        alignItems: 'center',
        justifyContent: 'center',
    },
})
