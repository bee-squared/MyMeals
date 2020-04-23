import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import Colors from '../constants/Colors';

const MealsNavigator = createStackNavigator({
  Categories: {
    screen: CategoriesScreen,
  },
  CategoryMeals: {
    screen: CategoryMealScreen,
  },
  MealDetail: MealDetailScreen,
}, { // defaults get overriden if the component navigation options are defined for a component
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: Platform === 'android' ? Colors.primaryColor : '',
    },
    headerTintColor: Platform === 'android' ? 'white' : Colors.primaryColor,
  }
}
)

export default createAppContainer(MealsNavigator);