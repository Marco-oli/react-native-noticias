import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Main from './pages/Main';
import Details from './pages/Details';
import Favorites from './pages/Favorites';

const Routes = createAppContainer(
    createBottomTabNavigator(
    {
        Home: Main,
        Details: Details,
        Favorites: Favorites,
    },
    {
      defaultNavigationOptions: ({navigation}) => ({
          tabBarIcon: ({focused, horizontal, tintColor}) => {
              const {routeName} = navigation.state;
              let IconComponent = Ionicons;
              let iconName;

              if(routeName === 'Home') {
                  iconName = 'md-home'
              } else if (routeName === 'Details') {
                  iconName = 'md-list'
              } else if (routeName === 'Favorites') {
                  iconName = 'md-star'
              }

              return <IconComponent name={iconName} size={30} color={tintColor}/>
          }
      })
    })
);

export default Routes;