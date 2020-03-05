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

    render() {
        return (
            <View style={styles.container}>
            <FlatList 
            data={this.state.favoritos}
            renderItem={({item}) => (
            <View style={styles.container}>
                <Text style={styles.detalhe}>Favoritos</Text>
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
    container: {
        flex: 1,
        margin: 5,
        padding: 5,
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    detalhe: {
        fontSize: 30,
        fontWeight: 'bold',
        color: "blue"
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 15,
        textAlign: 'center',
    },
    image: {
        width: 300, 
        height: 200,
        alignItems: 'center',
        justifyContent: 'center',
    }
});