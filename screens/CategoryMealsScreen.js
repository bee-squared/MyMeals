import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

import { CATEGORIES } from '../data/dummy-data';

const CategoryMealScreen = (props) => {
  const catId = props.navigation.getParam('categoryId');
  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId)

  return (
    <View style={styles.screen}>
      <Text>The Meal Screen!</Text>
      <Text>{selectedCategory.title}</Text>
      <Button title="Go to Meal Detail!" onPress={() => {
        props.navigation.navigate({routeName: 'MealDetail'})
        // yields same as above //
        // props.navigation.navigate('MealDetail')
      }} />
      <Button title="Go Back" onPress={() => {
        props.navigation.pop();
      }} />
    </View>
  )
};

CategoryMealScreen.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam('categoryId')
  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId)

  return {
    headerTitle: selectedCategory.title,
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default CategoryMealScreen;