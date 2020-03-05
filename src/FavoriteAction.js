
 import { AsyncStorage } from 'react-native'

 export const setFavorite = async (item) => {
    AsyncStorage.getItem('favorite_Key').then(r => {
        let favoritos = JSON.parse(r) || []
        let index = favoritos.findIndex(f => f.id == item.id)
        if(index !== -1) {
            favoritos.push(item)
        } else {
            favoritos.splice(index, 1)
        }
        AsyncStorage.setItem('favorite_Key', JSON.stringify(favoritos)) 
        Promise.resolve(favoritos)
    })

}

 export const getFavorite = async () => {
    let dados = await AsyncStorage.getItem('favorite_Key');
    return JSON.parse(dados);
};
