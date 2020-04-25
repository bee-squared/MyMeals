import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons } from '@expo/vector-icons';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import Favorites from '../screens/FavoritesScreen';
import Colors from '../constants/Colors';
import FavoritesScreen from '../screens/FavoritesScreen';


const MealsNavigator = createStackNavigator({
  Categories: {
    screen: CategoriesScreen,
  },
  CategoryMeals: {
    screen: CategoryMealScreen,
  },
  MealDetail: MealDetailScreen,
}, { // defaults get overriden if the component navigation options are defined for a component
  // mode: 'modal' // option to have a different animation when screen opens
  // initialRouteName: 'MealDetail', // example to have a different initial load screen instead of the top stacked screen
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
  }
});

const MealsFavTabNavigator = createBottomTabNavigator({
  Meals: {
    screen: MealsNavigator,
    // options only matters when you use a navigator (like this stack navigator) in of another navigator
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor} />
      },
    },
  },
  Favorites: FavoritesScreen
}, {
  tabBarOptions: {
    activeTintColor: Colors.primaryColor,
  },
});

export default createAppContainer(MealsFavTabNavigator);