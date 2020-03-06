import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    FlatList
} from 'react-native';
import { getFavorite } from '../FavoriteAction';


export default class Favorites extends Component {

    constructor(props){
        super(props);
        this.state = {
            favoritos: []
        }
    }

    loadFavorites = async () => {
        this.setState({
          favoritos: await getFavorite()  
        })
    }


    componentDidMount() {
        this.loadFavorites()
    }

    componentDidUpdate(prevProps, prevState){
        prevState.favoritos
    }

    render() {
        return (
            <View style={styles.containerTitle}>
            <Text style={styles.favoritos}>Favoritos</Text>
                <FlatList 
                data={this.state.favoritos}
                renderItem={({item}) => (
                    <View style={styles.containerCard}>
                        <Text style={styles.title}>{item.title}</Text>
                        <Image 
                        source={{ uri: item.image_url }}
                        style={styles.image} 
                        />
                    </View> 
                    )}
                />
            </View>
        );
    }

}

const styles = StyleSheet.create({
    containerTitle: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F0F0F0'
    },
    favoritos: {
        marginTop: 25,
        fontSize: 30,
        fontWeight: 'bold'
    },
    containerCard: {
        flex: 1,
        marginTop: 15,
        margin: 5,
        padding: 5,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 15,
        textAlign: 'center',
        color: '#489A12'
    },
    image: {
        width: 300, 
        height: 200,
        alignItems: 'center',
        justifyContent: 'center',
    }
});