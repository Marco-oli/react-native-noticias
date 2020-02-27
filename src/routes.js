import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import Details from './pages/Details';

const Routes = createAppContainer(
    createStackNavigator({
        Main: {
            screen: Main,
            navigationOptions: {
                title: 'Notícias',
            }
        },
        Details: {
            screen: Details,
            navigationOptions: {
                title: 'Descrição da Notícia'
            }
        },
    }, {
        defaultNavigationOptions: {
            headerTitleAlign: 'center',
            headerTintColor: '#FFF',
            headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 22,
            },
            headerStyle: {
                backgroundColor: '#7D40E7',
            }
        }

    })
);

export default Routes;