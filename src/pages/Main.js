import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    FlatList,
    Button,
    TouchableHighlight,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { setFavorite, getFavorite } from '../FavoriteAction';


export default class Main extends Component {

    constructor(props){
        super(props);
        this.state = {
            data: [],
            favoritos: []
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

    escolherFavorito = async (item) => {
        this.setState({
            favoritos: await setFavorite(item)
        })
    }

    loadFavorites = async () => {
        this.setState({
          favoritos: await getFavorite()  
        })
    }

     isfavorite = (item) => {
        return this.state.favoritos.filter(f=> f.id == item.id)[0]
     }

    componentDidMount() {
        this.loadUsers();
        this.loadFavorites();
    }

    render() {
        return (
            <View style={styles.container}>
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
                            <View style={styles.buttonContainer}>
                                <Button 
                                title='Ver Mais!' 
                                onPress={() => {this.props.navigation.navigate("Details", {noticia: item} )}}
                                color="#489A12">
                                </Button>
                                <TouchableHighlight onPress={()=> this.escolherFavorito(item)}>
                                <Icon name="md-star" size={30} color={this.isfavorite(item) ? 'yellow' : 'gray'}/>
                                </TouchableHighlight>
                            </View>
                        </View> 
                        )}
                    />
                    
                </View>
            </View>
        );
    }
}



const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ccc',
    },
    containerCard: {
        flex: 1,
        margin: 5,
        padding: 5,
        alignItems: 'center',
        justifyContent: 'space-around',
        height: 300,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
        color: '#489A12'
    },
    image: {
        width: 300, 
        height: 150,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: 200
    },
    favText: {
        fontSize: 16,
        fontWeight: 'bold',
    }
})
